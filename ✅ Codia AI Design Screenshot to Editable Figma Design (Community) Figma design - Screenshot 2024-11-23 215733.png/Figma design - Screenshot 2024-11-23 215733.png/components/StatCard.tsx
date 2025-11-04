"use client";
import React from "react";
import styles from "./InputDesign.module.css";

interface StatCardProps {
  iconSrc: string;
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  iconSrc,
  title,
  value,
  change,
  isPositive = true,
  className,
}) => {
  return (
    <article className={className}>
      <img src={iconSrc} alt="" className="w-[71px] h-[71px]" />
      <div className={styles.div23}>
        <h3 className={styles.div24}>{title}</h3>
        <div className={styles.div25}>
          <p className={styles.div26}>{value}</p>
          <p className={isPositive ? styles.div27 : styles.div33}>{change}</p>
        </div>
      </div>
    </article>
  );
};

export default StatCard;
