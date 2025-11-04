import React from "react";
import styles from "./FinFlowDashboard.module.css";

interface ActionButtonProps {
  icon: string;
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  primary = false,
  onClick,
}) => {
  return (
    <button
      className={primary ? styles.primaryButton : styles.secondaryButton}
      onClick={onClick}
    >
      <img src={icon} alt={label} className={styles.buttonIcon} />
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;
