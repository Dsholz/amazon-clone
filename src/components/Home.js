import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home({ darkMode }) {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="WXJ38290CT37C3NC"
            darkMode={darkMode}
            title="New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Space Gray"
            image="https://res.cloudinary.com/dyp1mncpg/image/upload/v1599709730/71bElkQQ7LL._AC_UL320_-removebg-preview_dn1742.png"
            price={735}
            decimal={0.49}
            rating={5}
          />
          <Product
            id="XN363922MX3X3T"
            darkMode={darkMode}
            title="Samsung Galaxy Note20 5G Factory Unlocked Android Cell Phone | US Version | 128GB Storage Magic Keyboard"
            image="https://res.cloudinary.com/dyp1mncpg/image/upload/v1599709824/81uteSzwW0L._AC_UY218_-removebg-preview_1_auinra.png"
            price={799}
            decimal={0.99}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="XY372HX3KXJX83"
            darkMode={darkMode}
            title="Wireless Earbuds Bluetooth 5.0 with【24Hrs Charging Case Headphones in-Ear"
            image="https://res.cloudinary.com/dyp1mncpg/image/upload/v1599709870/31D7mhDrxeL._AC_UY218_-removebg-preview_ywst8j.png"
            price={39}
            decimal={0.99}
            rating={3}
          />
          <Product
            id="EXEXINW6353JNX3"
            darkMode={darkMode}
            title="USB Streaming Podcast PC Microphone,Professional Computer Mic 192kHz/24bit"
            image="https://res.cloudinary.com/dyp1mncpg/image/upload/v1599709935/61r_74P5GKL._AC_UL320_-removebg-preview_gchrhy.png"
            price={68}
            decimal={0.45}
            rating={4}
          />
          <Product
            id="SYW638WJXY37"
            darkMode={darkMode}
            title="Beats by Dr. Dre Studio 3 Wireless Over-Ear Headphones Built-in Mic"
            image="https://res.cloudinary.com/dyp1mncpg/image/upload/v1599709980/61sEi8z8oML._AC_UY218_-removebg-preview_ciubqb.png"
            price={174}
            decimal={0.88}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="5RRWUX67XNUEXYB"
            darkMode={darkMode}
            title="Amazon Brand – Stone & Beam Lauren Down-Filled Oversized Sofa Couch Faux Leather Convertible Futon Sofa w/Removable Armrests, Metal Legs, 2 Cupholders"
            image="https://res.cloudinary.com/dyp1mncpg/image/upload/v1599709546/81sCK9A_WoL._AC_UL320_-removebg-preview_epr1jn.png"
            price={585}
            decimal={0.49}
            rating={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
