import React from "react";
import styles from "./Dashboard.module.css";
import BoardContent from "./BoardContent";

const MainContent: React.FC = () => {
  return (
    <section className={styles.column2}>
      <div className={styles.sectionHeader}>
        <div className={styles.upcontent}>
          <div className={styles.container}>
            <h2 className={styles.companyProjects}>Company Projects⚡</h2>
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
        </div>

        <nav className={styles.tabs}>
          <button className={styles.tabbase}>Overview</button>
          <button className={styles.tabbase2}>Board</button>
          <button className={styles.tabbase}>List</button>
          <button className={styles.tabbase}>Timeline</button>
          <button className={styles.tabbase}>Calender</button>
          <button className={styles.tabbase}>Workflow</button>
          <button className={styles.tabbase}>Files</button>
        </nav>

        <div className={styles.div6}>
          <BoardContent />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
