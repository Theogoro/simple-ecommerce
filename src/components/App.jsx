import React from "react";
import ProductsContainer from "./ProductsContainer";
import Header from "./Header";
import Notificator from "./Notificator";
import Hero from "./pages/index/Hero";
import "./styles/App.css";
import Checkout from "./pages/checkout/Checkout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Hero />
            <ProductsContainer />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Notificator />
      </Router>
    </div>
  );
}

export default App;
