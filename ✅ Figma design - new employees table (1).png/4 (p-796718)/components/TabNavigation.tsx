import React from "react";
import styles from "./InputDesign.module.css";

const TabNavigation: React.FC = () => {
  return (
    <nav className={styles.tabNavigationContainer}>
      <div className={styles.tabsWrapper}>
        <div className={styles.tabsList}>
          <button className={styles.tabItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3cd016e815cbec9b86d9c96414ebdd346289aa1a46b4bc69b0df270e9d84ee13?placeholderIfAbsent=true"
              className={styles.img30}
              alt="Kanban icon"
            />
            <span>Kanban</span>
          </button>

          <button className={styles.timelineTab}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1404592ac044f329952f9a118d40428289b0b95a50d6f05e47b7ab4eaa4652be?placeholderIfAbsent=true"
              className={styles.img31}
              alt="Timeline icon"
            />
            <span>Timeline</span>
          </button>

          <button className={styles.listTab}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e642cac8a3e4839110d84fd8cef43c4beef126108a3a87926585b97972d4649a?placeholderIfAbsent=true"
              className={styles.img32}
              alt="List icon"
            />
            <span>List</span>
          </button>
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0a4710204aa273deda6f6e684b5634dfd1b1b82fc9a534962054bfeb3360d48b?placeholderIfAbsent=true"
          className={styles.img33}
          alt="Tab indicator"
        />
      </div>
    </nav>
  );
};

export default TabNavigation;
