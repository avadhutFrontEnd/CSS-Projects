import React from "react";
import styles from "./TaskHeader.module.css";

interface TaskHeaderProps {
  isSecondary?: boolean;
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ isSecondary = false }) => {
  return (
    <header className={styles.taskHeader}>
      <div className={styles.headerContent}>
        <h3 className={styles.taskColumn}>Task</h3>
        <h3 className={styles.descriptionColumn}>Description</h3>
        <div className={styles.metaColumns}>
          <h3 className={styles.assigneeColumn}>Assignee</h3>
          <h3 className={styles.dueDateColumn}>Due Date</h3>
        </div>
        <h3 className={styles.priorityColumn}>Priority</h3>
        <h3 className={styles.progressColumn}>Progress</h3>
        <div className={styles.createdColumn}>
          <h3 className={styles.createdLabel}>
            {isSecondary ? "Crea" : "Cree"}
          </h3>
          {!isSecondary && (
            <div className={styles.sortIcon}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f4a2c0dbcf37cf034f9d0fc731e941beb8bd0854c6812d8fb6bacde2f728b8ce?placeholderIfAbsent=true"
                className={styles.sortArrow}
                alt="Sort"
              />
            </div>
          )}
          {isSecondary && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5830e1edf798d2e5c202a20680ddb69b0cd316173fdb00730c2aef0625d57e24?placeholderIfAbsent=true"
              className={styles.sortArrow}
              alt="Sort"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default TaskHeader;
