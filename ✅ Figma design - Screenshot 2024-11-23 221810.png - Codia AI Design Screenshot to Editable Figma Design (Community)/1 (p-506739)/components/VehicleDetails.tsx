"use client";
import React from "react";
import styles from "./VehicleDetails.module.css";

const VehicleDetails: React.FC = () => {
  return (
    <div className={styles.vehicleDetails}>
      <div className={styles.vehicleHeader}>
        <div className={styles.vehicleBrand}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/507adacc253d2c303f385ca916692dfc547a26f17e057349a45d38f1b362a551?placeholderIfAbsent=true"
            className={styles.brandLogo}
            alt="Hyundai logo"
          />
          <span className={styles.brandName}>Hyundai</span>
        </div>
        <div className={styles.ratingContainer}>
          <span className={styles.rating}>4.9</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/88503a18ee5b923d0f59d9867091c7bd4eaef21e4d5b0889cb7e95274eaa263b?placeholderIfAbsent=true"
            className={styles.starIcon}
            alt="Star"
          />
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cba0ec5647b2edd20e0f4a4780b152f78fbe48cb700f6daa7423fc50f341c363?placeholderIfAbsent=true"
        className={styles.vehicleImage}
        alt="Vehicle"
      />

      <div className={styles.specificationContainer}>
        <div className={styles.specGroup}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>MODEL</span>
            <span className={styles.specValue}>Cargo Track HD320</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>WEIGHT</span>
            <span className={styles.specValue}>7,260 kg</span>
          </div>
        </div>

        <div className={styles.specGroup}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>SPACE</span>
            <span className={styles.specValue}>71% / 100%</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>LOAD VOLUME</span>
            <span className={styles.specValue}>372,45 in³</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
