import React from "react";
import Styles from "./Hero.module.css";
import handWave from "../Assets/svg/waving-hand.svg";
import rightArrow from "../Assets/svg/thin-arrow-direction-right.svg";
import heroImg from "../Assets/images/Hero.png";

const Hero = () => {
  return (
    <div className={Styles.hero}>
      <div className={Styles.hero_left}>
        <h2>New Arrivals Only</h2>
        <div>
          <div className={Styles.hero_hand_icon}>
            <p>new</p>
            <img src={handWave} alt="handwave" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={Styles.hero_latest_btn}>
          <div>Latest Collection</div>
          <img
            className={Styles.right_arrow_icon}
            src={rightArrow}
            alt="arrow"
          />
        </div>
      </div>
      <div className={Styles.hero_right}>
        <img src={heroImg} alt="bgimg" />
      </div>
    </div>
  );
};

export default Hero;
