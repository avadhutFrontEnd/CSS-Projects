"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import { Task } from "./TaskData";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <article className={task.cardClass}>
      <h3 className={task.titleClass}>{task.title}</h3>

      {task.description && (
        <p className={task.descriptionClass}>{task.description}</p>
      )}

      {task.image && (
        <div className={task.imageContainerClass}>
          <img
            src={task.image}
            alt={task.imageAlt || task.title}
            className={task.imageClass}
          />
        </div>
      )}

      {task.tag && <span className={task.tagClass}>{task.tag}</span>}

      {task.members && (
        <div className={task.membersContainerClass}>
          {task.members.map((member, index) => (
            <img
              key={index}
              src={member}
              alt="Member"
              className={styles.taskMember}
            />
          ))}
          {task.extraMembers && (
            <span className={styles.span}>+{task.extraMembers}</span>
          )}
        </div>
      )}

      <footer className={task.footerClass}>
        {task.comments !== undefined && (
          <>
            <i className={styles.tiTiMessage} />
            <span>{task.comments}</span>
          </>
        )}

        {task.attachments !== undefined && (
          <>
            <i className={styles.tiTiPaperclip} />
            <span>{task.attachments}</span>
          </>
        )}

        {task.dueDate && (
          <div className={task.dueDateClass}>{task.dueDate}</div>
        )}

        {task.likes && <div className={task.likesClass}>{task.likes} 👍</div>}

        {task.status && <div className={task.statusClass}>{task.status}</div>}
      </footer>
    </article>
  );
};

export default TaskCard;
