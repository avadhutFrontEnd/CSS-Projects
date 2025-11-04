import React from "react";
import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  icon: string;
  name: string;
  isActive?: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  icon,
  name,
  isActive = false,
}) => {
  return (
    <button
      className={`${styles.projectItem} ${isActive ? styles.active : ""}`}
    >
      <img src={icon} className={styles.icon} alt="" />
      <span className={styles.name}>{name}</span>
    </button>
  );
};

export default ProjectItem;
