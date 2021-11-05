import { request } from "../../lib/datocms";
import Product from "../../Components/Product/Product";

export default function ProductPage({ product }) {
  return (
    <>
      <Product product={product} />
    </>
  );
}


const LIST_PRODUCT_QUERY = `
query MyQuery {
  allProducts {
    id
    slug
    bought
    _status
  }
}
`;
export async function getStaticPaths() {
  // Call an external API endpoint to get products
  const data = await request({
    query: LIST_PRODUCT_QUERY,
  });

  const products = await data.allProducts;

  // Get the paths we want to pre-render based on posts
  const paths = data.allProducts.map((product) => {
    return {
      params: { slug: product.slug },
    };
  });
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
}
const PRODUCT_INFO = `
query MyQuery($param: String) {
  product(filter: {slug: {eq: $param}}) {
    createdAt
    id
    slug
    bought
    _status
    name
    price
    category {
      name
    }
    image {
      id
      width
      height
      size
      alt
      url
      responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        base64
      }
    }
    description{
      value
      blocks{
         __typename
        
      }
    }
  }
}
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  console.log(slug);
  const data = await request({
    query: PRODUCT_INFO,
    variables: { param: slug },
  });
  return {
    props: {
      product: data.product,
    },
    revalidate: 10, // In seconds
  };
}
