import React from "react";
import type {Product} from "../data/Product";
import "./ProductCard.css";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product}) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">{product.price}</p>
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="product-button"
      >
        View on Amazon
      </a>
    </div>
  );
};