import React from "react";
import styles from "./footer.module.css";
function Footer() {
  return (
    <div>
      <div className={styles.footers}>
        <div className="text-center text-white">
          <p className="lead fw-normal text-white-50 mb-0">
            Copyright © Your Website 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
