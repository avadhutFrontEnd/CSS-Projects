"use client";
import * as React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard: React.FC = () => {
  return (
    <main className={styles.dashboard}>
      <div className={styles.div}>
        <Sidebar />
        <MainContent />
      </div>
    </main>
  );
};

export default Dashboard;
