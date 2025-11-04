import React from "react";
import styles from "./InputDesign.module.css";

const ProjectHeader: React.FC = () => {
  return (
    <section className={styles.groups16}>
      <div className={styles.projectTitleSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/750192e2134abd67d3a127c13054c9329c1157611d2459bd4be34b894cac0839?placeholderIfAbsent=true"
          className={styles.img27}
          alt="Project logo"
        />
        <h1 className={styles.craftboardProje}>Craftboard Project</h1>
      </div>

      <div className={styles.projectActions}>
        <div className={styles.teamMembers}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e994c970666b0f115bf556acd4e6513ff96826c89243fe33eb858d6c6b12a98d?placeholderIfAbsent=true"
            className={styles.img28}
            alt="Team members background"
          />
          <span className={styles.al}>AL</span>
          <span className={styles.dt}>DT</span>
        </div>

        <button className={styles.button6}>
          <div className={styles.background10}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/daff62671f47313ff6f153be2bf360e96f01dd055e0c1638fce8baed1020f85e?placeholderIfAbsent=true"
              className={styles.img29}
              alt="Invite icon"
            />
            <span>Invite</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default ProjectHeader;
