import React from "react";
import styles from "./UserPerformance.module.css";
import PlatformMetrics from "./PlatformMetrics";
import SalesDynamics from "./SalesDynamics";

function UserPerformance() {
  return (
    <>
      <section className={styles.platformMetricsSection}>
        <PlatformMetrics />
      </section>

      <section className={styles.salesDynamicsSection}>
        <SalesDynamics />
      </section>
    </>
  );
}

export default UserPerformance;
