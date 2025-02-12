import React, { useContext } from "react";
import Styles from "./productDisplay.module.css";
import star_icon from "../Assets/svg/star.svg";
import dull_star_icon from "../Assets/svg/star-dull.svg";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className={Styles.productdisplay}>
      <div className={Styles.productdisplay_left}>
        <div className={Styles.productdisplay_img_list}>
          <img src={product.image} alt="photo" />
          <img src={product.image} alt="photo" />
          <img src={product.image} alt="photo" />
          <img src={product.image} alt="photo" />
        </div>
        <div className={Styles.productdisplay_img}>
          <img
            className={Styles.productdisplay_main_img}
            src={product.image}
            alt="image"
          />
        </div>
      </div>
      <div className={Styles.productdisplay_right}>
        <h1>{product.name}</h1>
        <div className={Styles.productdisplay_right_star}>
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={dull_star_icon} alt="star" />
          <p>(125)</p>
        </div>
        <div className={Styles.productdisplay_right_prices}>
          <div className={Styles.productdisplay_right_price_old}>
            ${product.old_price}
          </div>
          <div className={Styles.productdisplay_right_price_new}>
            ${product.new_price}
          </div>
        </div>
        <div className={Styles.productdisplay_right_description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
          temporibus. Culpa nulla ducimus deleniti rerum? Cupiditate doloribus
          amet aspernatur quae debitis ratione illo vel quidem impedit et eius,
          culpa corrupti.
        </div>
        <div className={Styles.productdisplay_right_size}>
          <h1>Select Size</h1>
          <div className={Styles.productdisplay_right_sizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className={Styles.productdisplay_right_category}>
          <span>Category:</span>Women , T-Shirt, Crop Top
        </p>
        <p className={Styles.productdisplay_right_category}>
          <span>Tags:</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
