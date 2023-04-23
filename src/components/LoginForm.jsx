import React from "react";
import "./LoginForm.css";
import { Grid } from "@mui/material";
import apple from "/src/assets/images/apple.svg";
import fb from "/src/assets/images/fb.svg";
import google from "/src/assets/images/google.svg";

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <Grid container>
        <Grid item xs={4}>
          <div className="left-container">
            <h2>Login</h2>
            <form className="login-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="/app" type="submit">
                Login
              </a>
            </form>
            <div className="login-options">
              <div class="line-container">
                <div class="line"></div>
                <div class="line-text">
                  {" "}
                  <p className="or-p">Or</p>
                </div>
                <div class="line"></div>
              </div>

              <div className="login-social-icons">
                <div className="icon-outline">
                  <img src={google} alt="apple-icon" /> Continue with Google
                </div>
                <div className="icon-outline">
                  <img src={apple} alt="apple-icon" /> Continue with Apple
                </div>
                <div className="icon-outline">
                  <img src={fb} alt="apple-icon" /> Continue with Facebook
                </div>
              </div>
            </div>
            <div className="sign-up-options">
              <p className="sign-up-p">
                New to make a wish? <span>Get started</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="right-container">
            <img
              src="https://wish.org/sites/default/files/styles/logo_960_1_5x/public/2023-04/Transprarent%20Edited%20WWD%20Logo%20-%20Georgia.png"
              alt="make a wish"
            />
            <div className="bottom-right">
              <p className="wish-desc">
                I wish to have a purple <br /> unicorn room redo
              </p>
              <p className="child-wish-name">
                Anela, 7 <span>blood disorder</span>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
