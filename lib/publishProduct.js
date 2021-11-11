const { SiteClient } = require("datocms-client");
const client = new SiteClient("acd6ab2eef2cff427348116457ae9d");

async function publishProductStatus(product) {
  const itemId = `${product.id}`;
  client.item
    .publish(itemId, {
      recursive: "true",
    })
    .catch((error) => {
      console.error(error);
    });
}

export default publishProductStatus;
