"use client";
import React from "react";
import styles from "./FigmaDesignNewEmployeesTable1Png.module.css";

interface TaskCardProps {
  title: string;
  description?: string;
  date: string;
  type: string;
  priority?: string;
  typeColor: "purple" | "orange" | "blue";
  priorityColor?: "orange" | "blue";
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  date,
  type,
  priority,
  typeColor,
  priorityColor,
}) => {
  // Helper function to get the right background style class based on type color
  const getTypeBackgroundClass = () => {
    switch (typeColor) {
      case "purple":
        return styles.background18; // Dashboard purple
      case "orange":
        return styles.background20; // Mobile App orange
      case "blue":
        return styles.background21; // Blue
      default:
        return styles.background18;
    }
  };

  // Helper function to get the right background style class based on priority color
  const getPriorityBackgroundClass = () => {
    switch (priorityColor) {
      case "orange":
        return styles.background19; // Medium orange
      case "blue":
        return styles.background21; // Low blue
      default:
        return styles.background19;
    }
  };

  return (
    <div className={styles.div51}>
      <h3 className={styles.employeeDetails}>{title}</h3>
      {description && (
        <p className={styles.createapagewh}>
          {description.split("<br />").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < description.split("<br />").length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      )}
      <div className={styles.div52}>
        <div className={styles.groups18}>{date}</div>
        <div className={styles.groups19}>
          <div className={styles.button11}>
            <div className={getTypeBackgr()}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/80255f2c0929adc23f154887998fee31079a255ed98f9cf4b08163b8a2935184?placeholderIfAbsent=true"
                className={styles.img53}
                alt="Icon"
              />
              <span>{type}</span>
            </div>
          </div>
        </div>
        {priority && (
          <>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/59eb01aae1aeda67ee123de7a87998ff56aeb1e6b43a4944197ec23abc2e39fc?placeholderIfAbsent=true"
              className={styles.img54}
              alt="Divider"
            />
            <div className={styles.groups20}>
              <div className={styles.button12}>
                <div className={getPriorityBackgroundClass()}>{priority}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
