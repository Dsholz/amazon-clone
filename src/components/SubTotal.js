import React, { Fragment } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import "../styles/Subtotal.css";

function SubTotal() {
  const [state, dispatch] = useStateValue();
  const { basket } = state;

  return (
    <Fragment>
      {basket?.length !== 0 && (
        <div className="subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <div className="subtotal__amount">
                <span>Subtotal ({basket?.length} items)</span>
                <span>: {value}</span>
              </div>
            )}
            decimalScale={2}
            value={basket?.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
          />

          <div className="subtotal__container">
            <input type="checkbox" />
            <p>This order contains a gift</p>
          </div>

          <button>Proceed to Checkout</button>
        </div>
      )}
    </Fragment>
  );
}

export default SubTotal;
