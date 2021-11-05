const SiteClient = require("datocms-client").SiteClient;
const client = new SiteClient("acd6ab2eef2cff427348116457ae9d");
const product = {
  id: 67093606,
};
async function updateProductStatus(product) {
  const itemId = `${product.id}`;
  client.items
    .update(itemId, {
      bought: true,
    })
    .catch((error) => {
      console.error(error);
    });

  client.item
    .publish(itemId, {
      recursive: "true",
    })
    .catch((error) => {
      console.error(error);
    });
}
updateProductStatus(product);

export default updateProductStatus;
