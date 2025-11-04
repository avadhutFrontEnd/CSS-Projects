import React from "react";
import styles from "./InputDesign.module.css";
import TaskHeader from "./TaskHeader";
import TaskItem from "./TaskItem";

interface Person {
  initials: string;
}

interface Task {
  name: string;
  description: string;
  dateRange: string;
  type: string;
  people: Person[];
  priority: string;
}

interface TaskSectionProps {
  title: string;
  count: number;
  tasks: Task[];
}

const TaskSection: React.FC<TaskSectionProps> = ({ title, count, tasks }) => {
  return (
    <section className={styles.taskSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerLeft}>
          <i className="tiTiChevronDown" />
          <h2 className={styles.sectionTitle}>{title}</h2>
          <div className={styles.countBadge}>{count}</div>
        </div>
        <i className="tiTiDots" />
      </div>
      <div className={styles.sectionContent}>
        <TaskHeader />
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            name={task.name}
            description={task.description}
            dateRange={task.dateRange}
            type={task.type}
            people={task.people}
            priority={task.priority}
          />
        ))}
      </div>
    </section>
  );
};

export default TaskSection;
