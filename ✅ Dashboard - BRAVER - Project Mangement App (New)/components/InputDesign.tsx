"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Sidebar from "./Sidebar";
import ProjectHeader from "./ProjectHeader";
import KanbanBoard from "./KanbanBoard";
import ActionButtons from "./ActionButtons";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.div}>
        <Sidebar />
        <section className={styles.div31}>
          <ProjectHeader />
          <KanbanBoard />
          <ActionButtons />
        </section>
      </main>
    </>
  );
}

export default InputDesign;
