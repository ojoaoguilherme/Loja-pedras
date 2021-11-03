import React from "react";
import ProductStyle from "./ProductStyle";

import { StructuredText } from "react-datocms";
import { Image } from "react-datocms";
import { PayPalButton } from "react-paypal-button-v2";


export default function Product({ product }) {
  console.log(product);
  return (
    <ProductStyle>
      <div className="image-container">
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

        <PayPalButton
          amount={product.price}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderId: data.orderID,
              }),
            });
          }}
          options={{
            clientId:
              "AYJk9uaMyv9pSmvXQ3qmzieNElP3nXeThJI_awjMen30Q2JjRzKbLvcuo8cNs6IcRvZleeE72NhIbkhE" ||
              `${process.env.PRODUCTION_CLIENT_ID}`,
              currency: "BRL"
          }}
        />
      </div>
    </ProductStyle>
  );
}
