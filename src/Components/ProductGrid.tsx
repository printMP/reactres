import React from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "../data/Product";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
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