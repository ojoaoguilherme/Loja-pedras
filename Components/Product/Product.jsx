import React from "react";
import ProductStyle from "./ProductStyle";

import { StructuredText } from "react-datocms";
import { Image } from "react-datocms";

export default function Product({ product }) {
  console.log(product);
  return (
    <ProductStyle>
      <div className='image-container'>
        <Image
          data={product.image.responsiveImage}
          alt={product.image.responsiveImage.alt}
        />
      </div>
      <div className="text-content">
        <h3>
          {product.name} - R${product.price}
        </h3>
        <StructuredText data={product.description.value} />
      </div>
    </ProductStyle>
  );
}
