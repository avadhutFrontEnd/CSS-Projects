"use client";
import React from "react";
import styles from "./DeliveryMap.module.css";

const DeliveryMap: React.FC = () => {
  return (
    <section className={styles.mapContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/14f728c9b28c0d283a3c7182cbeea564d81d043b5a7d2a423019c4402f472d47?placeholderIfAbsent=true"
        className={styles.mapBackground}
        alt="Map background"
      />

      <div className={styles.mapContent}>
        <div className={styles.locationContainer}>
          <button className={styles.addressButton}>
            <p className={styles.addressLine}>Mohrenstrasse 37</p>
            <p className={styles.cityLine}>10117 Berlin</p>
          </button>

          <div className={styles.markerContainer}>
            <div className={styles.marker}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6ac48a2afd90aae3f3f020fb1611e7be1d4e69fb30ef98632163371b6fd115fc?placeholderIfAbsent=true"
                className={styles.markerBackground}
                alt=""
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ecc03cd3a7570a510f8c20989b6b71f6110bb7d83d05c6029d4f697cf055f57f?placeholderIfAbsent=true"
                className={styles.markerIcon}
                alt="Location marker"
              />
              <div className={styles.markerBottom}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d918c37b7c12b59e1881544e0db9c3289e02638caa7023f90d00d059b0de99fa?placeholderIfAbsent=true"
                  className={styles.markerBottomBg}
                  alt=""
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/12e00ae80e9a0d1136633df4e7f3a24c85cffbc0810af0bbf03c173f05b2b208?placeholderIfAbsent=true"
                  className={styles.markerLine}
                  alt=""
                />
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/18cd34b7eec82b23ce69427a4dc6a144f3215ed3512212131d3a760d0c6e1aab?placeholderIfAbsent=true"
              className={styles.markerDot}
              alt=""
            />
          </div>
        </div>

        <button className={styles.destinationButton}>
          <p className={styles.addressLine}>Goethestraße1</p>
          <p className={styles.cityLine}>10115 Berlin</p>
        </button>
      </div>

      <div className={styles.statusCard}>
        <div className={styles.statusCardContent}>
          <div className={styles.statusItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6c2e55f308e8b128b967f7edac3d04bfc6b5e4a9eeea4a93ee46223109f0dd0c?placeholderIfAbsent=true"
              className={styles.statusIcon}
              alt=""
            />
            <div>
              <h4 className={styles.statusLabel}>Current location</h4>
              <p className={styles.statusValue}>Torstraße 10117</p>
            </div>
          </div>

          <div className={styles.statusItem}>
            <div className={styles.speedContainer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/333bf1df6d5cca6b50660fbe397f706a38d55e728fbfc03556bc604141cc107b?placeholderIfAbsent=true"
                className={styles.statusIcon}
                alt=""
              />
              <h4 className={styles.statusLabel}>Speed</h4>
            </div>
            <p className={styles.statusValue}>60 mph</p>
          </div>

          <div className={styles.statusItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/576a178d257da542ce6767f52e4f1379a3a4e2edb60a9aeb1484a7a8b9a16d15?placeholderIfAbsent=true"
              className={styles.statusIcon}
              alt=""
            />
            <div>
              <h4 className={styles.statusLabel}>Kilometers left</h4>
              <p className={styles.statusValue}>24 km</p>
            </div>
          </div>

          <div className={styles.statusItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/552a90d96f2e3437c6ac6d9e9bd28e187b04d84a7dae1800e06f403bdc9cb7a4?placeholderIfAbsent=true"
              className={styles.statusIcon}
              alt=""
            />
            <div>
              <h4 className={styles.statusLabel}>Last stop</h4>
              <p className={styles.statusValue}>2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryMap;
