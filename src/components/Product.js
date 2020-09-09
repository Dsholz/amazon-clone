import React from "react";
import "../styles/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, decimal, rating, darkMode }) {
  const [state, dispatch] = useStateValue(useStateValue);

  const addToBasket = () => {
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
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__img" src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
