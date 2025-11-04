import React from "react";
import styles from "./StatusBadge.module.css";

interface StatusBadgeProps {
  status: string;
  customClass?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, customClass }) => {
  return (
    <div className={`${styles.statusBadge} ${customClass || ""}`}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b9d17178da28666ade9b6b09a10c21c8ef7d7013a92bd957902f5a2b49e8dd5d?placeholderIfAbsent=true"
        className={styles.statusIcon}
        alt="Status icon"
      />
      <span className={styles.statusText}>{status}</span>
    </div>
  );
};

export default StatusBadge;
