import React from "react";
import styles from "./CourierInfo.module.css";

const CourierInfo: React.FC = () => {
  return (
    <div className={styles.courierWrapper}>
      <div className={styles.mapContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d0297fcc2253c9d45472af779c6404a2c601cbbe409cb7acbb4c88ff17c63834?placeholderIfAbsent=true"
          className={styles.mapImage}
          alt="Delivery map"
        />
      </div>

      <div className={styles.courierInfoWrapper}>
        <div className={styles.courierInfoBackground}>
          <div className={styles.courierDetails}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/553230afce4a870fdfccde95b88ab4022c780e4a2f4f72911ead7f8828147a87?placeholderIfAbsent=true"
              className={styles.courierAvatar}
              alt="Courier avatar"
            />
            <div className={styles.courierData}>
              <p className={styles.courierLabel}>Courier</p>
              <p className={styles.courierName}>Mark Melody</p>
            </div>
          </div>

          <div className={styles.contactButtons}>
            <button className={styles.contactButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/75b2e58ba370f494bc9a255ff67dcf1555c2c3d74caf726a20bdb8fd34af9af5?placeholderIfAbsent=true"
                className={styles.contactIcon}
                alt="Call"
              />
            </button>
            <button className={styles.contactButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/90473e22378b1d19872b6c41fc527776eefddcf4a3aaf3213c4e5c88c6af2593?placeholderIfAbsent=true"
                className={styles.contactIcon}
                alt="Message"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourierInfo;
