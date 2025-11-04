import React from "react";
import styles from "./InputDesign.module.css";

const ProjectHeader: React.FC = () => {
  return (
    <header className={styles.div34}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a362851a6f4579d47aeb5c472ec44ca7d058475"
        alt="Project"
      />
      <h2 className={styles.div35}>Craftboard Project</h2>
      <div className={styles.div36}>
        <div className={styles.div37}>AL</div>
        <div className={styles.div38}>DT</div>
      </div>
      <button className={styles.button3}>
        <i className={styles.tiTiUserPlus} />
        <span>Invite</span>
      </button>
    </header>
  );
};

export default ProjectHeader;
