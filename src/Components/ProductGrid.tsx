import React from "react";
import { ProductCard } from "../Components/ProductCard";
import { products } from "../data/Product";

export const ProductGrid: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* // The .map is an automatic for loop that generates info  */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};