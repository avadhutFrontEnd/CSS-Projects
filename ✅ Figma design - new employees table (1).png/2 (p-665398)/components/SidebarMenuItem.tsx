import React from "react";
import styles from "./InputDesign.module.css";

interface SidebarMenuItemProps {
  icon: string;
  label: string;
  badgeCount?: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  icon,
  label,
  badgeCount,
}) => {
  return (
    <li className={styles.div8}>
      <i className={styles[icon]} />
      <span>{label}</span>
      {badgeCount && <div className={styles.div9}>{badgeCount}</div>}
    </li>
  );
};

export default SidebarMenuItem;
