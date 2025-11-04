"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Timeline from "./Timeline";

const VehicleDetails = () => {
  return (
    <article className={styles.div26}>
      <div className={styles.div27}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a03b7bab6240b31cef9671831a0f5cbcbd6e0cf"
          alt="Warning"
          className={styles.warningIcon}
        />
        <p className={styles.div28}>License not checked for 6 mo.</p>
      </div>

      <section className={styles.div29}>
        <h2 className={styles.div30}>Emery Zuckrafberg</h2>
        <p className={styles.div31}>#HG402</p>
        <div className={styles.div32}>
          <div className={styles.div33}>
            <p className={styles.div34}>28,390</p>
            <p className={styles.div35}>Driver score</p>
          </div>
          <div className={styles.div36}>4.50</div>
        </div>
      </section>

      <section className={styles.div37}>
        <div className={styles.div38}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/874f15fd40669a997ca9323486a4e405c8a2c7a5"
            alt="Vehicle"
            className={styles.vehicleThumbnail}
          />
          <div className={styles.div39}>
            <h3 className={styles.div40}>Vehicle Name</h3>
            <p className={styles.div41}>Volvo BM-390</p>
          </div>
          <div className={styles.div42}>Last update 09:48</div>
        </div>

        <div className={styles.div43}>
          <div>
            <h4 className={styles.div44}>Vehicle Name</h4>
            <p className={styles.div45}>Volvo BM-390</p>
          </div>
          <div>
            <h4 className={styles.div46}>Insurance</h4>
            <p className={styles.div47}>AD393044</p>
          </div>
          <div>
            <h4 className={styles.div48}>Vehicle Code</h4>
            <p className={styles.div49}>FH 890 H</p>
          </div>
        </div>
      </section>

      <Timeline />
    </article>
  );
};

export default VehicleDetails;
