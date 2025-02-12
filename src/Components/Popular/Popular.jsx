import React from "react";
import Styles from "./popular.module.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className={Styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={Styles.popular_item}>
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
