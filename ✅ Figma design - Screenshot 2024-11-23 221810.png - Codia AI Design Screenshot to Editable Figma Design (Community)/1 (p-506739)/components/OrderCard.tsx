"use client";
import React from "react";
import styles from "./OrderCard.module.css";

interface OrderCardProps {
  orderId: string;
  status: string;
  statusColor: string;
  statusBgColor: string;
  dates: string[];
  times: string[];
  steps: string[];
  active: number;
  isHighlighted?: boolean;
}

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  status,
  statusColor,
  statusBgColor,
  dates,
  times,
  steps,
  active,
  isHighlighted = false,
}) => {
  return (
    <article
      className={`${styles.orderCard} ${
        isHighlighted ? styles.highlighted : ""
      }`}
    >
      <div className={styles.cardHeader}>
        <h2 className={styles.orderId}>Order ID: #{orderId}</h2>
        <div className={styles.statusContainer} style={{ color: statusColor }}>
          <div
            className={styles.statusBadge}
            style={{ backgroundColor: statusBgColor }}
          >
            {status}
          </div>
          <img
            src={
              isHighlighted
                ? "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/bd62727fc414885b15cd72020ca1612341216e3893d3e5add80bc5b155372aab?placeholderIfAbsent=true"
                : status === "Checking"
                ? "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c3676524e3d543edfdd9b17aa1733f14154aa4705eb0d1ac6272f53661962d91?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b6007f8e68c50501de813d3b835e9cbb434a6e9ebee1f94f6c7c160117e46925?placeholderIfAbsent=true"
            }
            className={styles.statusIcon}
            alt=""
          />
        </div>
      </div>

      <img
        src={
          isHighlighted
            ? "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7dc06006d1f31e988f3c34b781c57ab9149a365869707e8d501d041fb108ce19?placeholderIfAbsent=true"
            : "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/812de17e140387332345f05d1f772e4ba377a8a93a090b3182e9795da7fcc66a?placeholderIfAbsent=true"
        }
        className={styles.divider}
        alt=""
      />

      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          <div className={styles.dateColumn}>
            {dates.map((date, index) => (
              <span
                key={index}
                className={`${styles.date} ${
                  index <= active ? styles.activeDate : ""
                }`}
              >
                {date}
              </span>
            ))}
          </div>

          <img
            src={
              isHighlighted
                ? "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/bf0e4b27c3e8157a0892f9f43842e9475dc983d42f3fa326b4ad77afd99fa2e4?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a4f4a88799a9d4cc50c3eb35e77b4b40fce68a8f6b070b02e0b9b63d4022315b?placeholderIfAbsent=true"
            }
            className={styles.timelineBar}
            alt=""
          />

          <div className={styles.stepsColumn}>
            {steps.map((step, index) => (
              <span
                key={index}
                className={`${styles.step} ${
                  index <= active ? styles.activeStep : ""
                }`}
              >
                {step}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.timeColumn}>
          <span className={styles.time}>{times[0]}</span>
          <span className={styles.time}>{times[1]}</span>
          <span className={styles.time}>{times[2]}</span>
        </div>
      </div>
    </article>
  );
};

export default OrderCard;
