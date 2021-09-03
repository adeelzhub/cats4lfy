import React from "react";
import catsData from "./data";
import { useState, useEffect } from "react";

let myProduct = [];

const Home = () => {
  const addProduct = (obj) => {
    let arr = [];
    myProduct.push(obj);
    console.log(myProduct);
  };

  return (
    <div className="home">
      <div className="products">
        {catsData.map((el, i) => {
          return (
            <Product
              name={el.name}
              price={el.price}
              fetch={el}
              key={i}
              btn={() => {
                addProduct(el);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Product = (props) => {
  const [url, setURL] = useState("");
  async function catURL(targetURL) {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      if (response.status !== 200) {
        throw new Error(`${response.status} Error`);
      }
      const data = await response.json();
      const [cat] = data;

      setURL(cat.url);
      targetURL.url = cat.url;
      console.log(catsData);
    } catch (error) {
      console.log(error);
    }
  }

  //   catURL(props.fetch);

  //   useEffect(() => {
  //     catURL(props.fetch);
  //   });

  return (
    <div
      className="product"
      onClick={() => {
        catURL(props.fetch);
      }}
    >
      <img className="product__image" src={url} alt="cat"></img>
      <div className="product__box">
        <div className="product__details">
          <div className="product__name">{props.name}</div>
          <div className="product__price">£: {props.price}</div>
        </div>
        <button className="product__btn" onClick={props.btn}>
          +
        </button>
      </div>
    </div>
  );
};

// class Product2 extends React.Component {
//     state = ''

//     async componentDidMount() {
//       const response = await fetch(
//           "https://api.thecatapi.com/v1/images/search"
//         );
//         if (response.status !== 200) {
//           throw new Error(`${response.status} Error`);
//         }
//         const data = await response.json();
//         const [cat] = data;
//         this.setState(cat.url)
//         arr.push(url);
//         console.log(arr);
//       } catch (error) {
//         console.log(error);
//       }
//     }

// render(props); {
//     return(
//       <div className="product">
//       <img className="product__image" src={url} alt="cat"></img>
//       <div className="product__box">
//         <div className="product__details">
//           <div className="product__name">{props.name}</div>
//           <div className="product__price">{props.price}</div>
//         </div>
//         <button className="product__btn" onClick={props.btn}>
//           +
//         </button>
//       </div>
//     </div>
//     )
// }
// }

export default Home;

export { myProduct };
