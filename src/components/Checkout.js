import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from "react"
import { useCart } from 'react-use-cart'
import purchase from './Home'



const Checkout = () => {

    let subTotal = 0

    const totalPrice = (index) =>{
       let tPrice = purchase[index].price*purchase[index].quantity;
       subTotal += tPrice
       return `£ ${tPrice}`
    }

    const handlerQty = (key) =>{
        // purchase.filter((purchase) => purchase.id === key && setPurchase({...purchase, qty:8}))
        // console.log("Value changed");
    }
    return(
        <>
        <h2 className="shoppingCartheading">Shopping Cart</h2>
        <div className="cartDescriptionBar">
            <p>Cat</p>
            <p>Cost of Adoption</p>
            <p>Quantity</p>
            <p>Edit Quantity</p>
            <p>Total</p>
        </div>
        {purchase.map((purchase, index)=>(
            <Products key={purchase.id} link={purchase.url} price={purchase.price} qty={purchase.quantity} total={totalPrice(index)} handlerQty={handlerQty}/>

        ))}
        
        <div className="subTotal">
            <p>Subtotal </p>
            <p>£ {subTotal}</p>
        </div>
        <div className="cartButtons">
            <Link to="/"><button className="checkOut" >Continue Shopping</button></Link>
            <Link to=""><button className="checkOut">Proceed to checkout</button></Link>
        </div>
        </>
    )
}


const Products = ({key, link, price, qty, total, handlerQty}) =>{
    // let {kay} = props.key
    
    return(
        <div className="cartProduct">
            <img src={link}/>
            <p>£ {price}</p>
            {/* <p>{props.qty}</p> */}
            {/* <input type="text" value={props.qty} /> */}
            <p>{qty}</p>
            <div>
                <button onClick={(key)=> handlerQty(key)}>-</button>
                <button>+</button>
            </div>
            <p>{total}</p>

        </div>
    )
}


export default Checkout