"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import VehicleDetails from "./VehicleDetails";
import Map from "./Map";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.div}>
        <Sidebar />
        <main className={styles.div13}>
          <Header />
          <section className={styles.div20}>
            <div className={styles.div21}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e64b5747c366e6f5fd67175070ae7e20e6e576b8"
                alt="Back"
                className={styles.backIcon}
              />
              <span className={styles.div22}>Back</span>
            </div>
            <div className={styles.div23}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91e30205263e660c1ac8be2d27b6fe3ab1000afe"
                alt="Vehicle"
                className={styles.vehicleIcon}
              />
              <span className={styles.div24}>3 Vehicle nearby</span>
            </div>
            <address className={styles.div25}>
              Oscar Main Streets 24, Singapore
            </address>
            <VehicleDetails />
            <Map />
          </section>
        </main>
      </div>
    </>
  );
}

export default InputDesign;
