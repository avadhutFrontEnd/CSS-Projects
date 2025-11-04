import React from "react";
import styles from "./InputDesign.module.css";

function Header() {
  return (
    <header className={styles.div33}>
      <div className={styles.div34}>
        <h2 className={styles.div35}>Overview</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a854fa1897573e37336e6d7dcb8bb3658149593"
          alt="Info"
        />
      </div>

      <button className={styles.button}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71c21fcd348287122ec8eb6da3da58091fdf3982"
          alt="Add"
        />
        <span className={styles.span}>New deal</span>
      </button>
    </header>
  );
}

export default Header;
