import React from "react";
import styles from "./Dashboard.module.css";

const AddProject: React.FC = () => {
  return (
    <button className={styles.newTask}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e7d9f13c22625d560daad1afe810c0333aa0b994884e8ea22ce038b5fcaa1cc8?placeholderIfAbsent=true"
        alt="Add"
        className={styles.img12}
      />
      <span className={styles.addNewProject}>Add New Project</span>
    </button>
  );
};

export default AddProject;
