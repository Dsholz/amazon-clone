import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [state, dispatch] = useStateValue();
  const { basket } = state;

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__search-input" type="text" />
        <SearchIcon className="header__search-icon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-line-one">Hello Guest</span>
          <span className="header__option-line-two">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one">Returns</span>
          <span className="header__option-line-two">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one">Tour</span>
          <span className="header__option-line-two">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__option-basket">
            <ShoppingBasketIcon />
            <span className="header__option-line-two header__basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
