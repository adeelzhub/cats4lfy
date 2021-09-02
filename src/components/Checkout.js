import {Link} from 'react-router-dom'
import { useState } from "react"

const Checkout = (basketItem, product__price) => {
   
 //test
    const [qty, setQty] = useState(null)
    const handlerBasketTotal = ()=>{

    }

    return(
        <div>
            <Link to="/"><button>Back To Home Page</button></Link>
            <h2 className='checkout'>checkout</h2>
            <div>{basketItem.length === 0 && <div>Basket is empty</div>} </div>
            <Items item={item} product__price={product__price} qty={qty}> subTotal={subTotal}</Items>
            <div className="basketTotal">
                <p>Basket Total</p>
                <p>{}</p>  
            </div>   
           
        </div>
    )

}




const Items = ({item, product__price, qty}) =>{
    const handlerQty = (q)=>{
        setQty(q)

    } 
    return(
        <div className="checkOut">
                
                <p>{item}</p>
                <p>{product__price}</p>
                <input onChange={(e)=>handlerQty(e.target.value)}></input>
                <button>Remove Product</button>
                <p>{totalPrice}</p>
        </div>
    )
}


export default Checkout