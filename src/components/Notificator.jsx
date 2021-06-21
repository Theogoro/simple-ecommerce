import React from "react";
import { useSelector } from "react-redux";
import MessagePopup from "./MessagePopup";
import "./styles/Notificator.css";

export default function Notificator(props) {
  const messages = useSelector((store) => store.notification.array);

  return (
    <div className="notificator">
      {messages.map((message, index) => (
        <MessagePopup
          message={message.message}
          title={message.title}
          key={index}
        />
      ))}
    </div>
  );
}
