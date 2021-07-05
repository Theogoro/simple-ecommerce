import React, { useState } from "react";
import firebase from "../../../config/firebase";

// Initialize the FirebaseUI Widget using Firebase.

export default function Login(props) {
  const [credencials, setCredencials] = useState({});

  var googleProvider = new firebase.auth.GoogleAuthProvider();

  // Agregar Auth mediante los otros elementos

  const login = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => setCredencials(result));
  };

  return (
    <div className="login">
      <button onClick={login}>Iniciar sesion con google</button>
      {console.log(credencials)}
      {credencials.additionalUserInfo && (
        <>
          <h2>Hola {credencials.additionalUserInfo.profile.name}</h2>
          <img
            src={credencials.additionalUserInfo.profile.picture}
            alt="Foto de perfil"
            srcset=""
          />
        </>
      )}
    </div>
  );
}
