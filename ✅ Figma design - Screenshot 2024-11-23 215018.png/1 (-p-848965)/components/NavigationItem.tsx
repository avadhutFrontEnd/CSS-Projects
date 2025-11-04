import React from "react";
import styles from "./NavigationItem.module.css";

interface NavigationItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  isActive = false,
}) => {
  return (
    <button className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
      <img src={icon} className={styles.icon} alt="" />
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default NavigationItem;
