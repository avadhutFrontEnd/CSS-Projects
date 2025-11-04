"use client";
import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import RevenueStats from "./RevenueStats";
import PlatformStats from "./PlatformStats";
import UserPerformance from "./UserPerformance";

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.root}>
        <div className={styles.container}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6e8af1e96ffa97ef4bbf6195642d3908586ba9992db8f1a685e91a3697f8fa38?placeholderIfAbsent=true"
            className={styles.backgroundImage}
            alt="Dashboard background"
          />

          <Header />

          <section className={styles.content}>
            <div className={styles.layout}>
              <Sidebar />

              <div className={styles.mainContent}>
                <div className={styles.mainContainer}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fd401815d9c4aa58ba2c13b58e2ca90a8de72bf998bcf55a5d56988383a1c5b5?placeholderIfAbsent=true"
                    className={styles.backgroundImage}
                    alt="Content background"
                  />

                  <Header isSecondary />

                  <div className={styles.statsContainer}>
                    <div className={styles.statsLayout}>
                      <RevenueStats />
                      <PlatformStats />
                    </div>
                  </div>

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/897e54c46635ccffdcab0ae5deefb200f2f26cdb9b09799074df763d8b3ea512?placeholderIfAbsent=true"
                    className={styles.divider}
                    alt="Divider"
                  />

                  <div className={styles.performanceContainer}>
                    <div className={styles.performanceLayout}>
                      <UserPerformance />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
