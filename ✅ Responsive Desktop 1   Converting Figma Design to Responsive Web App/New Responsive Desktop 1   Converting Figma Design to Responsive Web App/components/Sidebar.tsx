import React from "react";
import styles from "./FinFlowDashboard.module.css";
import NavItem from "./NavItem";
import UserProfile from "./UserProfile";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/91124f47f6c5b8a58da3332a2da405941fb3aaa8"
          alt="Logo"
          className={styles.logoIcon}
        />
        <h1 className={styles.logoText}>FinFlow</h1>
      </div>

      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/062628d7ae27e94dfbe415b80623af695aa330d2"
        label="Dashboard"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4490deb1b4b28d02c0f1cf2fe6283743797d574e"
        label="Inbox"
        notificationCount={2}
      />

      <button className={styles.addNewButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69020fd9148c6f96dd8fe0160591e6fbca10a155"
          alt="Add"
          className={styles.addIcon}
        />
        <span>Add new</span>
      </button>

      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/47a930baf8d096163020d05b6af7d3dedd478c2a"
        label="Google ID"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/af8b497f4117e063c90e45acfd48ab6e6c2aa7a2"
        label="Evernote"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b20384aad2673262f962ab1ad9f1c2bbce9d076e"
        label="Slack"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/289236f4520ef5f4bd6925c6de56806e0dcdcf46"
        label="Analytics"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3c8368a4992e397c51bb486d9ee11d6b53969f3d"
        label="Contacts"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dadb8d93527459e1bd012ef41ac31a6bb50e9d60"
        label="Projects"
      />

      <h2 className={styles.sectionTitle}>Integrations</h2>

      <UserProfile
        avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/b372face9e9f2722ba2d2cd9a62b6bbc1531b0a0"
        name="Susan Kim"
        role="CEO"
      />

      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba82f133b34cb3fde7c97eb332643d5ce34c089"
        label="Settings"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b4182879b499b5527aed9d83ba01f5dc096dc238"
        label="Log out"
      />
    </nav>
  );
};

export default Sidebar;
