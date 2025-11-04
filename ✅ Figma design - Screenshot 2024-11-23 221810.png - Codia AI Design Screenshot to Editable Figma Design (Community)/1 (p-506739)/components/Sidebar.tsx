"use client";
import React from "react";
import styles from "./Sidebar.module.css";
import OrderCard from "./OrderCard";

const Sidebar: React.FC = () => {
  return (
    <section className={styles.sidebar}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d3094be4d64d5f910897df0ef1bf92eb510f1ad12deec62f5d6408bc501c5ec5?placeholderIfAbsent=true"
        className={styles.backgroundImage}
        alt="Background"
      />
      <h1 className={styles.title}>Tracking Delivery</h1>

      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4adf84394c815279c534aacc8ecd3d3a0673e6cce0cbb1904f6fb00c7295d66e?placeholderIfAbsent=true"
            className={styles.searchIcon}
            alt="Search icon"
          />
          <span className={styles.searchText}>Search</span>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/20e7950866944593a3789bb109f978e5afeb53e0426652638c464bf00f90c8e9?placeholderIfAbsent=true"
          className={styles.profileImage}
          alt="Profile"
        />
      </div>

      <div className={styles.filterContainer}>
        <button className={styles.dateFilter}>
          <span>21Jan-1Feb</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a74d81c1412edf5c15006e377e3ea86b76d5691bb62599b60d3e39e115598016?placeholderIfAbsent=true"
            className={styles.arrowIcon}
            alt="Arrow down"
          />
        </button>
        <button className={styles.statusFilter}>
          <span>Checking</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/65336f454c1b58a788d77ea7857f7067f371e1aec52d58abcf8ec27171d3a007?placeholderIfAbsent=true"
            className={styles.arrowIcon}
            alt="Arrow down"
          />
        </button>
        <button className={styles.statusFilter}>
          <span>In Transit</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5084e60c08ab14a13e4dd9e550f2b22f52884b590d7128d4cb56bd264f573fb5?placeholderIfAbsent=true"
            className={styles.arrowIcon}
            alt="Arrow down"
          />
        </button>
      </div>

      <OrderCard
        orderId="AD345Jk758"
        status="In Transit"
        statusColor="#04dc96"
        statusBgColor="#1096c3"
        dates={["21 Jan", "25 Jan", "25 Jan"]}
        times={["10:23AM", "12:02PM", "-----"]}
        steps={["Checking", "In transit", "Delivered"]}
        active={1}
        isHighlighted={true}
      />

      <OrderCard
        orderId="FR156KL89K"
        status="Checking"
        statusColor="#f4bf6b"
        statusBgColor="#fff4dd"
        dates={["22 Jan", "26 Jan", "30 Jan"]}
        times={["11:28AM", "--:--", "-----"]}
        steps={["Checking", "In transit", "Delivered"]}
        active={0}
      />

      <OrderCard
        orderId="LN236NB89R"
        status="Checking"
        statusColor="#f4c06c"
        statusBgColor="#fff4dd"
        dates={["23 Jan", "27 Jan", "1Feb"]}
        times={["09:28AM", "--:--", "----"]}
        steps={["Checking", "In transit", "Delivered"]}
        active={0}
      />
    </section>
  );
};

export default Sidebar;
