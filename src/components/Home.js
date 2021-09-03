import React from "react";
import catsData from "./data";

const Home = () => {
  console.log(catsData);

  return (
    <div className="home">
      <div className="features">features</div>
      <div className="products">
        <div className="product">
          <div className="product__image">img</div>
          <div className="product__box">
            <div className="product__details">
              <div className="product__name">name</div>
              <div className="product__price">$</div>
            </div>
            <div className="product__btn">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
