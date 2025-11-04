"use client";
import React from "react";
import styles from "./ShipmentDashboard.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardStats from "./DashboardStats";
import PerformanceChart from "./PerformanceChart";
import ConnectedCarrierChart from "./ConnectedCarrierChart";
import RecentShipments from "./RecentShipments";
import CarrierRatings from "./CarrierRatings";
import ScheduleManagement from "./ScheduleManagement";

const ShipmentDashboard: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <main className={styles.dashboardContainer}>
        <Sidebar />
        <section className={styles.contentArea}>
          <Header />
          <section className={styles.dashboardHeader}>
            <h1 className={styles.dashboardTitle}>Shipment Management</h1>
            <div className={styles.actionButtons}>
              <button className={styles.actionButton}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e921ac37a89ec64a8e2f079450080f119e9b95"
                  alt="Filter"
                />
                <span>Add filter</span>
              </button>
              <button className={styles.actionButton}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/27e22ddbb485b744c107cb568ab64654b441ba60"
                  alt="Calendar"
                />
                <span>June 21 - July 20</span>
              </button>
            </div>
          </section>
          <div className={styles.dashboardGrid}>
            <DashboardStats
              value="585"
              trend="4.58%"
              trendUp={true}
              label="Total Shipment"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/89ee3098161bea270f210db3e6efffde5ea4897f"
            />
            <DashboardStats
              value="550"
              trend="2.34%"
              trendUp={false}
              label="Delivery Shipment"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ff59ea201854292169059634241636aa1c7321a9"
            />
            <PerformanceChart />
            <ConnectedCarrierChart />
            <RecentShipments />
            <CarrierRatings />
            <ScheduleManagement />
          </div>
        </section>
      </main>
    </>
  );
};

export default ShipmentDashboard;
