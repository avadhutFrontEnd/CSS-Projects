import React from "react";
import styles from "./PlatformStats.module.css";

function PlatformStats() {
  return (
    <section className={styles.platformStats}>
      <div className={styles.platformContainer}>
        <div className={styles.timeframeContainer}>
          <div className={styles.timeframeLabel}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1a4ca6770c9b7eea78779ec2bc9b19c86f2616b75ccf5cb173c6866a2c297cca?placeholderIfAbsent=true"
              className={styles.timeframeIcon}
              alt="Calendar"
            />
            <span className={styles.timeframeText}>Timeframe</span>
          </div>

          <button className={styles.timeframeButton}>
            <div className={styles.timeframeBackground}>Sep 1-Nov 30,2023</div>
          </button>
        </div>

        <div className={styles.statsGrid}>
          <button className={styles.amountButton}>
            <div className={styles.amountBackground}>$27,335.09</div>
          </button>

          <div className={styles.statsRow}>
            <div className={styles.statsGroup}>
              <div className={styles.statsCard}>
                <div className={styles.cardBackground}>
                  <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>Top sales</h4>
                    <p className={styles.cardValue}>72</p>
                    <div className={styles.cardUser}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/08261dc8dd34bfabd8467f3f3c84b540e9235494f9e3b4c980228305ac594368?placeholderIfAbsent=true"
                        className={styles.userIcon}
                        alt="User"
                      />
                      <span className={styles.userName}>Mikasa</span>
                    </div>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b77dbdf3e63d1475d047f9ee6835c2f356e70a495b7dca1bdda95ed7a03a0d42?placeholderIfAbsent=true"
                    className={styles.cardAction}
                    alt="Action"
                  />
                </div>
              </div>

              <div className={styles.dealCard}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b588ded1c4a2a9432df7b6ad25e7fe3ed3f435d665ca5db2b4092221d118ddd7?placeholderIfAbsent=true"
                  className={styles.dealBackground}
                  alt="Background"
                />
                <div className={styles.dealContent}>
                  <div className={styles.dealHeader}>
                    <h4 className={styles.dealTitle}>Best deal</h4>
                    <span className={styles.dealStar}>☆</span>
                  </div>
                  <p className={styles.dealAmount}>$42,300</p>
                  <div className={styles.dealCompany}>
                    <span>Rolf Inc.</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d6a275ea063031d067cb294bbfc82e1f7c99cfb2d441307249b4c7a8ba1004a6?placeholderIfAbsent=true"
                      className={styles.companyIcon}
                      alt="Company"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.metricsGroup}>
              <div className={styles.metricCard}>
                <div className={styles.metricBackground}>
                  <h4 className={styles.metricTitle}>Deals</h4>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ccb0acffca2efc500393d17eae7a2cbab54029c4d8896f79ade6a5e0d5cb55ed?placeholderIfAbsent=true"
                    className={styles.metricChart}
                    alt="Chart"
                  />
                  <p className={styles.metricValue}>5</p>
                </div>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricBackgroundHighlight}>
                  <h4 className={styles.metricTitle}>Value</h4>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cdfadd0d061ad4ef350498c37e0c726be61d80084e78ca13a7f96860295a147d?placeholderIfAbsent=true"
                    className={styles.metricChart}
                    alt="Chart"
                  />
                  <p className={styles.metricValue}>7.9%</p>
                </div>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricBackground}>
                  <h4 className={styles.metricTitle}>Win rate</h4>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/657e445c203b727e7ecb97d5e13360a2f28460f0a2a46eb86e7218564a4327ee?placeholderIfAbsent=true"
                    className={styles.metricChart}
                    alt="Chart"
                  />
                  <p className={styles.metricValue}>1.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformStats;
