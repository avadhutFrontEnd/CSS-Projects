import React from "react";
import styles from "./FinFlowDashboard.module.css";

interface StatusCardProps {
  icon: string;
  title: string;
  amount: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ icon, title, amount }) => {
  return (
    <article className={styles.statusCard}>
      <img src={icon} alt={title} className={styles.statusIcon} />
      <div className={styles.statusInfo}>
        <span className={styles.statusTitle}>{title}</span>
        {amount && <span className={styles.statusAmount}>{amount}</span>}
      </div>
    </article>
  );
};

export default StatusCard;
