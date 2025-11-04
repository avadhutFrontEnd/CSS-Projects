"use client";
import React from "react";
import styles from "./FinFlowDashboard.module.css";
import StatusCard from "./StatusCard";
import TransactionGrid from "./TransactionGrid";
import SearchBar from "./SearchBar";
import ActionButton from "./ActionButton";

const MainContent: React.FC = () => {
  return (
    <section className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Overview</h2>
          <div className={styles.badge}>8</div>
        </div>

        <SearchBar />

        <div className={styles.actionButtons}>
          <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ea7699657f2d11e47315f4b5fd4ae38fcad50f9a"
            label="Sort"
          />
          <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b27f94cfeae75a97e4372a74a3625b518e2676"
            label="Filters"
          />
          <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c876f34f6dc56b6fd70b2e351ebb0c7eaca77160"
            label="Download report"
          />
          <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/71c21fcd348287122ec8eb6da3da58091fdf3982"
            label="New deal"
            primary
          />
        </div>
      </header>

      <div className={styles.statusCardsContainer}>
        <StatusCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8c71d533eafd115fdcd0ce70e710664300627269"
          title="Pending"
          amount="$980.00"
        />
        <StatusCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cfa04a69128d0e3e5bf030bb0f0fc78f2672298a"
          title="In progress"
          amount="$25,017.00"
        />
        <StatusCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b13a62df3355c2d80ff9466819f327dea006a214"
          title="Successful"
          amount="$12,327.00"
        />
        <StatusCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4969a8b32ac5df13f83340400bfd69b262688"
          title="Declined"
          amount=""
        />
      </div>

      <TransactionGrid />
    </section>
  );
};

export default MainContent;
