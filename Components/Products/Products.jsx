// import Image from "next/image";
import { Image } from "react-datocms";
import Link from "next/link";
import { StructuredText } from "react-datocms";
import ProductsStyle from "./ProductsStyle";

export default function Products({ products }) {
  return (
    <ProductsStyle>
      {products.allProducts.map((product) => (
        <div className="container" key={product.id}>
          <Link passHref href={`/product/${product.slug}`}>
            <div>
              <Image
                data={product.image.responsiveImage}
                alt={product.image.responsiveImage.alt}
              />
              <h3>{product.name}</h3>
              <p>Preço: R$<span className='valor'>{product.price} </span></p>
            </div>
          </Link>
        </div>
      ))}
    </ProductsStyle>
  );
}
