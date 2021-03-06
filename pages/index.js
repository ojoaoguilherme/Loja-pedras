import Head from "next/head";
import Products from "../Components/Products/Products";
import { request } from "../lib/datocms";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Loja de Pedras</title>
        <meta
          name="description"
          content="Loja de pedras preciosas, brutas, lapidadas, joias e muito mais. Acesse para conhecer mais!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products products={data} />
    </div>
  );
}

const HOMEPAGE_QUERY = `
query HomePage($limit: IntType){
  allProducts(first: $limit){
    id
    slug
    bought
    _status
    name
    price
    image {
      id
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
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 10,
  };
}
