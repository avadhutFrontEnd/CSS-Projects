import React from "react";
import styles from "./CarrierRatings.module.css";

const CarrierRatings: React.FC = () => {
  return (
    <article className={styles.ratingsCard}>
      <h2 className={styles.ratingsTitle}>Carrier Ratings Report</h2>
      <div className={styles.legendContainer}>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} />
          <span>More than 90%</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} />
          <span>80%</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} />
          <span>80%</span>
        </div>
      </div>
      <h3 className={styles.ratingValue}>4.8</h3>
      <p className={styles.ratingLabel}>Stars total</p>
      <div className={styles.chartContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba1e4c3908a0a577b2b53ae4882bab60c1487fb8"
          alt="Ratings Chart"
        />
      </div>
    </article>
  );
};

export default CarrierRatings;
