"use client";
import React, { useState } from "react";
import styles from "./TaskGroup.module.css";
import TaskCard from "./TaskCard";

interface Task {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
  priority: "urgent" | "normal" | "low";
  progress: number;
}

interface TaskGroupProps {
  title: string;
  count: number;
  tasks: Task[];
}

const TaskGroup: React.FC<TaskGroupProps> = ({ title, count, tasks }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className={styles.taskGroup}>
      <header className={styles.groupHeader}>
        <button
          className={styles.expandButton}
          onClick={() => setExpanded(!expanded)}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ee39f37cbb0af631278905213afcbfedc8bde8616402e03ac0573f553a4e8675?placeholderIfAbsent=true"
            className={styles.expandIcon}
            alt=""
          />
          <div className={styles.titleWrapper}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/90b48db71aa9473a75b9c13986802a3a9b23ff55a30f3c70c0960d2093586950?placeholderIfAbsent=true"
              className={styles.categoryIcon}
              alt=""
            />
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.countBadge}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1248c0dae0193b286ff93cd4e1c7059b6124685846fe3ae8952c68196cdb3be2?placeholderIfAbsent=true"
                className={styles.countIcon}
                alt=""
              />
              <span>{count}</span>
            </div>
          </div>
        </button>

        <button className={styles.addButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5281fbf03bc4d910e7bb059a837ea36676ca9574b45002348c3c898e48ec2e77?placeholderIfAbsent=true"
            className={styles.addIcon}
            alt=""
          />
          <span>+</span>
        </button>
      </header>

      {expanded && (
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              assignee={task.assignee}
              dueDate={task.dueDate}
              priority={task.priority}
              progress={task.progress}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TaskGroup;
