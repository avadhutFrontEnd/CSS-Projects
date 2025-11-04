"use client";
import React from "react";
import styles from "./TrackingDashboard.module.css";
import NavigationBar from "./NavigationBar";
import TrackingStats from "./TrackingStats";
import OrdersDatabase from "./OrdersDatabase";
import AnalyticsSection from "./AnalyticsSection";
import ShipmentTable from "./ShipmentTable";

const TrackingDashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.root}>
        <div className={styles.container}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/48007b09df7a1d44dcc29b403b0b3a298da04aa80877b1e398d88a562eaab32c?placeholderIfAbsent=true"
            className={styles.backgroundImage}
            alt="Dashboard background"
          />

          <NavigationBar />
          <TrackingStats />
          <OrdersDatabase />
          <AnalyticsSection />
          <ShipmentTable />
        </div>
      </main>
    </div>
  );
};

export default TrackingDashboard;
