import React from "react";
import styles from "./TransactionCard.module.css";

interface TransactionCardProps {
  vendor: string;
  amount: string;
  frequency?: string;
  description: string;
  userName: string;
  date?: string;
  vendorIconUrl: string;
  userAvatarUrl: string;
  badge?: string;
  simple?: boolean;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  vendor,
  amount,
  frequency,
  description,
  userName,
  date,
  vendorIconUrl,
  userAvatarUrl,
  badge,
  simple = false,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.vendorName}>{vendor}</span>
        {badge ? (
          <div className={styles.vendorBadge}>{badge}</div>
        ) : vendorIconUrl ? (
          <img src={vendorIconUrl} alt="" className={styles.vendorIcon} />
        ) : null}
      </div>
      <div className={styles.amount}>{amount}</div>
      {frequency && <div className={styles.frequency}>{frequency}</div>}
      <div className={styles.description}>{description}</div>
      <div className={styles.userInfo}>
        <img src={userAvatarUrl} alt="" className={styles.userAvatar} />
        <span className={styles.userName}>{userName}</span>
        {date && <span className={styles.date}>{date}</span>}
      </div>
    </article>
  );
};

export default TransactionCard;
