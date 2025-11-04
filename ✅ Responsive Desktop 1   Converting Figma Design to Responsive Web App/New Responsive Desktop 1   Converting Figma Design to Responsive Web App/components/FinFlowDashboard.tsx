"use client";
import React from "react";
import styles from "./FinFlowDashboard.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const FinFlowDashboard: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.dashboard}>
        <Sidebar />
        <MainContent />
      </main>
    </>
  );
};

export default FinFlowDashboard;
