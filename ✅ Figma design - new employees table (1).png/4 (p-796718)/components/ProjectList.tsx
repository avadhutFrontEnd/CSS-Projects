import React from "react";
import styles from "./InputDesign.module.css";

const ProjectList: React.FC = () => {
  return (
    <nav className={styles.groups7}>
      <div className={styles.pagesHeader}>
        <h4 className={styles.sectionTitle}>MY PAGES</h4>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0653845fc92ddff4d1b21bfaa16ecc966a4e01c0f609b5a7dbef1aea281436a9?placeholderIfAbsent=true"
          className={styles.img9}
          alt="Expand pages"
        />
      </div>

      <ul className={styles.projectsList}>
        <li className={styles.button2}>
          <div className={styles.background4}>
            <div className={styles.groups8}>
              <div className={styles.projectIcon}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/112f8c9a2acec6ddd772866fb8cb3234b056350916552f0bce472a3989c92b31?placeholderIfAbsent=true"
                  className={styles.img10}
                  alt="Project background"
                />
                <span className={styles.iconText}>C</span>
              </div>
              <span className={styles.crafboardProjec}>Crafboard Project</span>
            </div>
          </div>
        </li>

        <li className={styles.groups9}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/eb793f9f0600fcffce8d6c5d32cde4fd299beab110a49b8dea7018b0dbd00acf?placeholderIfAbsent=true"
            className={styles.img11}
            alt="Visionary Tasks icon"
          />
          <span className={styles.visionaryTasks}>Visionary Tasks</span>
        </li>

        <li className={styles.groups10}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/184d211b8f632ca19d26c2a3779ba3223d35a65c46de56b57bed21d29d8ea9b7?placeholderIfAbsent=true"
            className={styles.img12}
            alt="Demotion Project icon"
          />
          <span className={styles.demotionProject}>Demotion Project</span>
        </li>

        <li className={styles.groups11}>
          <div className={styles.projectItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/43c103e1b8aa27a5160b54dda85920b7c4bf72f3459948a12179143856ad4b6a?placeholderIfAbsent=true"
              className={styles.img13}
              alt="Angular Studio icon"
            />
            <span className={styles.angularStudio}>Angular Studio</span>
          </div>
          <button className={styles.button3}>
            <span className={styles.background5}>10</span>
          </button>
        </li>

        <li className={styles.groups12}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3c4292826798bd76dfd635aae8ef24aded3247aa3acc64dd7fe7e297e8ec8e9c?placeholderIfAbsent=true"
            className={styles.img14}
            alt="Cudemo Project icon"
          />
          <span className={styles.cudemoProject}>Cudemo Project</span>
        </li>

        <li className={styles.groups13}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2f9f2aa47c2168dc6e8989ea48c874d9565f30aaba3631eec0075676033fd763?placeholderIfAbsent=true"
            className={styles.img15}
            alt="Create New icon"
          />
          <span className={styles.createNew}>Create New</span>
        </li>
      </ul>
    </nav>
  );
};

export default ProjectList;
