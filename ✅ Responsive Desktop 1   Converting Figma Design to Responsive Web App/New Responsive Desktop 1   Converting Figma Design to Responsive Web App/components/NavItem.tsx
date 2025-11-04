import React from "react";
import styles from "./FinFlowDashboard.module.css";

interface NavItemProps {
  icon: string;
  label: string;
  notificationCount?: number;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  notificationCount,
}) => {
  return (
    <div className={styles.navItem}>
      <img src={icon} alt={label} className={styles.navIcon} />
      <span>{label}</span>
      {notificationCount && (
        <div className={styles.notificationBadge}>{notificationCount}</div>
      )}
    </div>
  );
};

export default NavItem;
