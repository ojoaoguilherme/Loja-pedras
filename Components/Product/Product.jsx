import React from "react";
import ProductStyle from "./ProductStyle";
import PayButton from "../PayButton/PayButton";

import { StructuredText } from "react-datocms";
import { Image } from "react-datocms";

export default function Product({ product }) {
  return (
    <ProductStyle>
      <div className="image-container">
        <Image
          data={product.image.responsiveImage}
          alt={product.image.responsiveImage.alt}
          sizes={product.image.sizes}
          height={product.image.height}
          width={product.image.width}
        />
      </div>
      <div className="text-content">
        <div className="detailed-text">
          <h2>
            {product.name} - R${product.price}
          </h2>
          <StructuredText data={product.description.value} />
        </div>
        <div className="cointaner-buttons">
          {product.bought ? (
            <div className="product-unavailable">
              <p>Indisponível ja foi comprada</p>
            </div>
          ) : (
            <div className="payButton">
              <PayButton product={product} />
            </div>
          )}
        </div>
      </div>
    </ProductStyle>
  );
}
