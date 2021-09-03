import Checkout from "./components/Checkout";
// import Cart from './components/Cart'
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav className="navbar" />
        <div className="content">
          <Switch>
            {/* <Route path='/cart'>
              <Cart />
            </Route> */}
            <Route path="/Checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer div className="page-container" />
      </div>
    </Router>
  );
}

export default App;
