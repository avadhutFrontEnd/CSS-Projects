import React from "react";
import styles from "./RevenueStats.module.css";

function RevenueStats() {
  return (
    <section className={styles.revenueStats}>
      <div className={styles.revenueContainer}>
        <h2 className={styles.reportTitle}>New report</h2>
        <h3 className={styles.revenueTitle}>Revenue</h3>

        <div className={styles.revenueAmount}>
          <div className={styles.amountGroup}>
            <span className={styles.amount}>$528,976</span>
            <span className={styles.percentage}>82</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f4ac62bce3143261d99b9234c5dce3814b8ba1df92a519980b0eac3b0087a731?placeholderIfAbsent=true"
            className={styles.trendIcon}
            alt="Trend"
          />
        </div>

        <p className={styles.comparisonText}>
          vs prev.$501,641.73 Jun 1-Aug 31,2023
        </p>
      </div>
    </section>
  );
}

export default RevenueStats;
