const { SiteClient } = require("datocms-client");
const client = new SiteClient("acd6ab2eef2cff427348116457ae9d");
// const client = new SiteClient(`${process.env.NEXT_DATOCMS_API_TOKEN}`);

async function createRecord(details) {
  const record = await client.items.create({
    itemType: "1312746", // model ID
    transaction_id: details.id,
    delivery_full_name: details.purchase_units[0].shipping.name.full_name,
    address: details.purchase_units[0].shipping.address.address_line_1,
    state: details.purchase_units[0].shipping.address.admin_area_2,
    cep: details.purchase_units[0].shipping.address.postal_code,
    price: details.purchase_units[0].amount.value,
    payment_id: details.purchase_units[0].payments.captures[0].id,
    payment_status: details.purchase_units[0].payments.captures[0].status,
    first_name: details.payer.name.given_name,
    surname: details.payer.name.surname,
    email: details.payer.email_address,
    paypal_client_id: details.payer.payer_id,
    paypal_payment_link: details.links[0].href,
    created_order: details.purchase_units[0].payments.captures[0].create_time
  });
  
}



export default createRecord;
