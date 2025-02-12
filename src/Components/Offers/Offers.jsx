import React from "react";
import Styles from "./offers.module.css";
import exclusiveImage from "../Assets/images/Hero2.png";

const Offers = () => {
  return (
    <div className={Styles.offers}>
      <div className={Styles.offers_left}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={Styles.offers_right}>
        <img src={exclusiveImage} alt="img" />
      </div>
    </div>
  );
};

export default Offers;
