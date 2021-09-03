import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      {/* <div ClassName='cart-link'>Cart</div> */}
      <Link to="/">Home</Link>
      <Link to="/Checkout">Checkout</Link>
    </nav>
  );
};

export default Nav;
