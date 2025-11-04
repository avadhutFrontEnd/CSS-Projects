"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const ProjectHeader = () => {
  return (
    <header className={styles.div32}>
      <div className={styles.div33}>
        <h1>Company Projects⚡</h1>
        <time className={styles.div34}>Last Update : 30 February 2024</time>
      </div>

      <nav className={styles.div35}>
        <button className={styles.div36}>Overview</button>
        <button className={styles.div37}>Board</button>
        <button className={styles.div38}>List</button>
        <button className={styles.div39}>Timeline</button>
        <button className={styles.div40}>Calender</button>
        <button className={styles.div41}>Workflow</button>
        <button className={styles.div42}>Files</button>
      </nav>

      <div className={styles.div43}>
        <img
          src="https://placehold.co/32x32/6B7280/6B7280"
          alt="Member"
          className={styles.memberAvatar}
        />
        <img
          src="https://placehold.co/32x32/6B7280/6B7280"
          alt="Member"
          className={styles.memberAvatar}
        />
        <img
          src="https://placehold.co/32x32/6B7280/6B7280"
          alt="Member"
          className={styles.memberAvatar}
        />
        <img
          src="https://placehold.co/32x32/6B7280/6B7280"
          alt="Member"
          className={styles.memberAvatar}
        />
        <span className={styles.div44}>+7</span>
        <button>
          <i className={styles.tiTiPlus} />
        </button>
      </div>
    </header>
  );
};

export default ProjectHeader;
