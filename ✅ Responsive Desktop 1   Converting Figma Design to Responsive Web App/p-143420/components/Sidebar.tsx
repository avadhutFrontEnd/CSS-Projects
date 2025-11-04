import React from "react";
import styles from "./InputDesign.module.css";
import SidebarNavItem from "./SidebarNavItem";
import UserProfile from "./UserProfile";

function Sidebar() {
  return (
    <aside className={styles.div2}>
      <header className={styles.div3}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/91124f47f6c5b8a58da3332a2da405941fb3aaa8"
          alt="FinFlow logo"
        />
        <h1 className={styles.div4}>FinFlow</h1>
      </header>

      <nav>
        <SidebarNavItem
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/062628d7ae27e94dfbe415b80623af695aa330d2"
          label="Dashboard"
          isActive={true}
          styleClass={styles.div5}
          labelClass={styles.div6}
        />

        <SidebarNavItem
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4490deb1b4b28d02c0f1cf2fe6283743797d574e"
          label="Inbox"
          badge="2"
          styleClass={styles.div7}
          labelClass={styles.div8}
          badgeClass={styles.div9}
        />

        <SidebarNavItem
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/289236f4520ef5f4bd6925c6de56806e0dcdcf46"
          label="Analytics"
          styleClass={styles.div10}
          labelClass={styles.div11}
        />

        <SidebarNavItem
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3c8368a4992e397c51bb486d9ee11d6b53969f3d"
          label="Contacts"
          styleClass={styles.div12}
          labelClass={styles.div13}
        />

        <SidebarNavItem
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/dadb8d93527459e1bd012ef41ac31a6bb50e9d60"
          label="Projects"
          styleClass={styles.div14}
          labelClass={styles.div15}
        />
      </nav>

      <section>
        <h2 className={styles.div16}>Integrations</h2>

        <SidebarNavItem
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/47a930baf8d096163020d05b6af7d3dedd478c2a"
          label="Google ID"
          styleClass={styles.div17}
          labelClass={styles.div18}
        />

        <SidebarNavItem
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/af8b497f4117e063c90e45acfd48ab6e6c2aa7a2"
          label="Evernote"
          styleClass={styles.div19}
          labelClass={styles.div20}
        />

        <SidebarNavItem
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b20384aad2673262f962ab1ad9f1c2bbce9d076e"
          label="Slack"
          styleClass={styles.div21}
          labelClass={styles.div22}
        />
      </section>

      <UserProfile />
    </aside>
  );
}

export default Sidebar;
