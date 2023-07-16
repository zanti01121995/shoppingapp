import React, { useState } from "react";
import styles from "./cards.module.css";

function Cards({ product, productSelected, productRemoved }) {
  let [selectedProduct, selected] = useState(false);
  const stars = [];
  for (let index = 0; index < product.rating; index++) {
    stars.push(
      <i className="fa-solid fa-star" style={{ color: "#ffc107" }}></i>
    );
  }

  let handleSelectedProduct = () => {
    if (selectedProduct) {
      selected(false);
      productSelected(product);
      console.log("1", product);
    } else {
      selected(true);
      productRemoved(product);
      console.log("2", product);
    }
  };
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={product.image} alt="" />
        </div>
        <div className={styles.body}>
          <h6 className={styles.title}>{product.productname}</h6>
          <p className={styles.price}>
            <b>₹</b>&nbsp;
            {product.price}
          </p>
          <span>{stars}</span>
        </div>
        <div className={styles.bottom}>
          <button
            className="btn btn-outline-dark"
            onClick={handleSelectedProduct}
          >
            {selectedProduct ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
