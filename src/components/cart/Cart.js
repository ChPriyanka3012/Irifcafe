import React from "react";
import { AppContext } from "../../context/appContext.js";
import { useContext, useState, useEffect } from "react";
import prodlist from "../product/products.json"
import "./Cart.css"


export default function Cart() {
  const { cartItems, setCartItems, products } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);

  useEffect(() => {
    setOrderValue((prev) =>
    products.reduce((total, value) => {
          return total + value.price * (cartItems[value.id] ?? 0);
      }, 0)
    );
  }, [cartItems]);

  const updateCart = (id, qty) => {
    setCartItems((prev) => ({ ...prev, [id]: qty }));
  };

  return (
    <div>
      
      {products.map((elem) => {
        if (cartItems[elem.id]) {
          return (
            <div key={elem.id} ClassName="Cart-items">
              
             <div className="Img-align">
            <img src={elem.image} alt={elem.name} /> 
            </div>
            <div className="Product-align">
              <h3>{elem.name}</h3>  
              <p>&#8377;{elem.price}</p>
              
              <button className="Cart-button"
                onClick={() => updateCart(elem.id, cartItems[elem.id] - 1)}>
                -
              </button>
              {cartItems[elem.id]}
              <button  className="Cart-button"
                onClick={() => updateCart(elem.id, cartItems[elem.id] + 1)}
              >
                +
              </button>
              </div>
            </div>
          );
        }
      })}<b><hr></hr></b>
      <div className="footer"><h2>Order Value:{orderValue}</h2></div>
    </div>
  );
}
