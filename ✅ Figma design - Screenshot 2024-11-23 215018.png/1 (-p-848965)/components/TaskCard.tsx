import React from "react";
import styles from "./TaskCard.module.css";
import StatusBadge from "./StatusBadge";

interface TaskCardProps {
  title: string;
  assignee: string;
  dueDate: string;
  priority: "urgent" | "normal" | "low";
  progress: number;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  assignee,
  dueDate,
  priority,
  progress,
}) => {
  const getProgressColor = () => {
    if (priority === "urgent") return "#f9a9a6";
    if (priority === "normal") return "#93d6d6";
    return "#b97fe6"; // low
  };

  return (
    <article className={styles.taskCard}>
      <div className={styles.mainInfo}>
        <div className={styles.assigneeWrapper}>
          <div className={styles.assigneeBadge}>{assignee}</div>
          <time className={styles.dueDate}>{dueDate}</time>
          <StatusBadge
            type={priority}
            icon={
              priority === "urgent"
                ? "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/009e1f508f3280fbed18aabfd574f47531b8321e55d7faa84a8845be142aeb6b?placeholderIfAbsent=true"
                : priority === "normal"
                ? "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9636d7aa3f8ca154553992b20e84622beab192c28b6bbeae1065c2ec0ce40d0f?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/deca06ec3681ca9f8a9a78d7bbf208d6f99fdec4cef15ca886544c11aac0580e?placeholderIfAbsent=true"
            }
            label={priority.charAt(0).toUpperCase() + priority.slice(1)}
          />
        </div>

        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                width: `${progress}%`,
                backgroundColor: getProgressColor(),
              }}
            />
          </div>
          <span className={styles.progressText}>{progress}%</span>
        </div>

        <div className={styles.actionsWrapper}>
          <div className={styles.actionButtons}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2b3d0e84b541c744a2420b15eae19605ed6d2402aa6af0995d18b5a5a9a93932?placeholderIfAbsent=true"
              className={styles.actionIcon}
              alt="Action"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c85a508519d0061f5a0a712df8f285827978f4848ed0af82441f1d477952e7db?placeholderIfAbsent=true"
              className={styles.actionDot}
              alt=""
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/86ea49f5c91dfa8e62d8164b926ab69eccb7f0a39e0bbfa48ab916679b1732e3?placeholderIfAbsent=true"
            className={styles.actionArrow}
            alt=""
          />
        </div>
      </div>

      <div className={styles.taskDetails}>
        <h3 className={styles.taskTitle}>{title}</h3>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/957bc743c6461a1e8b0d6092a00f3f0ad6a5b78b101bf07b15d180cdab2735d1?placeholderIfAbsent=true"
          className={styles.detailsIcon}
          alt=""
        />
        <time className={styles.detailsDate}>{dueDate}</time>
        <StatusBadge
          type={priority}
          icon={
            priority === "urgent"
              ? "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4fc6985f6a379dac9c69d5c1621ddbbe6d615784c8b9665bc12054a26571bb81?placeholderIfAbsent=true"
              : priority === "normal"
              ? "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9636d7aa3f8ca154553992b20e84622beab192c28b6bbeae1065c2ec0ce40d0f?placeholderIfAbsent=true"
              : "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/deca06ec3681ca9f8a9a78d7bbf208d6f99fdec4cef15ca886544c11aac0580e?placeholderIfAbsent=true"
          }
          label={priority.charAt(0).toUpperCase() + priority.slice(1)}
          small
        />
      </div>
    </article>
  );
};

export default TaskCard;
