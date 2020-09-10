import React, { useState } from "react";
import "../styles/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, decimal, rating, darkMode }) {
  const [, dispatch] = useStateValue(useStateValue);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const addToBasket = () => {
    if (!btnDisabled) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id,
          title,
          image,
          totalPrice: price + decimal,
          rating,
        },
      });

      setBtnDisabled(true);
    } else {
      alert("Item already in Basket");
    }
  };

  return (
    <div
      style={
        darkMode
          ? { backgroundColor: "#333333", color: "#fff" }
          : { backgroundColor: "#fff" }
      }
      className="product"
    >
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <span className="product__price--small">$</span>
          <strong>{price}</strong>
          <span className="product__price--small">
            {decimal.toString().substring(2, 4)}
          </span>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <span role="img" aria-label="rating">
                  ⭐
                </span>
              </p>
            ))}
        </div>
      </div>
      <img className="product__img" src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
