import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from "react"
import { useCart } from 'react-use-cart'
import { myCart } from './Home'



const Checkout = () => {

    const purchase = [...myCart]
    
        
        
                

    let subTotal = 0

    const totalPrice = (index) =>{
       let tPrice = purchase[index].price*purchase[index].quantity;
       subTotal += tPrice
       return `£ ${tPrice}`
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
            
            <Products key={purchase.id} link={purchase.url} price={purchase.price} qty={purchase.quantity} total={totalPrice(index)}/>
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
    
    return(
        <div className="cartProduct">
            <img src={link}/>
            <p>£ {price}</p>
            <p>{qty}</p>
            <div>
                <button>-</button>
                <button>+</button>
            </div>
            <p>{total}</p>

        </div>
    )
}


export default Checkout