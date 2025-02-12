import React, { useContext } from "react";
import Styles from "./cartItems.module.css";
import { ShopContext } from "../../Context/ShopContext";
import delete_icon from "../Assets/svg/close.svg";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className={Styles.cartItems}>
      <div className={Styles.cartitems_format_main}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div
                className={`${Styles.cartItems_format} ${Styles.cartitems_format_main}`}
              >
                <img
                  src={e.image}
                  alt="img"
                  className={Styles.cartIcon_product_icon}
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>

                <button className={Styles.cartItems_quantity}>
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className={Styles.carticon_remove_icon}
                  src={delete_icon}
                  alt="img"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={Styles.cartItems_down}>
        <div className={Styles.cartItems_total}>
          <h1>Cart Totals</h1>
          <div>
            <div className={Styles.cartItems_total_item}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={Styles.cartItems_total_item}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={Styles.cartItems_total_item}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={Styles.cartItems_promocode}>
          <p>If you have promo code, Enter here</p>
          <div className={Styles.cartItems_promobox}>
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
