import React, { Fragment } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import "../styles/Subtotal.css";
import { useHistory } from "react-router-dom";

function SubTotal({ darkMode }) {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  return (
    <Fragment>
      {basket?.length !== 0 && (
        <div
          style={
            darkMode
              ? { backgroundColor: "#8b8b8b" }
              : { backgroundColor: "#dddddd" }
          }
          className="subtotal"
        >
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

          <button onClick={() => history.push("/payment")}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default SubTotal;
