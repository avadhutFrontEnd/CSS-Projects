import React from "react";
import styles from "./InputDesign.module.css";

interface PageItemProps {
  label: string;
  iconSrc?: string;
  iconAlt?: string;
  iconContent?: string;
  icon?: string;
  badgeCount?: string;
  badgeColor?: "purple" | "default";
  isTextIcon?: boolean;
}

const PageItem: React.FC<PageItemProps> = ({
  label,
  iconSrc,
  iconAlt,
  iconContent,
  icon,
  badgeCount,
  badgeColor = "default",
  isTextIcon = false,
}) => {
  return (
    <li className={styles.div17}>
      {isTextIcon && <div className={styles.div18}>{iconContent}</div>}
      {iconSrc && (
        <img src={iconSrc} alt={iconAlt || ""} className={styles.pageIcon} />
      )}
      {icon && <i className={styles[icon]} />}
      <span>{label}</span>
      {badgeCount && (
        <div className={badgeColor === "purple" ? styles.div22 : styles.div9}>
          {badgeCount}
        </div>
      )}
    </li>
  );
};

export default PageItem;
