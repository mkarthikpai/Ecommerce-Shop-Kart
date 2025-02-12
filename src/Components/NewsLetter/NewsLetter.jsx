import React from "react";
import Styles from "./newsLetter.module.css";
const NewsLetter = () => {
  return (
    <div className={Styles.newsLetter}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
