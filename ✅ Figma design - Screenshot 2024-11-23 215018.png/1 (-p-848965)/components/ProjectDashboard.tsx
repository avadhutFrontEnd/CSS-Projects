"use client";
import React from "react";
import styles from "./ProjectDashboard.module.css";
import Sidebar from "./Sidebar";
import TaskBoard from "./TaskBoard";

const ProjectDashboard: React.FC = () => {
  return (
    <main className={styles.dashboard}>
      <div className={styles.container}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b77ba46366eea5b4bcef54654ae5d6cfd8ada4e068f185ecae145ea23c7a3cfd?placeholderIfAbsent=true"
          className={styles.backgroundImage}
          alt=""
        />
        <div className={styles.content}>
          <Sidebar />
          <TaskBoard />
        </div>
      </div>
    </main>
  );
};

export default ProjectDashboard;
