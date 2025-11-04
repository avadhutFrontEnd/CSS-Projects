import React from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import ProjectHeader from "./ProjectHeader";
import TabNavigation from "./TabNavigation";

const MainContent: React.FC = () => {
  return (
    <main className={styles.column2}>
      <div className={styles.mainContentWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ccb6af47aee4efd94ed65893f025df8493c0c03748f88614c891feadc1ca78c5?placeholderIfAbsent=true"
          className={styles.img18}
          alt="Background"
        />

        <Header />
        <ProjectHeader />

        <div className={styles.contentArea}>
          <TabNavigation />

          <div className={styles.actionBar}>
            <div className={styles.searchFilterContainer}>
              <button className={styles.button7}>
                <div className={styles.background11}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/155efdc08ec3461db5488ceece7024ea85128e3ace1a7e7643c988d49890c7fb?placeholderIfAbsent=true"
                    className={styles.img34}
                    alt="Search icon"
                  />
                  <span>Search ...</span>
                </div>
              </button>

              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/57283ff61493c59ccf2d1008ca0ca3ecd4c41e24913517e7a7fb56a00e0eb2aa?placeholderIfAbsent=true"
                className={styles.img35}
                alt="Divider"
              />

              <button className={styles.button8}>
                <div className={styles.background12}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4757a92f376b7c1f71db409af9f034daedc8852d0a6fc0cecebb00e80dc36c4e?placeholderIfAbsent=true"
                    className={styles.img36}
                    alt="Filter icon"
                  />
                  <span>Filter</span>
                </div>
              </button>

              <button className={styles.button9}>
                <div className={styles.background13}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6577dfa4a84230220ec73783f448e9769326b3c6527a8772cff294e823bab2c5?placeholderIfAbsent=true"
                    className={styles.img37}
                    alt="Add icon"
                  />
                  <span>New Task</span>
                </div>
              </button>
            </div>
          </div>

          <hr className={styles.background14} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
