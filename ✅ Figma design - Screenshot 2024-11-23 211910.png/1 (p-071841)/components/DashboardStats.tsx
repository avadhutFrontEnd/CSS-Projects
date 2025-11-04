import React from "react";
import styles from "./DashboardStats.module.css";

interface DashboardStatsProps {
  value: string;
  trend: string;
  trendUp: boolean;
  label: string;
  imageUrl: string;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  value,
  trend,
  trendUp,
  label,
  imageUrl,
}) => {
  return (
    <article className={styles.statsCard}>
      <h2 className={styles.statsValue}>{value}</h2>
      <div className={styles.statsTrend}>
        <img src={imageUrl} alt="Trend" />
        <span>{trend}</span>
      </div>
      <p className={styles.statsLabel}>{label}</p>
    </article>
  );
};

export default DashboardStats;
