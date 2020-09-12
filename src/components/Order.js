import React from "react";
import "../styles/Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function Order({ order }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="order">
      <h2>Order</h2>

      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{Order.id}</small>
      </p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.totalPrice}
          rating={item.rating}
          hideBtn
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3>Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data?.amount / 100}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
