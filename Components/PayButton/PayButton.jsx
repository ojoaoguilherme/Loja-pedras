import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import createRecord from "../../lib/orderAPI";
import updateProductStatus from "../../lib/updateProduct";

export default function PayButton({ product }) {
  return (
    <PayPalButton
      amount={product.price}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        createRecord(details);
        updateProductStatus(product);
        alert("Transação efetuada com sucesso!!"); // + details.payer.name.given_name

        // OPTIONAL: Call your server to save the transaction
      }}
      options={{
        clientId:
          "AYJk9uaMyv9pSmvXQ3qmzieNElP3nXeThJI_awjMen30Q2JjRzKbLvcuo8cNs6IcRvZleeE72NhIbkhE" ||
          `${process.env.PRODUCTION_CLIENT_ID}`,
        currency: "BRL",
      }}
    />
  );
}
