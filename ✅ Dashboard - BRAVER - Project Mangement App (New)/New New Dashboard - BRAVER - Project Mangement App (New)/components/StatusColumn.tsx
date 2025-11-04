import React from "react";
import styles from "./Dashboard.module.css";

interface StatusColumnProps {
  title: string;
  count: number;
  color: string;
  iconSrc: string;
}

const StatusColumn: React.FC<StatusColumnProps> = ({
  title,
  count,
  color,
  iconSrc,
}) => {
  // Determine the appropriate styles based on the title
  const getTitleStyles = () => {
    switch (title) {
      case "TODO":
        return styles.todo;
      case "IN WORK":
        return styles.inwork;
      case "QA":
        return styles.qa;
      case "COMPLETED":
        return styles.completed;
      default:
        return styles.todo;
    }
  };

  const getCountStyles = () => {
    switch (title) {
      case "TODO":
        return styles.css2;
      case "IN WORK":
        return styles.css4;
      case "QA":
        return styles.css8;
      case "COMPLETED":
        return styles.css3;
      default:
        return styles.css2;
    }
  };

  return (
    <div className={title === "QA" ? styles.div19 : styles.div9}>
      <div className={styles.div10}>
        <div className={title === "TODO" ? styles.div11 : styles.div16}>
          <h3 className={getTitleStyles()}>{title}</h3>
          <span className={getCountStyles()}>{count}</span>
        </div>
        <div className={styles.div12}>
          <img src={iconSrc} alt="Column icon" className={styles.img16} />
        </div>
      </div>
      <div className={color} />
    </div>
  );
};

export default StatusColumn;
