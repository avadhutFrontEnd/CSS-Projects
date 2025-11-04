import React from "react";
import styles from "./InputDesign.module.css";
import SidebarNavItem from "./SidebarNavItem";

function UserProfile() {
  return (
    <footer className={styles.div23}>
      <div className={styles.div24}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae8a9b52e44dbf2e88c586e993b885803e17e5b6"
          alt="User avatar"
          className="rounded-full"
        />
        <div className={styles.div25}>
          <h3 className={styles.div26}>Susan Kim</h3>
          <p className={styles.div27}>CEO</p>
        </div>
      </div>

      <SidebarNavItem
        iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba82f133b34cb3fde7c97eb332643d5ce34c089"
        label="Settings"
        styleClass={styles.div28}
        labelClass={styles.div29}
      />

      <SidebarNavItem
        iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b4182879b499b5527aed9d83ba01f5dc096dc238"
        label="Log out"
        styleClass={styles.div30}
        labelClass={styles.div31}
      />
    </footer>
  );
}

export default UserProfile;
