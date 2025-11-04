import React from "react";
import styles from "./Dashboard.module.css";
import BoardHeader from "./BoardHeader";
import BoardView from "./BoardView";

const MainContent: React.FC = () => {
  return (
    <section className={styles.column2}>
      <div className={styles.sectionHeader}>
        <BoardHeader />

        <div className={styles.tabs}>
          <div className={styles.tabbase}>Overview</div>
          <div className={styles.tabbase2}>Board</div>
          <div className={styles.tabbase}>List</div>
          <div className={styles.tabbase}>Timeline</div>
          <div className={styles.tabbase}>Calender</div>
          <div className={styles.tabbase}>Workflow</div>
          <div className={styles.tabbase}>Files</div>
        </div>

        <div className={styles.div6}>
          <BoardView />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
