"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import StatsGrid from "./StatsGrid";
import OrdersDatabase from "./OrdersDatabase";

const InputDesign: React.FC = () => {
  return (
    <main className={styles.div}>
      <div className={styles.div2}>
        <Header />
        <section className={styles.div19}>
          <h2 className={styles.div20}>Tracking Orders List</h2>
          <StatsGrid />
          <OrdersDatabase />
        </section>
      </div>
    </main>
  );
};

export default InputDesign;
