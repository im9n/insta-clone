import React from "react";
import "./Login.css";
import loginImg from "../assets/loginImg.PNG";
import loginLogo from "../assets/loginLogo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="container login__container">
        <div className="row login__row">
          <main className="login__main">
            <figure className="login__main--imgWrapper">
              <img src={loginImg} alt="" className="login__main--img" />
            </figure>
            <div className="login__main--content">
              <div className="login__main--contentTop">
                <figure className="login__main--logoWrapper">
                  <img src={loginLogo} alt="" className="login__main--logo" />
                </figure>
                <form className="login__main--form">
                  <input
                    className="login__main--input"
                    type="text"
                    placeholder="Phone number, username or email address"
                  />
                  <input
                    className="login__main--input"
                    type="text"
                    placeholder="Password"
                  />
                  <button className="login__main--button">Log in</button>
                </form>
                <span className="login__main--divider">OR</span>
                <a href="" className="login__main--facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="login__main--facebookLogo"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                  Log in with Facebook
                </a>
                <a href="" className="login__main--password">
                  Forgotten your password?
                </a>
                <p></p>
              </div>
              <div className="login__main--contentMiddle">
                <p className="login__main--para">
                  Dont have an account?{" "}
                  <span className="text-color">Sign up</span>
                </p>
              </div>
              <div className="login__main--contentBottom">
                <p className="login__main--para login__main--app">Get the app.</p>
                <div className="login__main--contentApps">
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                    alt=""
                    className="login__main--contentApp"
                  />
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                    alt=""
                    className="login__main--contentApp"
                  />
                </div>
              </div>
            </div>
          </main>
          <footer className="login__footer">
            <div className="login__footer--top">
              <a href="" className="login__footer--link">
                Meta
              </a>
              <a href="" className="login__footer--link">
                About
              </a>
              <a href="" className="login__footer--link">
                Blog
              </a>
              <a href="" className="login__footer--link">
                Jobs
              </a>
              <a href="" className="login__footer--link">
                Help
              </a>
              <a href="" className="login__footer--link">
                API
              </a>
              <a href="" className="login__footer--link">
                Privacy
              </a>
              <a href="" className="login__footer--link">
                Terms
              </a>
              <a href="" className="login__footer--link">
                Top accounts
              </a>
              <a href="" className="login__footer--link">
                Locations
              </a>
              <a href="" className="login__footer--link">
                Instagram Lite
              </a>
              <a href="" className="login__footer--link">
                Contact uploading and non-users
              </a>
            </div>
            <div className="login__footer--bottom">
              <select className="login__footer--language" disabled>
                <option value="">English</option>
              </select>
              <p className="login__footer--copyright">
                © 2022 Instagram from Meta
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
