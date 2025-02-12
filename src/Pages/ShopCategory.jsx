import React, { useContext } from "react";
import Styles from "./CSS/shopCategory.module.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import DropdownIcon from "../Components/Assets/svg/dropdown-arrow.svg";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={Styles.shop_category}>
      <div className={Styles.banner_wrapper}>
        <img src={props.banner} alt="banner" />
      </div>
      <div className={Styles.shopcategory_indexsort}>
        <p>
          <span>Showing 1-12</span>
          out of 36 products
        </p>
        <div className={Styles.shopcategory_sort}>
          Sort by{" "}
          <img
            className={Styles.dropdown_icon}
            src={DropdownIcon}
            alt="dropdown"
          />
        </div>
      </div>
      <div className={Styles.shopcategory_products}>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className={Styles.shopcategory_loadmore}>Explore More</div>
    </div>
  );
};

export default ShopCategory;
