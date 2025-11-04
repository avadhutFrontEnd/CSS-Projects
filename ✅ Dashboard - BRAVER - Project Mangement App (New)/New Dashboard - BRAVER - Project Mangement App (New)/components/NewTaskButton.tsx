import React from "react";
import styles from "./Dashboard.module.css";

const NewTaskButton: React.FC = () => {
  return (
    <div className={styles.div107}>
      <button className={styles.div108}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cf08fc34a5472016d32732848b5ad14bfa681001662de8a8eaf7e985af41a5f7?placeholderIfAbsent=true"
          alt="Add"
          className={styles.img52}
        />
        <span className={styles.newTask2}>New Task</span>
      </button>
      <div className={styles.div109} />
    </div>
  );
};

export default NewTaskButton;
