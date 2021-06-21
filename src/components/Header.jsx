import React from "react";
import { useSelector } from "react-redux";
import BasketIcon from "bootstrap-icons/icons/basket.svg";
import PersonIcon from "bootstrap-icons/icons/person-circle.svg";
import LogoIcon from "../para el bajon - logo.svg";
import "./styles/Header.css";

export default function Header(props) {
  const onCart = useSelector(
    (store) => store.cart.products,
    (left, rigth) => 0
  );

  return (
    <header className="header__container">
      <img
        className="header__logo"
        src={LogoIcon}
        alt="Logo delivery para el bajon"
      />
      <h1>Para bajonear</h1>

      {/* TODO: Agregar OAuth */}
      <nav className="header__nav">
        <img src={PersonIcon} alt="User icon" />
        <div
          className={
            "header__cart-btn " +
            (onCart.length !== 0 ? "header__cart-btn--with-products" : "")
          }
        >
          <img src={BasketIcon} alt="Cart Icon" />
          <ul className="header__cart-items">
            {onCart.length !== 0 ? (
              <>
                {onCart.map((e) => (
                  <li>
                    {console.log(e)}
                    <img src={e.imageUrl} alt={e.name} />
                    <h3>{e.name}</h3>
                    <p>
                      {e.amount} x ${e.price} = ${e.subtotal}
                    </p>
                    {/* TODO: Mover a otro elemento, estilos y logica (Remover) */}
                  </li>
                ))}
                {/* TODO: Agregar boton de comprar */}
              </>
            ) : (
              <p>Aún no hay productos 😢</p>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
