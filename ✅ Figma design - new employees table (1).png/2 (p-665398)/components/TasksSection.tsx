import React from "react";
import styles from "./InputDesign.module.css";

const TasksSection: React.FC = () => {
  return (
    <section>
      <article className={styles.div45}>
        <header className={styles.div46}>
          <i className={styles.tiTiChevronDown} />
          <span>To-do</span>
          <div className={styles.div47}>3</div>
        </header>
        <div className={styles.div48}>
          <div className={styles.div49}>
            <div />
            <div>
              <i className={styles.tiTiFile} />
              <span>Task Name</span>
            </div>
            <div>
              <i className={styles.tiTiFileDescription} />
              <span>Description</span>
            </div>
            <div>
              <i className={styles.tiTiClock} />
              <span>Estimation</span>
            </div>
            <div>
              <i className={styles.tiTiTag} />
              <span>Type</span>
            </div>
            <div>
              <i className={styles.tiTiUsers} />
              <span>People</span>
            </div>
            <div>
              <i className={styles.tiTiFlag} />
              <span>Priority</span>
            </div>
          </div>

          {/* Task items would be rendered here */}
          <TaskItem
            name="Design System"
            description="Create a design system for the project"
            estimation="2 days"
            type="Design"
            priority="High"
          />
          <TaskItem
            name="Frontend Development"
            description="Implement the UI components"
            estimation="5 days"
            type="Development"
            priority="Medium"
          />
          <TaskItem
            name="API Integration"
            description="Connect frontend with backend APIs"
            estimation="3 days"
            type="Integration"
            priority="High"
          />
        </div>
      </article>
    </section>
  );
};

// This would typically be in its own file, but including here for completeness
interface TaskItemProps {
  name: string;
  description: string;
  estimation: string;
  type: string;
  priority: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  name,
  description,
  estimation,
  type,
  priority,
}) => {
  return (
    <div className={styles.div49}>
      <div>
        <input type="checkbox" />
      </div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{estimation}</div>
      <div>{type}</div>
      <div>
        <div className={styles.div37}>AL</div>
      </div>
      <div>{priority}</div>
      <div>
        <i className={styles.tiTiDots} />
      </div>
    </div>
  );
};

export default TasksSection;
