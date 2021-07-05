import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjNrrvmG3XFuYUCYh9UQokGNBQY0qgyEg",
  authDomain: "tienda-para-bajon.firebaseapp.com",
  projectId: "tienda-para-bajon",
  storageBucket: "tienda-para-bajon.appspot.com",
  messagingSenderId: "212356469027",
  appId: "1:212356469027:web:ff97e34eab3587ab8e7c96",
  measurementId: "G-CLEHSFB9G1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;