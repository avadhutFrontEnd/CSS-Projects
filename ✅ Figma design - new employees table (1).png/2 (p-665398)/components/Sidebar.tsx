import React from "react";
import styles from "./InputDesign.module.css";
import SidebarMenuItem from "./SidebarMenuItem";
import PageItem from "./PageItem";
import SecurityCard from "./SecurityCard";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.div2}>
      <header className={styles.div3}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a362851a6f4579d47aeb5c472ec44ca7d058475"
          alt="Logo"
          className={styles.logoImg}
        />
        <h1 className={styles.div4}>Manageko.</h1>
      </header>

      <section className={styles.div5}>
        <h2 className={styles.div6}>MAIN MENU</h2>
        <ul className={styles.div7}>
          <SidebarMenuItem icon="tiTiSearchI" label="Search" badgeCount="99+" />
          <SidebarMenuItem
            icon="tiTiBellI"
            label="Notification"
            badgeCount="99+"
          />
          <SidebarMenuItem icon="tiTiCalendarI" label="Calendar" />
          <SidebarMenuItem icon="tiTiSettingsI" label="Settings" />
        </ul>
      </section>

      <section className={styles.div14}>
        <div className={styles.div15}>
          <span>MY PAGES</span>
          <i className={styles.tiTiChevronDown} />
        </div>
        <ul className={styles.div16}>
          <PageItem
            label="Craftboard Project"
            iconContent="C"
            isTextIcon={true}
          />
          <PageItem
            label="Visionary Tasks"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8b3af962ddeee9ca6dadd372baefec6bfb6b6321"
            iconAlt="Visionary"
          />
          <PageItem
            label="Demotion Project"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/defc4c7df53b5728db98acf51151abb7c9c2a994"
            iconAlt="Demotion"
          />
          <PageItem
            label="Angular Studio"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/48f66cc1ee1f5ec3dbcbe1b94bcfc9382fa774d7"
            iconAlt="Angular"
            badgeCount="10"
            badgeColor="purple"
          />
          <PageItem
            label="Cudemo Project"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3def8f6402391ca87aaec28627cda8df87f57ecd"
            iconAlt="Cudemo"
          />
          <PageItem label="Create New" icon="tiTiPlus" />
        </ul>
      </section>

      <SecurityCard />
    </nav>
  );
};

export default Sidebar;
