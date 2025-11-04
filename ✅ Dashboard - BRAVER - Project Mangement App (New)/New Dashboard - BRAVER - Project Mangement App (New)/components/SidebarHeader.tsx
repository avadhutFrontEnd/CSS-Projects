import React from "react";
import styles from "./Dashboard.module.css";

const SidebarHeader: React.FC = () => {
  return (
    <header className={styles.sidemenuheader}>
      <div className={styles.avatardescription}>
        <div className={styles.avatar}>CP</div>
        <div className={styles.paragraphcontainer}>
          <h2 className={styles.daveJones}>Company Project</h2>
          <p className={styles.members}>12 Members</p>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f9336371425f457982c4857c943c87a4f410bc43c0a5579bb852c50dd32c50b8?placeholderIfAbsent=true"
        alt="Menu"
        className={styles.img}
      />
    </header>
  );
};

export default SidebarHeader;
