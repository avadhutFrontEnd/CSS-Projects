"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import TaskCard from "./TaskCard";
import { Task } from "./TaskData";

interface TaskColumnProps {
  title: string;
  count: number;
  columnClass: string;
  headerClass: string;
  titleClass: string;
  countClass: string;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  title,
  count,
  columnClass,
  headerClass,
  titleClass,
  countClass,
  tasks,
}) => {
  return (
    <article className={columnClass}>
      <header className={headerClass}>
        <h2 className={titleClass}>{title}</h2>
        <span className={countClass}>{count}</span>
        <button>
          <i className={styles.tiTiDots} />
        </button>
      </header>

      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </article>
  );
};

export default TaskColumn;
