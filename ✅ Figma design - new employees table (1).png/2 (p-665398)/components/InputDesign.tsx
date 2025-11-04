"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function InputDesign() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
      />
      <main className={styles.div}>
        <Sidebar />
        <MainContent />
      </main>
    </>
  );
}

export default InputDesign;
