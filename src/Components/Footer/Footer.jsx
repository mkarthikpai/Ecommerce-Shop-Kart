import React from "react";
import Styles from "./footer.module.css";
import logo from "../Assets/images/Logo.png";
import instagram from "../Assets/svg/instagram.svg";
import facebook from "../Assets/svg/facebook.svg";
import whatsapp from "../Assets/svg/whatsapp.svg";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footer_logo}>
        <img src={logo} alt="logo" />
        <p>Shop Kart</p>
      </div>
      <ul className={Styles.footer_links}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={Styles.footer_social_icons}>
        <div className={Styles.footer_icons_container}>
          <img src={instagram} alt="instagram" />
        </div>
        <div className={Styles.footer_icons_container}>
          <img src={facebook} alt="facebook" />
        </div>
        <div className={Styles.footer_icons_container}>
          <img src={whatsapp} alt="whatsapp" />
        </div>
      </div>
      <div className={Styles.footer_copyright}>
        <hr />
        <p>Copyright @ 2025 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
