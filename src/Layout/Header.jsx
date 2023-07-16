import React from "react";
import styles from "./header.module.css";

function Header({ onCart }) {
  return (
    <div>
      <div className={styles.header}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            ShopperShop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>

            <span className="navbar-text">
              <div className={styles.cart}>
                <button className="btn btn-outline-dark">
                  <i className="fa-solid fa-cart-shopping"></i> &nbsp;Cart
                  &nbsp;
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {onCart.length}
                  </span>
                </button>
              </div>
            </span>
          </div>
        </nav>
      </div>
      <div className={styles.subheader}>
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Styles for Life</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            Make the way for your life
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
