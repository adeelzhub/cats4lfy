import {Link} from 'react-router-dom'
import { useState } from "react"





const Checkout = () =>{
    // const [total, setTotal] = useState("£25.50")
    // const image = "/images/ragamuffin.jpg"
    // const price = "£25.50"
    // const qty = "1"
    // const total = "£25.50"
    let subTotal = 0
const [purchase, setPurchase] = useState([
    {name: "birman", link:"/images/birman.png", price: 500, quantity: 1, id:1},
    {name: "himalayan", link:"/images/himalayan.png", price: 800, quantity: 1, id:2},
    {name: "manx", link:"/images/manx.png", price: 600, quantity: 1, id:3},
    {name: "ragamuffin", link:"/images/ragamuffin.png", price: 600, quantity: 1, id:4},
    {name: "Burmese", link:"/images/Burmese.png", price: 500, quantity: 1, id:5},
    // {name: "maine-coon", link:"/images/maine-coon.png", price: 800, quantity: 1, id:6},
    // {name: "norwegian-forest-cat", link:"/images/norwegian-forest-cat.png", price: 600, quantity: 1, id:7},
    // {name: "ragdoll-detail", link:"/images/ragdoll-detail.png", price: 600, quantity: 1, id:8},
    // {name: "scottish-fold", link:"/images/scottish-fold.png", price: 500, quantity: 3, id:9},
    // {name: "Selkirk-Rex", link:"/images/Selkirk-Rex.png", price: 800, quantity: 1, id:10},
    // {name: "turkish-van", link:"/images/turkish-van.png", price: 600, quantity: 1, id:11}
])
    const totalPrice = (index) =>{
       let tPrice = purchase[index].price*purchase[index].quantity;
       subTotal += tPrice
       return `£ ${tPrice}`
    }

    const handlerQty = (e) =>{
        // purchase.filter((purchase) => purchase.id === key && setPurchase({...purchase, qty:8}))
        console.log("Value changed")
    }
    return(
        <>
        <h2 className="shoppingCartheading">Shopping Cart</h2>
        <div className="cartDescriptionBar">
            <p>Cat</p>
            <p>Cost of Adoption</p>
            <p>Quantity</p>
            <p>Total</p>
        </div>
        {purchase.map((purchase, index)=>(
            <Products key={purchase.id} link={purchase.link} price={purchase.price} qty={purchase.quantity} total={totalPrice(index)} handlerQty={handlerQty}/>

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


const Products = (props) =>{
    // let {kay} = props.key
    
    return(
        <div className="cartProduct">
            <img src={props.link}/>
            <p>£ {props.price}</p>
            {/* <p>{props.qty}</p> */}
            <input type="text" value={props.qty} onChange={(e)=> props.handlerQty(e)}/>
            <p>{props.total}</p>

        </div>
    )
}

export default Checkout