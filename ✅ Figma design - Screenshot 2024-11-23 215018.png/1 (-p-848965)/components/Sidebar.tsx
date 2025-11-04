"use client";
import React from "react";
import styles from "./Sidebar.module.css";
import NavigationItem from "./NavigationItem";
import ProjectItem from "./ProjectItem";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8fa8a42e415ca9b5c0c6d4e14e3f4432e8eb7f8548cfd9ef9648962a7cb23393?placeholderIfAbsent=true"
          className={styles.logo}
          alt="AutomatePro logo"
        />
        <h1 className={styles.title}>AutomatePro</h1>
      </header>

      <div className={styles.workspaceSelector}>
        <button className={styles.workspaceButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b658fc3e348602b7a3406c0596c5585c14dd9780d1812ce3fd2ae1fc130f7771?placeholderIfAbsent=true"
            className={styles.workspaceIcon}
            alt=""
          />
          <span className={styles.workspaceName}>Keitoto Studio</span>
        </button>
      </div>

      <nav className={styles.navigation}>
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/09f32b843b0f83c479b4a532ef6fe3d412871b49b01a187b926a2611122611b2?placeholderIfAbsent=true"
          label="Dashboard"
        />
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5c7b60fe8789130bdbbb9c3ae3062a787d99e68608165d590a94284aa28532a8?placeholderIfAbsent=true"
          label="Inbox"
        />
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ef5df92c5feaa35538ea2ff3e7dbe7ac6408a342c229c653680659aab5a02384?placeholderIfAbsent=true"
          label="Teams"
        />
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9da8f66c55c43285fcb4c69cad5f6bd1c8eaa8dbdc07f024b16bd66b19cb5893?placeholderIfAbsent=true"
          label="Assigned to me"
        />
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a6b38fbb760a0b6fbb7ce437dcebf7e974d7c4c2b2668f316488ad5a0fc20c33?placeholderIfAbsent=true"
          label="Created by me"
        />
      </nav>

      <div className={styles.divider} />

      <section className={styles.projectsSection}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Favorites</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3168a7206799453c58ee3e24a6310afdbec29fa4eeec7b4abb5e3deb69e8e326?placeholderIfAbsent=true"
            className={styles.expandIcon}
            alt="Expand"
          />
        </header>

        <div className={styles.divider} />

        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9ae8651f9f2f0f14768b0fa623eed75d60d20ab6e53ab96f59a7720ead2857e6?placeholderIfAbsent=true"
            className={styles.expandIcon}
            alt="Expand"
          />
        </header>

        <div className={styles.projectsList}>
          <ProjectItem
            icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/87765be8f3f651e339e27b8d2af06fdaf20939e31fe4b38f0f8c5812e31cd9a5?placeholderIfAbsent=true"
            name="Adrian Bert- CRM Da..."
            isActive={true}
          />
          <ProjectItem
            icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5d03904e7cd31149b698e9310574c4a044d36c977f1ed0face483aa4db962272?placeholderIfAbsent=true"
            name="Trust-SaaS Dashbo.."
          />
          <ProjectItem
            icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/adac0ef0fdddbadd6394e0f10e3a3ddc0dd1ca793c1fcbdefd17853da4113053?placeholderIfAbsent=true"
            name="Pertamina Project"
          />
          <ProjectItem
            icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6ba852f6144ed8335424c7578a4874efa8edd6495964b5595ebd65c7bd245ee5?placeholderIfAbsent=true"
            name="Garuda Project"
          />
        </div>

        <div className={styles.divider} />

        <button className={styles.newButton}>New</button>
      </section>

      <nav className={styles.bottomNav}>
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/12903b093fbea583cc4bf519b17427b07824a2081852286a2b5fd75c37a6937c?placeholderIfAbsent=true"
          label="Settings"
        />
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a3e33c5ed001b1df4cd27565af1d4c8994be65236b7884d24550da949aea8336?placeholderIfAbsent=true"
          label="Help Center"
        />
      </nav>

      <footer className={styles.userProfile}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/df18c183ecdbf191cfb63ad894d30e58a4bd03609af5b93067e1f52fabc0b96b?placeholderIfAbsent=true"
          className={styles.userAvatar}
          alt="User avatar"
        />
        <div className={styles.userInfo}>
          <p className={styles.userName}>Darlene Robertson</p>
          <p className={styles.userEmail}>darfene@gmail.com</p>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
