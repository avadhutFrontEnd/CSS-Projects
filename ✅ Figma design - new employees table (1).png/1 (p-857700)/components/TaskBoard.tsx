"use client";
import React from "react";
import styles from "./FigmaDesignNewEmployeesTable1Png.module.css";
import ToDoColumn from "./ToDoColumn";
import InProgressColumn from "./InProgressColumn";
import InReviewColumn from "./InReviewColumn";

const TaskBoard: React.FC = () => {
  return (
    <section className={styles.taskBoard}>
      <ToDoColumn />
      <InProgressColumn />
      <InReviewColumn />
    </section>
  );
};

export default TaskBoard;
