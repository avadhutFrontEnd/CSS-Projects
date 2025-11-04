import React from "react";
import styles from "./StatusBadge.module.css";

interface StatusBadgeProps {
  type: "urgent" | "normal" | "low" | "inProgress" | "ready";
  icon: string;
  label: string;
  small?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  type,
  icon,
  label,
  small = false,
}) => {
  const getTypeClass = () => {
    switch (type) {
      case "urgent":
        return styles.urgent;
      case "normal":
        return styles.normal;
      case "low":
        return styles.low;
      case "inProgress":
        return styles.inProgress;
      case "ready":
        return styles.ready;
      default:
        return "";
    }
  };

  return (
    <div
      className={`${styles.badge} ${getTypeClass()} ${
        small ? styles.small : ""
      }`}
    >
      <img src={icon} className={styles.icon} alt="" />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default StatusBadge;
