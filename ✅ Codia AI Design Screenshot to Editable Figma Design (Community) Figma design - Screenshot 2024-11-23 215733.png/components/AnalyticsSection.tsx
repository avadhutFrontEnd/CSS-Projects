import React from "react";
import styles from "./AnalyticsSection.module.css";
import AnalyticsView from "./AnalyticsView";
import TrackingHistory from "./TrackingHistory";
import CourierInfo from "./CourierInfo";

const AnalyticsSection: React.FC = () => {
  return (
    <section className={styles.analyticsSection}>
      <div className={styles.analyticsContainer}>
        <div className={styles.analyticsColumn}>
          <AnalyticsView />
        </div>

        <div className={styles.trackingColumn}>
          <TrackingHistory />
        </div>

        <div className={styles.courierColumn}>
          <CourierInfo />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
