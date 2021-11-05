import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { SiteClient } from "datocms-client";

export default function PayButton({ product }) {

  const client = new SiteClient(`${process.env.NEXT_DATOCMS_API_TOKEN}`);
  async function createRecord(orderData) {
    const record = await client.items.create({
      itemType: "1312746", // model ID
      orderData
    });
    console.log(record)
  }

  return (
    <div>
      <PayPalButton
        amount={product.price}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          // console.log(details);
          // console.log(data);
          // OPTIONAL: Call your server to save the transaction
          const orderData = JSON.stringify({
            paypal_purchase_id: details.id,
            delevery_name: details.purchase_units[0].shipping.name.full_name,
            address: details.purchase_units[0].shipping.address.address_line_1,
            state: details.purchase_units[0].shipping.address.admin_area_2,
            cep: details.purchase_units[0].shipping.address.postal_code,
            price: details.purchase_units[0].amount.value,
            payment_id: details.purchase_units[0].captures[0].id,
            payment_status: details.purchase_units[0].captures[0].status,
            payment_created: details.purchase_units[0].captures[0].create_time,
            first_name: details.payer.name.given_name,
            last_name: details.payer.name.surname,
            email: details.payer.email_address,
            payer_id: details.payer.payer_id,
            payment_link: details.links[0].href,
          });
          return (()=> createRecord(orderData))
        }}
        options={{
          clientId:
            "AYJk9uaMyv9pSmvXQ3qmzieNElP3nXeThJI_awjMen30Q2JjRzKbLvcuo8cNs6IcRvZleeE72NhIbkhE" ||
            `${process.env.PRODUCTION_CLIENT_ID}`,
          currency: "BRL",
        }}
      />
    </div>
  );
}
