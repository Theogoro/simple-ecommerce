import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clear } from "../../store/cartDuck";
import { addNotification } from "../../store/notificationDuck";
import { TextField, InputLabel, Button } from "@material-ui/core";
import "../styles/Checkout.css";

export default function Checkout(props) {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.cart.products);

  const handleClick = () => {
    dispatch(clear());
    dispatch(
      addNotification({
        title: "Compra!",
        message: "Su compra se realizó con exito 😁",
      })
    );
  };

  return (
    <div className="checkout__wrapper">
      <div className="checkout">
        <h2>Tu pedido 🛒</h2>
        {products.length !== 0 && (
          <>
            <ul className="checkout__list">
              {products.map((product, index) => (
                <li className="checkout__element" key={index}>
                  <figure>
                    <img src={product.imageUrl} alt={product.name} srcset="" />
                  </figure>
                  <div className="vertical-center">
                    <h3 className="checkout__element-name">{product.name}</h3>
                  </div>
                  <div className="vertical-center">
                    <p className="checkout__element-amount-and-price">
                      {product.amount || 1} x ${product.price}
                    </p>
                  </div>
                  <div className="vertical-center">
                    <p className="checkout__element-subtotal">
                      ${product.subtotal}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <form>
              <h3>Tus datos</h3>
              <InputLabel htmlFor="input-direccion">Dirección</InputLabel>
              <TextField id="input-direccion" />
              <InputLabel htmlFor="">Número</InputLabel>
              <TextField id="input-direccion" />
              <InputLabel htmlFor="">Departamento</InputLabel>
              <TextField id="input-direccion" />
              <InputLabel htmlFor="">Telefono</InputLabel>
              <TextField id="input-direccion" />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  style={{ width: "100%" }}
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Comprar
                </Button>
              </Link>
              <i>🔥 por el momento solo aceptamos los pagos fisicos</i>
            </form>
          </>
        )}
        {products.length === 0 && (
          <p className="checkout_error">
            Aún no tienes productos en tu carrito ;(
            <p>
              <Link to="/">Agrega productos en el inicio</Link>
            </p>
          </p>
        )}
      </div>
    </div>
  );
}
