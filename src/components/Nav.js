import React from "react";
import { Link } from "react-router-dom"


const Nav = () => {

    return (
        <nav className = "navbar">
            <div className="logo">Cats4Lyf</div>
            <Link to = "/Home">Home</Link>
            <Link to = "/Checkout">Checkout</Link>
        </nav>

    )
}

export default Nav