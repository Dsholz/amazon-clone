import React, { forwardRef, Fragment } from "react";
import "../styles/Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
import { Link } from "react-router-dom";

const Checkout = forwardRef(({ darkMode }, ref) => {
  const [{ basket, user }] = useStateValue();

  return (
    <div
      style={
        darkMode
          ? { backgroundColor: "#252525", color: "#fff" }
          : { backgroundColor: "#ffffff", color: "#000" }
      }
      ref={ref}
      className="checkout"
    >
      {basket.length !== 0 ? (
        <Fragment>
          <div className="checkout__left">
            <img
              className="checkout__ad"
              alt="Checkout Ad"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            />
            <div>
              <h3>Hello, {user ? user?.email : "Guest"}</h3>
              <h2 className="checkout__title">Shopping basket</h2>

              {/* Checkout Product */}

              <FlipMove leaveAnimation="ease">
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.totalPrice}
                    rating={item.rating}
                  />
                ))}
              </FlipMove>
            </div>
          </div>
          <div className="checkout__right">
            <SubTotal darkMode={darkMode} />
          </div>
        </Fragment>
      ) : (
        <div className="checkout__empty">
          <h1>Basket is Empty</h1>

          <Link className="checkout__empty-button" to="/">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
});

export default Checkout;
