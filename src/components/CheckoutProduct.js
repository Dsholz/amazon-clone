import React, { forwardRef } from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating }, ref) => {
    const [, dispatch] = useStateValue();

    const removeFromBasket = (id) => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id,
      });
    };

    return (
      <div ref={ref} className="checkout-product">
        <img className="checkout-product__img" src={image} alt="" />
        <div className="checkout-product__info">
          <p className="checkout-product__title">{title}</p>
          <p className="checkout-product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkout-product__rating">
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

          <button onClick={() => removeFromBasket(id)}>
            Remove from basket
          </button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
