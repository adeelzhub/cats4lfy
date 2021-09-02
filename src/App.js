import './App.css';
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'


import React from 'react'
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  const [basketItem, setBasketItem] = useState([])
  return (
    <Router>
      <div className='app'>
        <Nav />
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
    </Router>
    

  );
}




export default App;
