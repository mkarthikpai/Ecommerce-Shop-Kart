import React from "react";
import Styles from "./breadCrums.module.css";
import arrow from "../Assets/svg/dropdown-arrow.svg";

const BreadCrums = (props) => {
  const { product } = props;
  return (
    <div className={Styles.breadcrum}>
      HOME <img src={arrow} alt="arrow" />
      SHOP <img src={arrow} alt="arrow" />
      {product.category} <img src={arrow} alt="arrow" />
      {product.name}
    </div>
  );
};

export default BreadCrums;
