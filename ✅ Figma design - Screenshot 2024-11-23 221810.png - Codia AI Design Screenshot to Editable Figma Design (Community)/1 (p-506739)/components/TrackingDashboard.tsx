"use client";
import React from "react";
import styles from "./TrackingDashboard.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const TrackingDashboard: React.FC = () => {
  return (
    <div className={styles.trackingDashboard}>
      <div className={styles.container}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9539529b46a53e4f00834208001c6bf51d51e088c85abc084604bdab7bf1b2cf?placeholderIfAbsent=true"
          className={styles.logo}
          alt="Logo"
        />
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default TrackingDashboard;
