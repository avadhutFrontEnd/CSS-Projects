import React from "react";
import styles from "./InputDesign.module.css";

interface TaskHeaderProps {
  className?: string;
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ className }) => {
  return (
    <header className={`${styles.tableHeader} ${className || ""}`}>
      <div className={styles.checkboxCell}>
        <input type="checkbox" />
      </div>
      <div className={styles.headerCell}>
        <i className="tiTiList" />
        <span>Task Name</span>
      </div>
      <div className={styles.headerCell}>
        <i className="tiTiFile" />
        <span>Description</span>
      </div>
      <div className={styles.headerCell}>
        <i className="tiTiCalendar" />
        <span>Estimation</span>
      </div>
      <div className={styles.headerCell}>
        <i className="tiTiTag" />
        <span>Type</span>
      </div>
      <div className={styles.headerCell}>
        <i className="tiTiUsers" />
        <span>People</span>
      </div>
      <div className={styles.headerCell}>
        <i className="tiTiFlag" />
        <span>Priority</span>
      </div>
      <div></div>
    </header>
  );
};

export default TaskHeader;
