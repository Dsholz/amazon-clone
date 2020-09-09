import React from "react";
import "../styles/Checkout.css";
import SubTotal from "./SubTotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="" />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>

          {/* Basket Item */}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
