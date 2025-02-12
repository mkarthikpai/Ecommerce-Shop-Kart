import React from "react";
import Styles from "./newCollections.module.css";
import new_collection from "../Assets/new_collection";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className={Styles.new_collections}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={Styles.collections}>
        {new_collection.map((item, i) => {
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

export default NewCollections;
