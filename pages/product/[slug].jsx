import { request } from "../../lib/datocms";

export default function Product(products){
  return (
    <>
    {console.log(products)}
    <h1>Hola mundo</h1>
    </>
  )
}

const PRODUCT_INFO = `
query paths {
  allProducts{
    createdAt
    id
    slug
    bought
    _status
    name
    price
    description
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
      responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }){
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
  }
}

`;

export async function getStaticProps() {
  const data = await request({
    query: PRODUCT_INFO,
  });
  const products = await data.allProducts

  return {
    props: {
      products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

const PRODUCT_SLUG = `
  query ProductSlug{
    allProducts{
      id
      name
      slug
    }
  }
`
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const data = await request({
    query: PRODUCT_SLUG,
  });
  
  // Get the paths we want to pre-render based on posts
  const paths = data.allProducts.map((product) => ({
    params: { slug: product.slug },
  }));
  
  
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
// export async function getStaticProps({params}){
//   const data = await request({
//     query: PRODUCT_INFO,
//   });
// }