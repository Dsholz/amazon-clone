import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
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
            id=""
            title="New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Space Gray"
            image="https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UL320_.jpg"
            price={735}
            decimal={0.49}
            rating={5}
          />
          <Product
            id=""
            title="Samsung Galaxy Note20 5G Factory Unlocked Android Cell Phone | US Version | 128GB Storage Magic Keyboard"
            image="https://m.media-amazon.com/images/I/81uteSzwW0L._AC_UY218_.jpg"
            price={799}
            decimal={0.99}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id=""
            title="Wireless Earbuds Bluetooth 5.0 with【24Hrs Charging Case Headphones in-Ear"
            image="https://m.media-amazon.com/images/I/31D7mhDrxeL._AC_UY218_.jpg"
            price={39}
            decimal={0.99}
            rating={3}
          />
          <Product
            id=""
            title="USB Streaming Podcast PC Microphone,Professional Computer Mic 192kHz/24bit"
            image="https://m.media-amazon.com/images/I/61r+74P5GKL._AC_UL320_.jpg"
            price={68}
            decimal={0.45}
            rating={4}
          />
          <Product
            id=""
            title="Beats by Dr. Dre Studio 3 Wireless Over-Ear Headphones Built-in Mic"
            image="https://m.media-amazon.com/images/I/61sEi8z8oML._AC_UY218_.jpg"
            price={174}
            decimal={0.88}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id=""
            title="Amazon Brand – Stone & Beam Lauren Down-Filled Oversized Sofa Couch Faux Leather Convertible Futon Sofa w/Removable Armrests, Metal Legs, 2 Cupholders"
            image="https://m.media-amazon.com/images/I/81sCK9A+WoL._AC_UL320_.jpg"
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
