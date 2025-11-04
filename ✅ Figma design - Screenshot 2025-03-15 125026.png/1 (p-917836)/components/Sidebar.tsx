import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.navigationContainer}>
          <div className={styles.iconGroup}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/74c7816710e43cac289868694afbb8be35e35b755c58e97651b6719238da953b?placeholderIfAbsent=true"
              className={styles.navIcon}
              alt="Navigation"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/109f185f494b810d97b343725c988d046195632dfd14be6b5b9e1f63a99f29e6?placeholderIfAbsent=true"
              className={styles.navIcon}
              alt="Navigation"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8a359418e7369daf44a5b5de7dc125e8ba133fc83e5c8005abda60c1bf0a8ede?placeholderIfAbsent=true"
              className={styles.navIcon}
              alt="Navigation"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6f1c662c138864265438f59fb13aedf0bee5f8d3028e4d0a9e374e2480de98d1?placeholderIfAbsent=true"
              className={styles.navIcon}
              alt="Navigation"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5649f8afd8d48c968f067420e93f8c5d9cfbed7b017d90dfb97e19c78be2eb7f?placeholderIfAbsent=true"
              className={styles.navIcon}
              alt="Navigation"
            />
          </div>

          <div className={styles.menuContainer}>
            <div className={styles.menuGroup}>
              <div className={styles.menuSection}>
                <div className={styles.menuHeader}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0d9f7b6ad2e9c3b26caafec7f455e72dbdf1dfab838228de1b45bd97accfd656?placeholderIfAbsent=true"
                    className={styles.menuIcon}
                    alt="Menu icon"
                  />
                  <span>Storred</span>
                </div>
                <nav className={styles.menuNav}>
                  <a href="#" className={styles.menuLink}>
                    Recent
                  </a>
                  <a href="#" className={styles.menuLink}>
                    Sales list
                  </a>
                  <a href="#" className={styles.menuLink}>
                    Goals
                  </a>
                  <a href="#" className={styles.menuLink}>
                    Dashboard
                  </a>
                </nav>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/759afe5cb15f5f2b4f553d75a26213e79a0325f84a57ea5d2ae778e5e246a15c?placeholderIfAbsent=true"
                className={styles.menuActionIcon}
                alt="Action"
              />
            </div>

            <div className={styles.divider}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3be66308c098f0c627eac667af6da63aa37a8b2337db7d96ddaf320491d2d04d?placeholderIfAbsent=true"
                className={styles.dividerLine}
                alt="Divider"
              />
              <div className={styles.dividerContent}>
                <div className={styles.dividerHeader}>
                  <div className={styles.dividerSection}>
                    <h3 className={styles.sectionTitle}>Codename</h3>
                    <p className={styles.sectionSubtitle}>Shored with me</p>
                  </div>
                  <span className={styles.sectionAction}>A</span>
                </div>

                <div className={styles.projectList}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0a5a8211123cc98e3944a37834c783a79d99a671c829bb777f2ff948ab040fd7?placeholderIfAbsent=true"
                    className={styles.projectIcon}
                    alt="Project"
                  />
                  <div className={styles.projectGroup}>
                    <div className={styles.projectHeader}>
                      <div className={styles.projectNames}>
                        <span className={styles.projectName}>Cargo2go</span>
                        <span className={styles.projectName}>Cloudz3r</span>
                      </div>
                      <div className={styles.projectImage} />
                    </div>
                    <span className={styles.projectName}>Idioma</span>
                    <span className={styles.projectName}>Syllables</span>
                    <span className={styles.projectName}>x-0b</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.reportsContainer}>
          <div className={styles.reportsSection}>
            <div className={styles.reportsContent}>
              <h3 className={styles.reportsTitle}>Reports</h3>

              <div className={styles.reportsGroup}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6eac2211eff7f0f81ddaf65b723b8be63214a7ce3dbd80bb1a79822e79d840b6?placeholderIfAbsent=true"
                  className={styles.reportsIcon}
                  alt="Reports"
                />
                <div className={styles.reportsSubgroup}>
                  <h4 className={styles.reportsSubtitle}>Share with me</h4>

                  <div className={styles.reportsList}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0500379ffd71e264eef38d343dd2001a03d2ba9458bb6af8a47e1526a04bb21d?placeholderIfAbsent=true"
                      className={styles.reportsListIcon}
                      alt="List"
                    />
                    <div className={styles.reportsListItems}>
                      <span className={styles.reportsListItem}>
                        Deals by user
                      </span>
                      <span className={styles.reportsListItem}>
                        Deal duration
                      </span>
                    </div>
                  </div>

                  <h4 className={styles.reportsSubtitle}>My reports</h4>

                  <div className={styles.myReportsList}>
                    <span className={styles.myReportsItem}>
                      Emails received
                    </span>
                    <span className={styles.myReportsItem}>Deal duration</span>
                    <span className={styles.myReportsItem}>New report</span>
                    <span className={styles.myReportsItem}>Analytics</span>
                  </div>
                </div>
              </div>

              <div className={styles.manageFolders}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a08858caf04bb98b673d7e739c6330ad87154584c0f078d013cdccfac5d2f588?placeholderIfAbsent=true"
                  className={styles.foldersIcon}
                  alt="Folders"
                />
                <span>Manage folders</span>
              </div>
            </div>

            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cbf38fe40834ff97ef846b2f8a255182bd8306381fbffddef9ad9f5d40271c02?placeholderIfAbsent=true"
              className={styles.actionIcon}
              alt="Action"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3171dfd581d138324cd0cd5d7ff7f55fbf266bd0bddb1b0e73846a0382a5be42?placeholderIfAbsent=true"
              className={styles.actionIcon}
              alt="Action"
            />
          </div>

          <div className={styles.notificationBadge}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/552668b04af1631470284dedc9ca2c744da06b6a5e1e06f06990b9b4fda5aa81?placeholderIfAbsent=true"
              className={styles.badgeIcon}
              alt="Badge"
            />
            <div className={styles.badgeButton}>
              <div className={styles.badgeBackground}>7</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
