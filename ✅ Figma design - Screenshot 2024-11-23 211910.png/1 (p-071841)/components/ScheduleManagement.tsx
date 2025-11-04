"use client";
import React, { useState } from "react";
import styles from "./ScheduleManagement.module.css";

const scheduleData = [
  { id: "XY 78894", duration: "28h" },
  { id: "JY 73391", duration: "28h" },
  { id: "XY 71209", duration: "28h" },
  { id: "XY 12800", duration: "28h" },
  { id: "XY 12890", duration: "28h" },
];

const ScheduleManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className={styles.scheduleCard}>
      <h2 className={styles.scheduleTitle}>Schedule Management</h2>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "all" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "transit" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("transit")}
        >
          In transit
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "upcoming" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "delayed" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("delayed")}
        >
          Delayed
        </button>
      </div>
      <div>
        <div className={styles.dateHeader}>
          <span>SUN 19</span>
          <span>SUN 20</span>
          <span>SUN 21</span>
          <span>SUN 22</span>
        </div>
        <div className={styles.scheduleList}>
          {scheduleData.map((item, index) => (
            <div key={index} className={styles.scheduleItem}>
              <span>{item.id}</span>
              <span>{item.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleManagement;
