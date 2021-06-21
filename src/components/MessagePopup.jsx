import React, { useState } from "react";
import "./styles/MessagePopup.css";
import BellIcon from "bootstrap-icons/icons/bell-fill.svg";

export default function MessagePopup(props) {
  const [show, setShow] = useState(true);

  const animationDuration = 0.5;
  const secondsToHide = 5;

  // Unificar las animaciones para que sea más sencillos modificarlo
  const style = {
    animation: `transition ${animationDuration}s reverse, transition ${animationDuration}s ${
      secondsToHide - animationDuration
    }s`,
  };

  setTimeout(() => {
    setShow(false);
  }, secondsToHide * 1000);

  return (
    <>
      {show && (
        <div className="message-popup" style={style}>
          <figure>
            <img src={BellIcon} alt="Campana de notificaciones" />
          </figure>
          <h3>{props.title}</h3>
          <p>{props.message}</p>
        </div>
      )}
    </>
  );
}
