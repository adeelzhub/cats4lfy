import React from 'react';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./Components/Home"
import Checkout from './Components/Checkout'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Nav from './Components/Nav'


import { CartProvider } from 'react-use-cart';
import './App.css';

const App=()=> {
  return (
    <>
    <CartProvider>
        <Home/>
        <Checkout/>
    </CartProvider>
    {/* <Router>
      <div className='app'>
        <Nav />
        <Checkout/>
        <div className='content'>
          <Switch>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/'>
              <Home />
            </Route>              
          </Switch>
        </div>
        <Footer />
      </div>
    </Router> */}
   
   </>
  );
}

export default App;


   
    




