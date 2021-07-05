import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartDuck";
import "./styles/ProductView.css";
import { addNotification } from "../store/notificationDuck";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function ProductView(props) {
  const dispatch = useDispatch();
  const product = props.product;

  const amountRef = useRef();
  const handleClick = (event) => {
    dispatch(
      addNotification({
        title: "Agregado!",
        message: "Se agrego el producto al carrito 🛒",
      })
    );
    dispatch(addProduct(product.addToCart(amountRef.current.value)));
  };

  return (
    <li className="product-view">
      <h3>{product.name}</h3>
      <figure className="product-view__image-container">
        <img src={product.imageUrl} alt={product.name} />
      </figure>
      <p>Precio: ${product.price}</p>
      <footer className="product-view__footer">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Agregar
        </Button>
        <input
          ref={amountRef}
          type="number"
          name="amount"
          id=""
          min="1"
          max="10"
          defaultValue="1"
        />
        <Link
          className="product-view__btn--large "
          to="/checkout"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="primary"
            className=""
            onClick={() => dispatch(addProduct(product))}
          >
            Comprar ahora
          </Button>
        </Link>
      </footer>
    </li>
  );
}
