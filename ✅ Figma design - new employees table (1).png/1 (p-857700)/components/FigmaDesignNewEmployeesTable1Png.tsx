"use client";
import React from "react";
import styles from "./FigmaDesignNewEmployeesTable1Png.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const FigmaDesignNewEmployeesTable1Png: React.FC = () => {
  return (
    <div className={styles.figmadesignNewemployeestable1Png}>
      <div className={styles.root}>
        <div className={styles.div}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/46ae8db8ddd18438a4c628ee469d66925f6731b8d8de4d47fe1e21f13e1e60a1?placeholderIfAbsent=true"
            className={styles.img}
            alt="Background"
          />
          <div className={styles.background}>
            <div className={styles.div2}>
              <Sidebar />
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaDesignNewEmployeesTable1Png;
