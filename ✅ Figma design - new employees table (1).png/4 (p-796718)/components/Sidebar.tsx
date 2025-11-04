"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import UserProfile from "./UserProfile";
import MainMenu from "./MainMenu";
import ProjectList from "./ProjectList";
import SecurityPrompt from "./SecurityPrompt";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.column}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logoContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e8d30088a21e8133d6c9e2462f4f5ee3b6f50e2342814ac354fc66a6a2e01681?placeholderIfAbsent=true"
              className={styles.img}
              alt="Logo part 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/beff825014cf47d6e301d9ad346873dc14306514f7b0f68b8dcaeb40fc3c47b3?placeholderIfAbsent=true"
              className={styles.img}
              alt="Logo part 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/892adb0f4a4acebbe7504155b417ce910bf06c7bd8746f02afa03fc79d6c01fe?placeholderIfAbsent=true"
              className={styles.img2}
              alt="Logo part 3"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/86b9f5b0d6b82394d417a92216a454932873a22de7ba3014fb5629c83959c738?placeholderIfAbsent=true"
            className={styles.img}
            alt="Menu toggle"
          />
        </div>

        <UserProfile />
        <MainMenu />
        <ProjectList />
        <SecurityPrompt />
      </div>
    </aside>
  );
};

export default Sidebar;
