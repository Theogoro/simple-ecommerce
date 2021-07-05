import React from "react";
import { useSelector } from "react-redux";
import ProductView from "./ProductView";
import "./styles/ProductsContainer.css";

export default function ProductsContainer(props) {
  const products = useSelector((store) => store.products.products);

  const quantity = props.quantity || -1;
  console.log(props);

  return (
    <>
      <h2 className="products-title">Productos destacados</h2>
      {products.length !== 0 && quantity === -1 && (
        <ul className="products-container">
          {products.map((product, index) => (
            <ProductView product={product} key={index} />
          ))}
        </ul>
      )}

      {products.length !== 0 && quantity !== -1 && (
        <ul className="products-container">
          {products.slice(0, quantity).map((product, index) => (
            <ProductView product={product} key={index} />
          ))}
        </ul>
      )}

      {products.length === 0 && <p>Cargando...</p>}
    </>
  );
}
