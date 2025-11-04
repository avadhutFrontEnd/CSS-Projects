import React from "react";
import styles from "./PerformanceChart.module.css";

const PerformanceChart: React.FC = () => {
  return (
    <article className={styles.chartCard}>
      <h2 className={styles.chartTitle}>Carrier On-Time Performance</h2>
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3e06a83eacd5f4beadbede42221b72dafec6537"
          alt="Performance Chart"
        />
      </div>
    </article>
  );
};

export default PerformanceChart;
