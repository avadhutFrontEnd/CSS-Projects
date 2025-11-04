import React from "react";
import styles from "./StatusBar.module.css";

const StatusBar: React.FC = () => {
  return (
    <section className={styles.statusBar}>
      <div className={styles.statusItem}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c71d533eafd115fdcd0ce70e710664300627269"
          alt=""
        />
        <span>Pending</span>
        <span className={styles.amount}>$980.00</span>
      </div>
      <div className={styles.statusItem}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfa04a69128d0e3e5bf030bb0f0fc78f2672298a"
          alt=""
        />
        <span>In progress</span>
        <span className={styles.amount}>$25,017.00</span>
      </div>
      <div className={styles.statusItem}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13a62df3355c2d80ff9466819f327dea006a214"
          alt=""
        />
        <span>Successful</span>
        <span className={styles.amount}>$12,327.00</span>
      </div>
      <div className={styles.statusItem}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4969a8b32ac5df13f83340400bfd69b262688"
          alt=""
        />
        <span>Declined</span>
      </div>
    </section>
  );
};

export default StatusBar;
