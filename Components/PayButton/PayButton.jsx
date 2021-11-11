import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

//API Dato
import createRecord from "../../lib/orderAPI";
import publishProductStatus from "../../lib/publishProduct";
import updateProductStatus from "../../lib/updateProduct";

export default function PayButton({ product }) {
  return (
    <PayPalButton
      options={{
        clientId:
          "AYJk9uaMyv9pSmvXQ3qmzieNElP3nXeThJI_awjMen30Q2JjRzKbLvcuo8cNs6IcRvZleeE72NhIbkhE" ||
          `${process.env.PRODUCTION_CLIENT_ID}`,
        currency: "BRL",
      }}
      currency="BRL"
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              reference_id: product.id,
              description: product.name,

              amount: {
                value: product.price,
                currency: "BRL",
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        // Capture the funds from the transaction
        return actions.order.capture().then(function (details) {
          // Show a success message to your buyer
          alert("Transaction completed by " + details.payer.name.given_name);
          createRecord(details);
          updateProductStatus(product);
          publishProductStatus(product);
        });
      }}
    />
  );
}
