"use client";
import React from "react";
import styles from "./TrackingDashboard.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import OrderCard from "./OrderCard";
import MapSection from "./MapSection";
import VehicleDetails from "./VehicleDetails";

const TrackingDashboard: React.FC = () => {
  return (
    <main className={styles.dashboardContainer}>
      <Sidebar />
      <section className={styles.contentArea}>
        <Header />
        <section className={styles.orderCardsSection}>
          <OrderCard
            orderId="#AD345Jk758"
            status="In Transit"
            steps={[
              {
                date: "21 Jan",
                status: "Checking",
                time: "10:23AM",
                completed: true,
              },
              {
                date: "25 Jan",
                status: "In transit",
                time: "12:02PM",
                completed: true,
              },
              {
                date: "25 Jan",
                status: "Delivered",
                time: "-----",
                completed: false,
              },
            ]}
          />
          <OrderCard
            orderId="#FR156KL89K"
            status="Checking"
            steps={[
              {
                date: "22 Jan",
                status: "Checking",
                time: "11:28AM",
                completed: true,
              },
              {
                date: "26 Jan",
                status: "In transit",
                time: "--:--",
                completed: false,
              },
              {
                date: "30 Jan",
                status: "Delivered",
                time: "-----",
                completed: false,
              },
            ]}
          />
          <OrderCard
            orderId="#LN236NB89R"
            status="Checking"
            steps={[
              {
                date: "23 Jan",
                status: "Checking",
                time: "09:28AM",
                completed: true,
              },
              {
                date: "27 Jan",
                status: "In transit",
                time: "--:--",
                completed: false,
              },
              {
                date: "1Feb",
                status: "Delivered",
                time: "----",
                completed: false,
              },
            ]}
          />
        </section>
        <MapSection
          locations={[
            { address: "Mohrenstrasse 37", city: "10117 Berlin" },
            { address: "Goethestraße1", city: "10115 Berlin" },
          ]}
          stats={[
            {
              label: "Current location",
              value: "Torstraße 10117",
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbad3bda73422749db5ec23778bd107023208e9d",
            },
            {
              label: "Speed",
              value: "60 mph",
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1f227fc9a5a5563d5417f7b4d15830ef5ef68c6",
            },
            {
              label: "Kilometers left",
              value: "24 km",
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a06e8be837fa9382ee6ce03d2cde14976e5be17",
            },
            {
              label: "Last stop",
              value: "2 hours ago",
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23b7f67ab8a2df7bd0a54256c3529598466654b9",
            },
          ]}
        />
        <VehicleDetails />
      </section>
    </main>
  );
};

export default TrackingDashboard;
