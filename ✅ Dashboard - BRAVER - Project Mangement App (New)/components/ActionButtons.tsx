"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const ActionButtons = () => {
  return (
    <>
      <button className={styles.div121}>
        <i className={styles.tiTiPlus} />
        <span>New Task</span>
      </button>

      <button className={styles.div122}>
        <i className={styles.tiTiDots} />
      </button>
    </>
  );
};

export default ActionButtons;
