import React from "react";
import styles from "./FinFlowDashboard.module.css";

const PremiumCard: React.FC = () => {
  return (
    <article className={styles.premiumCard}>
      <h3 className={styles.premiumTitle}>Premium Plan</h3>
      <p className={styles.premiumDescription}>
        Upgrade your plan to Premium to get all benefits
      </p>
      <button className={styles.premiumButton}>Get Premium Plan</button>
    </article>
  );
};

export default PremiumCard;
