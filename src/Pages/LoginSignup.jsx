import React from "react";
import Styles from "./CSS/loginSignup.module.css";

const LoginSignup = () => {
  return (
    <div className={Styles.login_signup}>
      <div className={Styles.loginsignup_container}>
        <h1>Sign Up</h1>
        <div className={Styles.loginsignup_fields}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className={Styles.loginsignup_login}>
          Already have an account? <span>Login Here</span>
        </p>
        <div className={Styles.loginsignup_agree}>
          <input type="checkbox" name="" id="" />
          <p>By Continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
