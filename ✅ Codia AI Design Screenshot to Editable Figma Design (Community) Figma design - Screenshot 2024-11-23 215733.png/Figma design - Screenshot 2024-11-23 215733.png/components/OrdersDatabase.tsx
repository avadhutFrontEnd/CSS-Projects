"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const OrdersDatabase: React.FC = () => {
  return (
    <section className={styles.div40}>
      <div className={styles.div41}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f7b896191541c5a38bc2626af1d463f2088ba66"
          alt=""
          className="w-[47px] h-[48px]"
        />
        <div className={styles.div42}>
          <h3 className={styles.div43}>Orders Database</h3>
          <p className={styles.div44}>Today-July 15,2023</p>
        </div>
      </div>
      <div className={styles.div45}>
        <div className={styles.div46}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed8b526c240025662a08bbb2ca0bd8694a74f213"
            alt=""
            className="w-[16px] h-[14px]"
          />
          <p className={styles.div47}>You got 5 pending shipments</p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/912814c4c481bddd5a53d159d93ea1732f680fa2"
          alt=""
          className="w-[40px] h-[41px] rounded-[18.25px]"
        />
        <button className={styles.button}>Download report</button>
        <button className={styles.button2}>Create shipment</button>
      </div>
    </section>
  );
};

export default OrdersDatabase;
