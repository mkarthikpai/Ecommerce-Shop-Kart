import React, { useContext, useState } from "react";
import Styles from "./Navbar.module.css";

import logo from "../Assets/images/Logo.png";
import cart from "../Assets/svg/cart.svg";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className={Styles.navbar}>
      <div className={Styles.nav_logo}>
        <div className={Styles.nav_logo_wrap}>
          <img src={logo} alt="logo" />
        </div>
        <p>Shop Kart</p>
      </div>
      <ul className={Styles.nav_menu}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link className={Styles.link_defaultStyle_remover} to={"/"}>
            Shop
          </Link>
          <hr
            className={
              menu === "shop"
                ? Styles.nav_menu_active
                : Styles.nav_menu_notactive
            }
          />
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link className={Styles.link_defaultStyle_remover} to={"/mens"}>
            Men
          </Link>
          <hr
            className={
              menu === "mens"
                ? Styles.nav_menu_active
                : Styles.nav_menu_notactive
            }
          />
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link className={Styles.link_defaultStyle_remover} to={"/womens"}>
            Women
          </Link>
          <hr
            className={
              menu === "womens"
                ? Styles.nav_menu_active
                : Styles.nav_menu_notactive
            }
          />
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link className={Styles.link_defaultStyle_remover} to={"/kids"}>
            Kids
          </Link>
          <hr
            className={
              menu === "kids"
                ? Styles.nav_menu_active
                : Styles.nav_menu_notactive
            }
          />
        </li>
      </ul>
      <div className={Styles.nav_login_cart}>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/cart"}>
          <img className={Styles.cart_img} src={cart} alt="cart" />
        </Link>
        <div className={Styles.nav_cart_count}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
