"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const InputDesign: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.layout}>
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default InputDesign;
