import React from "react";
import styles from "./PremiumCard.module.css";

const PremiumCard: React.FC = () => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>Premium Plan</h3>
      <p className={styles.description}>
        Upgrade your plan to Premium to get all benefits
      </p>
      <button className={styles.button}>Get Premium Plan</button>
    </article>
  );
};

export default PremiumCard;
