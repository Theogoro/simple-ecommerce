import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartDuck";
import "./styles/ProductView.css";
import MessagePopup from "./MessagePopup";
import { addNotification } from "../store/notificationDuck";

export default function ProductView(props) {
  const dispatch = useDispatch();
  const product = props.product;

  const amountRef = useRef();
  const handleClick = (event) => {
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
        <button onClick={handleClick}>Agregar al carrito</button>
        <input
          ref={amountRef}
          type="number"
          name="amount"
          id=""
          min="1"
          max="10"
        />
        <button
          className="product-view__btn--large"
          onClick={() =>
            dispatch(
              addNotification({
                title: "Este es un titulo más largo",
                message: "Este es un titulo aún más largo",
              })
            )
          }
        >
          Comprar ahora
        </button>
      </footer>
    </li>
  );
}
