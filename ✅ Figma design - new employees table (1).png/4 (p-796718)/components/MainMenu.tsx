import React from "react";
import styles from "./InputDesign.module.css";

const MainMenu: React.FC = () => {
  return (
    <nav className={styles.groups2}>
      <div className={styles.menuHeader}>
        <h4>MAIN MENU</h4>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b149e52c09384e7e3b6aaf33d9c2cc6e1838cfa227f130e58fe2d8dfc9cb8cae?placeholderIfAbsent=true"
          className={styles.img4}
          alt="Collapse menu"
        />
      </div>

      <ul className={styles.menuList}>
        <li className={styles.groups3}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/afc57349db069245e1396af2d7980b2cfbc43ed42da4625f7467c1557798e57a?placeholderIfAbsent=true"
            className={styles.img5}
            alt="Search icon"
          />
          <span className={styles.search}>Search</span>
        </li>

        <li className={styles.groups4}>
          <div className={styles.menuItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/aa0bcc822733d4f7a56175a1f61e8b65f3bda6c58c800f4aa9be022532660226?placeholderIfAbsent=true"
              className={styles.img6}
              alt="Notification icon"
            />
            <span>Notification</span>
          </div>
          <button className={styles.button}>
            <span className={styles.background3}>99+</span>
          </button>
        </li>

        <li className={styles.groups5}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4bfaf398085fd670fa6f0c71f8e5a99de78cbbb6de363177abc30ec2b1822247?placeholderIfAbsent=true"
            className={styles.img7}
            alt="Calendar icon"
          />
          <span className={styles.calendar}>Calendar</span>
        </li>

        <li className={styles.groups6}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/acd2c3babd733a78d79f19d348a592c02c618cfd9304c770b4fb4222faf15683?placeholderIfAbsent=true"
            className={styles.img8}
            alt="Settings icon"
          />
          <span className={styles.settings}>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
