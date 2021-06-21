import React from "react";
import ProductsContainer from "./ProductsContainer";
import Header from "./Header";
import Notificator from "./Notificator";
import Hero from "./Hero";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductsContainer />
      <Notificator />
    </div>
  );
}

export default App;
