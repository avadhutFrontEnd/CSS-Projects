import React from "react";
import styles from "./TrackingHistory.module.css";

const TrackingHistory: React.FC = () => {
  return (
    <div className={styles.trackingWrapper}>
      <div className={styles.trackingBackground}>
        <div className={styles.trackingHeader}>
          <div className={styles.trackingInfo}>
            <h3 className={styles.trackingTitle}>Tracking History</h3>
            <p className={styles.trackingId}>Tracking ID</p>
            <p className={styles.trackingNumber}>#17986-12-779fg</p>

            <div className={styles.locationInfo}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b66df5f3287cde55e85e74fae19b634d79862302f19fd7e56842338323e06f3d?placeholderIfAbsent=true"
                className={styles.locationIcon}
                alt="Location"
              />
              <div className={styles.locationDetails}>
                <p className={styles.locationLabel}>Current Locotion</p>
                <p className={styles.locationValue}>Poznan, Poland</p>

                <p className={styles.departureLabel}>Departure Waypoint</p>
                <p className={styles.departureValue}>Berlin, Germany</p>

                <p className={styles.arrivalLabel}>Arrival Waypoint</p>
                <p className={styles.arrivalValue}>Hannover, Germany</p>
              </div>
            </div>
          </div>

          <div className={styles.statusInfo}>
            <div className={styles.statusContainer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fcad24cfebb606ccfa7a87683b244d0a8cd53d757b28085a987381d5a700dbca?placeholderIfAbsent=true"
                className={styles.statusIcon}
                alt="Status"
              />
              <button className={styles.statusButton}>
                <div className={styles.statusButtonBg}>In transit</div>
              </button>
            </div>

            <p className={styles.statusDate}>7th July, 2023,08:00</p>
            <p className={styles.departureDate}>4th July, 2023,15:00</p>
            <p className={styles.arrivalDate}>4th July, 2023, 10:00</p>
          </div>
        </div>

        <div className={styles.routeInfo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3ac6e23ac2a4a2891c0c8da711b49e9c4588867d158170be228e79ebbfe70723?placeholderIfAbsent=true"
            className={styles.routeIcon}
            alt="Route"
          />
          <div className={styles.routeDetails}>
            <p className={styles.routeLabel}>Route</p>
            <p className={styles.routeValue}>Hannover -Warsaw</p>
          </div>
        </div>

        <div className={styles.deliveryInfo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/70ca1f42898d590a9ca7d480b8eea5c35ad96eb8b67f2e3c9ce0198d61f895d9?placeholderIfAbsent=true"
            className={styles.deliveryIcon}
            alt="Delivery"
          />
          <div className={styles.deliveryDetails}>
            <p className={styles.deliveryLabel}>Estimated delivery date</p>
            <p className={styles.deliveryDate}>8th July,2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingHistory;
