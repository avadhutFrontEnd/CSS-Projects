import React from "react";
import styles from "./OrderCard.module.css";

interface OrderStep {
  date: string;
  status: string;
  time: string;
  completed: boolean;
}

interface OrderCardProps {
  orderId: string;
  status: string;
  steps: OrderStep[];
}

const OrderCard: React.FC<OrderCardProps> = ({ orderId, status, steps }) => {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <h2 className={styles.orderId}>Order ID: {orderId}</h2>
        <div className={styles.statusBadge}>{status}</div>
        <img
          src={
            status === "In Transit"
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/c2975afc80d2561b3ad7786e8800f68a3e8f1a5c"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/e9f27e1b9d09099c4e89da45b9bb266f0e33b1ca"
          }
          alt="Menu"
          className={styles.menuIcon}
        />
      </header>
      <div className={styles.timelineContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.timelineItem}>
            <span className={styles.date}>{step.date}</span>
            <span className={styles.status}>{step.status}</span>
            <span className={styles.time}>{step.time}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default OrderCard;
