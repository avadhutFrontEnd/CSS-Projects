"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import ProjectHeader from "./ProjectHeader";
import TasksSection from "./TasksSection";

const MainContent: React.FC = () => {
  return (
    <section className={styles.div30}>
      <nav className={styles.div31}>
        <i className={styles.tiTiChevronLeft} />
        <i className={styles.tiTiChevronRight} />
        <div />
        <span>My Pages/</span>
        <span>Craftboard Project</span>
        <div className={styles.div32}>
          <span>NewTab</span>
          <i className={styles.tiTiPlus} />
        </div>
        <div className={styles.div33}>
          <i className={styles.tiTiShare} />
          <i className={styles.tiTiDots} />
          <i className={styles.tiTiMenu2} />
        </div>
      </nav>

      <ProjectHeader />

      <div className={styles.div39}>
        <button className={styles.div40}>
          <i className={styles.tiTiLayoutKanban} />
          <span>Kanban</span>
        </button>
        <button className={styles.div41}>
          <i className={styles.tiTiTimeline} />
          <span>Timeline</span>
        </button>
        <button className={styles.div42}>
          <i className={styles.tiTiList} />
          <span>List</span>
        </button>
      </div>

      <div className={styles.div43}>
        <div className={styles.div44}>
          <i className={styles.tiTiSearch} />
          <input type="text" placeholder="Search ..." />
        </div>
        <div />
        <button className={styles.button4}>
          <i className={styles.tiTiFilter} />
          <span>Filter</span>
        </button>
        <button className={styles.button5}>
          <i className={styles.tiTiPlus} />
          <span>New Task</span>
        </button>
      </div>

      <TasksSection />
    </section>
  );
};

export default MainContent;
