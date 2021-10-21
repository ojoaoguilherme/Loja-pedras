// import Image from "next/image";
import { Image } from "react-datocms";
import { StructuredText } from "react-datocms";

export default function Products({ products }) {
  return (
    <div>
      {products.allProducts.map((product) => (
        <div key={product.id}>
          <Image data={product.image.responsiveImage} alt={product.image.alt} />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
      <h1>Ho</h1>
      {console.log(products)}
    </div>
  );
}

//Image
// src={product.image.url}
// alt={product.image.alt || "foto"}
// width={product.image.width}
// height={product.image.height}
