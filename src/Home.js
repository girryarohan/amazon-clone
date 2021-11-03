import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="./amazon_banner.jpg"
          alt="Amazon Banner"
        />
        <div className="home__row">
          <Product
            id="121"
            title="React.js Essentials: A fast-paced guide to designing and building scalable and maintainable web apps with React.js"
            price={1910}
            image="https://m.media-amazon.com/images/I/51ppMpK6XGL._SX260_.jpg"
            rating={5}
          />
          <Product
            id="122"
            title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage) 48MP rear camera with 4k video"
            price={54999.64}
            image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)"
            price={3499}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg"
            rating={5}
          />
          <Product
            id="124"
            title="Apple New iPhone 12 Pro Max (128GB) - Pacific Blue"
            price={128999}
            image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="125"
            title="The Intelligent Investor by Benjamin Graham : Invest & grow your finances: Money management book"
            price={656}
            image="https://images-na.ssl-images-amazon.com/images/I/91+t0Di07FL.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="126"
            title="Canon EOS 1DX Mark III | 20.1MP CMOS Sensor + DIGIC X image processor | 5.5K 50p/60p cropless in-camera RAW "
            price={559990.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81rBRIp8FnL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
