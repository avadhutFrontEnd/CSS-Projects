import React from "react";
import styles from "./VehicleDetails.module.css";

const VehicleDetails: React.FC = () => {
  return (
    <section className={styles.vehicleDetailsSection}>
      <nav className={styles.tabsContainer}>
        <button className={styles.tabButton}>Order details</button>
        <button className={styles.tabButton}>Vehicle</button>
        <button className={styles.tabButton}>Driver information</button>
        <button className={styles.tabButton}>Customer information</button>
      </nav>
      <div className={styles.detailsContainer}>
        <div className={styles.brandContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a297d736cad8a733ac14cf637b15e550b66bef50"
            alt="Brand logo"
            className={styles.brandLogo}
          />
          <span className={styles.brandName}>Hyundai</span>
          <div className={styles.ratingContainer}>
            <span>4.9</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30c10f611445e71804ce5c631f56d9f336f6812f"
              alt="Star"
              className={styles.starIcon}
            />
          </div>
        </div>
        <div className={styles.vehicleInfoContainer}>
          <div className={styles.truckImageContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/684c13df37a06314c0c2e9933ac481e9ebb6021a"
              alt="Truck"
              className={styles.truckImage}
            />
            <div className={styles.capacityOverlay}>71%</div>
          </div>
          <div className={styles.specificationContainer}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>MODEL</span>
              <span className={styles.specValue}>Cargo Track HD320</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>SPACE</span>
              <span className={styles.specValue}>71% / 100%</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>WEIGHT</span>
              <span className={styles.specValue}>7,260 kg</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>LOAD VOLUME</span>
              <span className={styles.specValue}>372,45 in³</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleDetails;
