import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { catsData } from "./Home";

const Checkout = () => {
  const purchase = catsData.filter((el) => el.quantity > 0);

  // const [purchase, setPurchase] = useState([
  //         {name: "birman", url:"/images/birman.png", price: 500, quantity: 2, id:1},
  //         {name: "himalayan", url:"/images/himalayan.png", price: 800, quantity: 1, id:2},
  //         {name: "manx", url:"/images/manx.png", price: 600, quantity: 1, id:3},
  //         // {name: "ragamuffin", url:"/images/ragamuffin.png", price: 600, quantity: 1, id:4},
  //         // {name: "Burmese", url:"/images/Burmese.png", price: 500, quantity: 1, id:5},
  //         // {name: "maine-coon", url:"/images/maine-coon.png", price: 800, quantity: 1, id:6},
  //         // {name: "norwegian-forest-cat", url:"/images/norwegian-forest-cat.png", price: 600, quantity: 1, id:7},
  //         // {name: "ragdoll-detail", url:"/images/ragdoll-detail.png", price: 600, quantity: 1, id:8},
  //         // {name: "scottish-fold", url:"/images/scottish-fold.png", price: 500, quantity: 3, id:9},
  //     //     // {name: "Selkirk-Rex", url:"/images/Selkirk-Rex.png", price: 800, quantity: 1, id:10},
  //     //     // {name: "turkish-van", url:"/images/turkish-van.png", price: 600, quantity: 1, id:11},
  //     //     // {name: "American-Bobtail", url:"/images/American-Bobtail.png", price: 500, quantity: 2, id:12},
  //     //     // {name: "american-shorthair", url:"/images/american-shorthair.png", price: 800, quantity: 1, id:13},
  //     //     // {name: "balinese", url:"/images/balinese.png", price: 600, quantity: 1, id:14},
  //     //     // {name: "bombay", url:"/images/bombay.png", price: 600, quantity: 1, id:15},
  //     //     // {name: "british-shorthair", url:"/images/british-shorthair.png", price: 500, quantity: 1, id:16},
  //     //     // {name: "chartreux", url:"/images/chartreux.png", price: 800, quantity: 1, id:17},
  //     //     // {name: "exotic-shorthair", url:"/images/exotic-shorthair.png", price: 600, quantity: 1, id:18},
  //     //     // {name: "Japanese-Bobtail", url:"/images/Japanese-Bobtail.png", price: 600, quantity: 1, id:19},
  //     //     // {name: "laperm", url:"/images/laperm.png", price: 500, quantity: 3, id:20},
  //     //     // {name: "russian-blue", url:"/images/russian-blue.png", price: 800, quantity: 1, id:21},
  //     //     // {name: "siamese", url:"/images/siamese.png", price: 600, quantity: 1, id:22},
  //     //     // {name: "turkish-angora", url:"/images/turkish-angora.png", price: 600, quantity: 1, id:22}

  //     ])

  let subTotal = 0;

  const totalPrice = (index) => {
    let tPrice = purchase[index].price * purchase[index].quantity;
    subTotal += tPrice;
    return `£ ${tPrice}`;
  };

  return (
    <>
      <h2 className="shoppingCartheading">Shopping Cart</h2>
      <div className="cartDescriptionBar">
        <p>Cat</p>
        <p>Cost of Adoption</p>
        <p>Quantity</p>
        <p>Edit Quantity</p>
        <p>Total</p>
      </div>
      {purchase.map((obj, index) => {
        return (
          <Products
            key={obj.id}
            link={obj.url}
            price={obj.price}
            qty={obj.quantity}
            total={totalPrice(index)}
          />
        );
      })}

      <div className="subTotal">
        <p>Subtotal </p>
        <p>£ {subTotal}</p>
      </div>
      <div className="cartButtons">
        <Link to="/">
          <button className="checkOut">Continue Shopping</button>
        </Link>
        <Link to="">
          <button className="checkOut">Proceed to checkout</button>
        </Link>
      </div>
    </>
  );
};

const Products = ({ link, price, qty, total, handlerQty }) => {
  return (
    <div className="cartProduct">
      <img src={link} />
      <p>£ {price}</p>
      <p>{qty}</p>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
      <p>{total}</p>
    </div>
  );
};

export default Checkout;
