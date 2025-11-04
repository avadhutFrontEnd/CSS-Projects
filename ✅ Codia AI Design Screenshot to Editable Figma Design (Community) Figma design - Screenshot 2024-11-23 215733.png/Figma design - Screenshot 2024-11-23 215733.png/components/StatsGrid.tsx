"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import StatCard from "./StatCard";

const StatsGrid: React.FC = () => {
  return (
    <div className={styles.div21}>
      <StatCard
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3e89e8dea7691bee36d379102e3adfaeb88ebda2"
        title="Total Shipments"
        value="789"
        change="+5,45%↗"
        isPositive={true}
        className={styles.div22}
      />
      <StatCard
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/422c6e39dacfcd8463b65f7cc00b39e9cf166a9d"
        title="Active Tracking"
        value="120"
        change="-0,45% 7"
        isPositive={false}
        className={styles.div28}
      />
      <StatCard
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/afea013a8d3ceb6921f2eb80cad485a47d3c48fc"
        title="Delivered Shipments"
        value="98"
        change="+5,45%↗"
        isPositive={true}
        className={styles.div34}
      />
    </div>
  );
};

export default StatsGrid;
