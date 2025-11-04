import React from "react";
import styles from "./ConnectedCarrierChart.module.css";

const ConnectedCarrierChart: React.FC = () => {
  return (
    <article className={styles.chartCard}>
      <h2 className={styles.chartTitle}>Connected Carrier</h2>
      <div className={styles.legendContainer}>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} />
          <span>More than 90%</span>
          <span>34</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} />
          <span>60%-90%</span>
          <span>22</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} />
          <span>0%-60%</span>
          <span>6</span>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a3a3ff016db183226ead41e4b925cadd457c17"
          alt="Carrier Chart"
        />
      </div>
    </article>
  );
};

export default ConnectedCarrierChart;
