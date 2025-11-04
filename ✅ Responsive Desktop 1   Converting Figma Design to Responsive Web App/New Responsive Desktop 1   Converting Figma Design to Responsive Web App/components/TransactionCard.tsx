import React from "react";
import styles from "./FinFlowDashboard.module.css";

interface TransactionCardProps {
  vendor: string;
  vendorIcon: string;
  amount: string;
  frequency: string;
  description: string;
  user: string;
  userAvatar: string;
  date: string;
  isTextLogo?: boolean;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  vendor,
  vendorIcon,
  amount,
  frequency,
  description,
  user,
  userAvatar,
  date,
  isTextLogo = false,
}) => {
  return (
    <article className={styles.transactionCard}>
      <div className={styles.cardHeader}>
        <span className={styles.vendorName}>{vendor}</span>
        {isTextLogo ? (
          <div className={styles.textLogo}>{vendor}</div>
        ) : (
          vendorIcon && (
            <img src={vendorIcon} alt={vendor} className={styles.vendorIcon} />
          )
        )}
      </div>
      <div className={styles.transactionAmount}>{amount}</div>
      {frequency && (
        <div className={styles.transactionFrequency}>{frequency}</div>
      )}
      <div className={styles.transactionDescription}>{description}</div>
      <div className={styles.userInfo}>
        <img src={userAvatar} alt={user} className={styles.userAvatar} />
        <span className={styles.userName}>{user}</span>
        {date && <span className={styles.transactionDate}>{date}</span>}
      </div>
    </article>
  );
};

export default TransactionCard;
