const { SiteClient } = require("datocms-client");
const client = new SiteClient("acd6ab2eef2cff427348116457ae9d");

async function createRecord(details) {
  const record = await client.items
    .create({
      itemType: "1312746", // model ID
      transactionid: details.id,
      deliveryfullname: details.purchase_units[0].shipping.name.full_name,
      address: details.purchase_units[0].shipping.address.address_line_1,
      state: details.purchase_units[0].shipping.address.admin_area_2,
      cep: details.purchase_units[0].shipping.address.postal_code,
      price: details.purchase_units[0].amount.value,
      paymentid: details.purchase_units[0].payments.captures[0].id,
      paymentstatus: details.purchase_units[0].payments.captures[0].status,
      buyername: `${details.payer.name.given_name} ${details.payer.name.surname}`,
      email: details.payer.email_address,
      paypalclientid: details.payer.payer_id,
      paypalpaymentlink: details.links[0].href,
      productlink: details.purchase_units[0].reference_id,
    })
    .catch((error) => {
      console.error(error);
    });
}

export default createRecord;
