import React from "react";
import Styles from "./item.module.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className={Styles.item}>
      <Link to={`/product/${props.id}`}>
        <img
          className={Styles.item_image}
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt="img"
        />
      </Link>
      <p>{props.name}</p>
      <div className={Styles.item_prices}>
        <div className={Styles.item_price_new}>$ {props.new_price}</div>
        <div className={Styles.item_price_old}>$ {props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
