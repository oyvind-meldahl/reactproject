import React, { useEffect } from "react";
import { StyledPage } from "../../styles/pages/generalPageStyles";
import ProductCard from "../../components/ProductCard";

export default function Home({ products }) {
  useEffect(() => {
    document.title = "Another Heaven Boutique | Homepage";
  }, []);

  return (
    <>
      <StyledPage>
        <h1>All products</h1>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              discountedPrice={product.discountedPrice}
              description={product.description}
            />
          );
        })}
      </StyledPage>
    </>
  );
}
