import React from "react";
import styles from "./Dashboard.module.css";

const BoardHeader: React.FC = () => {
  return (
    <header className={styles.upcontent}>
      <div className={styles.container}>
        <h1 className={styles.companyProjects}>Company Projects⚡</h1>
        <p className={styles.lastUpdate30February2024}>
          Last Update : 30 February 2024
        </p>
      </div>
      <div className={styles.avatargroup}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ca480da1e247321c7d7a5d67f634b412fc24f9223aeb97c43fb981483885ac05?placeholderIfAbsent=true"
          alt="Team members"
          className={styles.img14}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/03f12623be0f3767a8b475ca799e8fd788c385a48c5f024e7f4e5b40fa1525b6?placeholderIfAbsent=true"
          alt="Add member"
          className={styles.img15}
        />
      </div>
    </header>
  );
};

export default BoardHeader;
