"use client";
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/91124f47f6c5b8a58da3332a2da405941fb3aaa8"
          alt="FinFlow Logo"
          className={styles.logoIcon}
        />
        <h1 className={styles.logoText}>FinFlow</h1>
      </div>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/062628d7ae27e94dfbe415b80623af695aa330d2"
            alt=""
            className={styles.navIcon}
          />
          <span>Dashboard</span>
        </li>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4490deb1b4b28d02c0f1cf2fe6283743797d574e"
            alt=""
            className={styles.navIcon}
          />
          <span>Inbox</span>
          <div className={styles.badge}>2</div>
        </li>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/289236f4520ef5f4bd6925c6de56806e0dcdcf46"
            alt=""
            className={styles.navIcon}
          />
          <span>Analytics</span>
        </li>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c8368a4992e397c51bb486d9ee11d6b53969f3d"
            alt=""
            className={styles.navIcon}
          />
          <span>Contacts</span>
        </li>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dadb8d93527459e1bd012ef41ac31a6bb50e9d60"
            alt=""
            className={styles.navIcon}
          />
          <span>Projects</span>
        </li>
      </ul>

      <button className={styles.addNewButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69020fd9148c6f96dd8fe0160591e6fbca10a155"
          alt=""
          className={styles.plusIcon}
        />
        <span>Add new</span>
      </button>

      <section className={styles.integrationsSection}>
        <h2 className={styles.sectionTitle}>Integrations</h2>
        <ul className={styles.integrationsList}>
          <li className={styles.integrationItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47a930baf8d096163020d05b6af7d3dedd478c2a"
              alt=""
              className={styles.integrationIcon}
            />
            <span>Google ID</span>
          </li>
          <li className={styles.integrationItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/af8b497f4117e063c90e45acfd48ab6e6c2aa7a2"
              alt=""
              className={styles.integrationIcon}
            />
            <span>Evernote</span>
          </li>
          <li className={styles.integrationItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b20384aad2673262f962ab1ad9f1c2bbce9d076e"
              alt=""
              className={styles.integrationIcon}
            />
            <span>Slack</span>
          </li>
        </ul>
      </section>

      <div className={styles.userProfile}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae8a9b52e44dbf2e88c586e993b885803e17e5b6"
          alt="User Avatar"
          className={styles.userAvatar}
        />
        <div className={styles.userInfo}>
          <div className={styles.userName}>Susan Kim</div>
          <div className={styles.userRole}>CEO</div>
        </div>
      </div>

      <ul className={styles.bottomNav}>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba82f133b34cb3fde7c97eb332643d5ce34c089"
            alt=""
            className={styles.navIcon}
          />
          <span>Settings</span>
        </li>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4182879b499b5527aed9d83ba01f5dc096dc238"
            alt=""
            className={styles.navIcon}
          />
          <span>Log out</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
