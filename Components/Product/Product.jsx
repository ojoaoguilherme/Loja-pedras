import React from "react";
import ProductStyle from "./ProductStyle";

import { StructuredText } from "react-datocms";
import { Image } from "react-datocms";


export default function Product({ product }) {
  console.log(product)
  return (
    <ProductStyle>
      <Image
        data={product.image.responsiveImage}
        alt={product.image.responsiveImage.alt}
      />
      <h3>{product.name} - R${product.price}</h3>
      <StructuredText data={product.description}/>

    </ProductStyle>
  );
}
