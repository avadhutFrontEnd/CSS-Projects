import React from "react";
import styles from "./AnalyticsView.module.css";

const AnalyticsView: React.FC = () => {
  return (
    <div className={styles.analyticsWrapper}>
      <div className={styles.analyticsBackground}>
        <div className={styles.analyticsContent}>
          <div className={styles.analyticsColumns}>
            <div className={styles.metricsColumn}>
              <div className={styles.metricsContent}>
                <h3 className={styles.metricsTitle}>Analytic view</h3>
                <div className={styles.metricsValues}>
                  <span className={styles.metricNumber}>97</span>
                  <span className={styles.metricLabel}>7</span>
                </div>
                <p className={styles.metricDescription}>Minimal number</p>
              </div>
            </div>

            <div className={styles.chartsColumn}>
              <div className={styles.chartsContent}>
                <div>
                  <div className={styles.timeframeSelector}>
                    <button className={styles.timeframeButton}>Day</button>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/eaa562e9dfddc1e9e0c375b7df864de4a040b6ba27064f7c7766e846b4cd7194?placeholderIfAbsent=true"
                      className={styles.timeframeIndicator}
                      alt="Selected timeframe"
                    />
                    <button className={styles.timeframeButton}>Month</button>
                    <button className={styles.timeframeButton}>Quarter</button>
                  </div>

                  <div className={styles.averageMetrics}>
                    <div className={styles.metricRow}>
                      <span className={styles.averageNumber}>120</span>
                      <span className={styles.averageLabel}>7</span>
                    </div>
                    <p className={styles.averageDescription}>Average number</p>
                  </div>
                </div>

                <div className={styles.yearlyMetrics}>
                  <div className={styles.yearSelector}>
                    <button className={styles.yearButton}>Year</button>
                    <button className={styles.allButton}>All</button>
                    <div className={styles.yearIndicator}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/aee14fefe4aa2d2406030eabf46f627e9885b6ef0c8687919ac77fe96805c7f7?placeholderIfAbsent=true"
                        className={styles.backgroundImage}
                        alt=""
                      />
                      7
                    </div>
                  </div>

                  <div className={styles.maximumMetrics}>
                    <span className={styles.maximumNumber}>259</span>
                    <span className={styles.maximumLabel}>7</span>
                  </div>

                  <p className={styles.maximumDescription}>Maximum number</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chartContainer}>
          <div className={styles.daysContainer}>
            <span className={styles.dayLabel}>Mon</span>
            <span className={styles.dayLabel}>Tue</span>
            <span className={styles.dayLabel}>Wed</span>
            <span className={styles.dayLabel}>Thu</span>
            <span className={styles.dayLabel}>Fri</span>
            <span className={styles.dayLabel}>Sat</span>
            <span className={styles.dayLabel}>Sun</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d80272811f1936b5e35ab0c5f6af0c3dbf586b920cfbdc71861e5d73eb84d1eb?placeholderIfAbsent=true"
            className={styles.chartImage}
            alt="Analytics chart"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
