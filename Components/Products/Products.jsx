import { Image } from "react-datocms";
import Link from "next/link";
import ProductsListStyle from "./ProductsListStyle";

export default function Products({ products }) {
  return (
    <ProductsListStyle>
      {products.allProducts.map((product) => (
        <div className="container" key={product.id}>
          <Link passHref href={`/product/${product.slug}`}>
            <div>
              <Image
                data={product.image.responsiveImage}
                alt={product.image.responsiveImage.alt}
              />
              <h3>{product.name}</h3>
              {product.bought ? (
                <div className="product-unavailable">
                  <p>Indisponível</p>
                </div>
              ) : (
                <div>
                  <p>
                    Preço: R$<span className="valor">{product.price}</span>
                  </p>
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </ProductsListStyle>
  );
}
