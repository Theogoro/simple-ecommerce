import React from "react";
import { useSelector } from "react-redux";
import BasketIcon from "bootstrap-icons/icons/basket.svg";
import LogoIcon from "../para el bajon - logo.svg";
import { Button } from "@material-ui/core";

import "./styles/Header.css";

import { Link } from "react-router-dom";

export default function Header(props) {
  const onCart = useSelector(
    (store) => store.cart.products,
    (left, rigth) => 0
  );

  return (
    <header className="header__container">
      <Link to="/" className="header__branch">
        <img
          className="header__logo"
          src={LogoIcon}
          alt="Logo delivery para el bajon"
        />
        <h1>Para bajonear</h1>
      </Link>

      <nav className="header__nav">
        <div
          className={
            "header__cart-btn " +
            (onCart.length !== 0 ? "header__cart-btn--with-products" : "")
          }
        >
          <Link to="/checkout">
            <img src={BasketIcon} alt="Cart Icon" />
          </Link>
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
                  </li>
                ))}
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                  <Button
                    style={{ width: "100%" }}
                    variant="contained"
                    color="primary"
                  >
                    Comprar ahora
                  </Button>
                </Link>
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
