"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import TaskColumn from "./TaskColumn";
import { TodoTasks, InWorkTasks, QATasks, CompletedTasks } from "./TaskData";

const KanbanBoard = () => {
  return (
    <section className={styles.div45}>
      <TaskColumn
        title="TODO"
        count={2}
        columnClass={styles.div46}
        headerClass={styles.div47}
        titleClass={styles.div48}
        countClass={styles.div49}
        tasks={TodoTasks}
      />

      <TaskColumn
        title="IN WORK"
        count={4}
        columnClass={styles.div63}
        headerClass={styles.div64}
        titleClass={styles.div65}
        countClass={styles.div66}
        tasks={InWorkTasks}
      />

      <TaskColumn
        title="QA"
        count={8}
        columnClass={styles.div86}
        headerClass={styles.div87}
        titleClass={styles.div88}
        countClass={styles.div89}
        tasks={QATasks}
      />

      <TaskColumn
        title="COMPLETED"
        count={3}
        columnClass={styles.div104}
        headerClass={styles.div105}
        titleClass={styles.div106}
        countClass={styles.div107}
        tasks={CompletedTasks}
      />
    </section>
  );
};

export default KanbanBoard;
