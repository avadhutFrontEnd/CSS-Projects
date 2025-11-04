import React from "react";
import styles from "./InputDesign.module.css";

interface Person {
  initials: string;
}

interface TaskItemProps {
  name: string;
  description: string;
  dateRange: string;
  type: string;
  people: Person[];
  priority: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  name,
  description,
  dateRange,
  type,
  people,
  priority,
}) => {
  return (
    <article className={styles.taskRow}>
      <div className={styles.checkboxCell}>
        <input type="checkbox" />
      </div>
      <h3 className={styles.headerCell}>{name}</h3>
      <p className={styles.headerCell}>{description}</p>
      <time className={styles.dateCell}>{dateRange}</time>
      <div className={styles.typeCell}>{type}</div>
      <div className={styles.peopleCell}>
        <div className={styles.peopleContainer}>
          {people.map((person, index) => (
            <div key={index} className={styles.personBadge}>
              {person.initials}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.priorityCell}>{priority}</div>
      <i className="tiTiDots" />
    </article>
  );
};

export default TaskItem;
