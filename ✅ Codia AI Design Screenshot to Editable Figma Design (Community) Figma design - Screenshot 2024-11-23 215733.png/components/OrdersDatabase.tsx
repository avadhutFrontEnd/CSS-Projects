"use client";
import React from "react";
import styles from "./OrdersDatabase.module.css";

const OrdersDatabase: React.FC = () => {
  return (
    <section className={styles.databaseSection}>
      <div className={styles.databaseContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c7b8b52074f13937f2a42fcb261a7ec9c7fd2b2452429ed4173c5db6e7df1b86?placeholderIfAbsent=true"
          className={styles.backgroundImage}
          alt=""
        />

        <div className={styles.databaseHeader}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b9876b7ca4de60bc0a945b35e8a9b218e708a0f31a76cea3c6786470c09c3ff7?placeholderIfAbsent=true"
            className={styles.databaseIcon}
            alt="Database icon"
          />
          <div className={styles.databaseInfo}>
            <h3 className={styles.databaseTitle}>Orders Database</h3>
            <p className={styles.databaseDate}>Today-July 15,2023</p>
          </div>
        </div>

        <div className={styles.databaseActions}>
          <div className={styles.notificationContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/57bcdf546307a87a45447d667c16550e2700316ebaab054dc42d31f411b70bef?placeholderIfAbsent=true"
              className={styles.notificationIcon}
              alt="Notification"
            />
            <p className={styles.notificationText}>
              You got 5 pending shipments
            </p>
          </div>

          <div className={styles.actionsContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8348cfaec691f906c5a5633a4a3bcbc2161bfb861112412ba3eeffd6a179ffc7?placeholderIfAbsent=true"
              className={styles.actionIcon}
              alt="Action"
            />
            <button className={styles.downloadButton}>
              <div className={styles.downloadButtonBg}>Download report</div>
            </button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5a8f45c15fe92d881f8d73f6fcc833ec330f54917cba1f87ca294b525b61c823?placeholderIfAbsent=true"
              className={styles.reportImage}
              alt="Report"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersDatabase;
