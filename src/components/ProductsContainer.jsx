import React from "react";
import { useSelector } from "react-redux";
import ProductView from "./ProductView";
import "./styles/ProductsContainer.css";

export default function ProductsContainer() {
  const products = useSelector((store) => store.products.products);

  return (
    <>
      {products.length !== 0 && (
        <ul className="products-container">
          {products.map((product, index) => (
            <ProductView product={product} key={index} />
          ))}
        </ul>
      )}

      {products.length === 0 && <p>Cargando...</p>}
    </>
  );
}
