"use client";
import React from "react";
import styles from "./OutletBuddyApp.module.css";
import StoreList from "./StoreList";
import StoreDetail from "./StoreDetail";

function OutletBuddyApp() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.root}>
        <div className={styles.contentWrapper}>
          <StoreList />
          <StoreDetail />
        </div>
      </div>
    </div>
  );
}

export default OutletBuddyApp;
