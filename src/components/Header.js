import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase/firebase";

function Header({ darkMode, toggleDarkMode }) {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div
      style={
        darkMode
          ? { backgroundColor: "#131921" }
          : { backgroundColor: "#585858" }
      }
      className="header"
    >
      <Link to="/">
        <img
          className="header__logo"
          alt="Header Logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__search-input" type="text" />
        <SearchIcon className="header__search-icon" />
      </div>

      <div className="header__nav">
        <Link to={!user ? "/login" : "/"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__option-line-one">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__option-line-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__option-line-one">Returns</span>
            <span className="header__option-line-two">Orders</span>
          </div>
          <div className="header__option">
            <span className="header__option-line-one">Tour</span>
            <span className="header__option-line-two">Prime</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__option-basket">
            <ShoppingBasketIcon />
            <span className="header__option-line-two header__basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>

        <div onClick={toggleDarkMode} className="header__option">
          {darkMode ? <WbSunnyIcon /> : <Brightness3Icon />}
        </div>
      </div>
    </div>
  );
}

export default Header;
