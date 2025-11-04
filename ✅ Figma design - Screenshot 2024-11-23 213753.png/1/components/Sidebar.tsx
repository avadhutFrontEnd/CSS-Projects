"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.div2}>
      <div className={styles.div3}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/390dcefa9f05b06d9d7dc2e40955a1b3deb950be"
          alt="Logo"
          className={styles.logoImg}
        />
      </div>
      <ul className={styles.div4}>
        <li className={styles.div5}>
          <button aria-label="Navigation item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6e499fb62a6872d46996dd0dd81d587f1632178"
              alt="Navigation"
              className={styles.navIcon}
            />
          </button>
        </li>
        <li className={styles.div6}>
          <button aria-label="Navigation item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/faec601bbc08461792ef68f04d4bfadcdc385256"
              alt="Navigation"
              className={styles.navIcon}
            />
          </button>
        </li>
        <li className={styles.div7}>
          <button aria-label="Navigation item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aeec7b962c1f638ac4d0de0920327ffc421694a"
              alt="Navigation"
              className={styles.navIcon}
            />
          </button>
        </li>
        <li className={styles.div8}>
          <button aria-label="Navigation item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80c34c4aac6fb0a82b43c41d3204e750c821df13"
              alt="Navigation"
              className={styles.navIcon}
            />
          </button>
        </li>
        <li className={styles.div9}>
          <button aria-label="Navigation item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b8549e10ba4d0010dfc373b0e37d20f87e68cfd"
              alt="Navigation"
              className={styles.navIcon}
            />
          </button>
        </li>
      </ul>
      <div className={styles.div10}>
        <button className={styles.div11} aria-label="Settings">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb1c4fdcb7b71891de06bafa55ef60213f30ee3"
            alt="Settings"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.div12} aria-label="Profile">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fddb1dac300db4202bf922683d163555fd54253"
            alt="Profile"
            className={styles.navIcon}
          />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
