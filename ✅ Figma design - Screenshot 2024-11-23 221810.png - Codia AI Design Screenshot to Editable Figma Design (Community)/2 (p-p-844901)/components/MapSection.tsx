import React from "react";
import styles from "./MapSection.module.css";

interface Location {
  address: string;
  city: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface MapSectionProps {
  locations: Location[];
  stats: Stat[];
}

const MapSection: React.FC<MapSectionProps> = ({ locations, stats }) => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5907ba67f7a894bc231faa341ea3bc6d717f072"
          alt="Delivery route map"
          className={styles.mapImage}
        />
        {locations.map((location, index) => (
          <div key={index} className={styles.locationMarker}>
            <div className={styles.locationInfo}>
              <span className={styles.locationAddress}>{location.address}</span>
              <span className={styles.locationCity}>{location.city}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <img src={stat.icon} alt={stat.label} className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>{stat.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MapSection;
