import React from "react";
import styles from "./LeaveCard.module.css";

interface LeaveCardProps {
  type: string;
  daysUsed: string;
  backgroundClass: string;
  iconSrc: string;
  backgroundImageSrc?: string;
}

const LeaveCard: React.FC<LeaveCardProps> = ({
  type,
  daysUsed,
  backgroundClass,
  iconSrc,
  backgroundImageSrc,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        {backgroundImageSrc && (
          <img
            src={backgroundImageSrc}
            className={styles.cardBackground}
            alt="Background"
          />
        )}
        <div className={`${styles.cardContent} ${backgroundClass}`}>
          <div className={styles.cardTitle}>
            <span>{type}</span>
            <img
              src={iconSrc}
              className={styles.cardIcon}
              alt={`${type} icon`}
            />
          </div>
        </div>
        <p className={styles.daysUsed}>{daysUsed} Days Used</p>
      </div>
    </div>
  );
};

export default LeaveCard;
