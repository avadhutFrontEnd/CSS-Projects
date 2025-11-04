import React from "react";
import styles from "./Root.module.css";

export const PremiumCard: React.FC = () => {
  return (
    <article className={styles.groups11}>
      <div className={styles.div58}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/eaeaa6a0ed6c463710e629c7e39071072cda6a0a9929140e69f45401a98ad4a8?placeholderIfAbsent=true"
          className={styles.img32}
          alt="Premium background"
        />
        <h3 className={styles.premiumPlan}>Premium Plan</h3>
        <p className={styles.upgradeyourpla}>
          Upgrade your plan to Premium
          <br />
          to get all benefits
        </p>
        <button className={styles.button9}>
          <div className={styles.background19}>Get Premium Plan</div>
        </button>
      </div>
    </article>
  );
};
