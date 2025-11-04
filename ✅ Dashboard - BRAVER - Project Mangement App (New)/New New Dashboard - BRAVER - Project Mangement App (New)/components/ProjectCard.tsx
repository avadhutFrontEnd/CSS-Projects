import React from "react";
import styles from "./Dashboard.module.css";

interface ProjectCardProps {
  title: string;
  description?: string;
  tag: string;
  tagColor: string;
  avatarSrc: string;
  commentCount?: number;
  fileCount?: number;
  dueDate?: string;
  daysLeft?: number;
  status?: string;
  statusColor?: string;
  isHighlighted?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tag,
  tagColor,
  avatarSrc,
  commentCount,
  fileCount,
  dueDate,
  daysLeft,
  status,
  statusColor,
  isHighlighted = false,
}) => {
  return (
    <article className={styles.div33}>
      <div className={styles.div34}>
        <div>
          <h3 className={styles.slackIntegration}>{title}</h3>
          {description && (
            <p
              className={
                styles.addafieldintheportaltolettheuserconnecttheirSlackaccount
              }
            >
              {description}
            </p>
          )}
        </div>
        <div className={styles.div35}>
          <div className={tagColor}>{tag}</div>
          <img src={avatarSrc} alt="Assignee" className={styles.img20} />
        </div>
        <div className={styles.div36}>
          <div className={styles.div37}>
            {commentCount !== undefined && (
              <div className={styles.div38}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c2731703e43b4d2ef3906743abdedbabaee4a260e9220ce41bddff7f52361313?placeholderIfAbsent=true"
                  alt="Comment icon"
                  className={styles.img21}
                />
                <span className={styles.css82}>{commentCount}</span>
              </div>
            )}
            {fileCount !== undefined && (
              <div className={styles.div39}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cf76e5c6254e9aee224c70d5dbe73cf1dc738493939c5a1431dfd81ff3a5de27?placeholderIfAbsent=true"
                  alt="File icon"
                  className={styles.img22}
                />
                <span className={styles.css32}>{fileCount}</span>
              </div>
            )}
          </div>

          {dueDate && (
            <div className={styles.div40}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4881159770899025ebcc241c23b1bc1783fe5f42b9940685fbd9f43c9730de23?placeholderIfAbsent=true"
                alt="Calendar icon"
                className={styles.img23}
              />
              <span className={styles.tomorrow}>{dueDate}</span>
            </div>
          )}

          {daysLeft !== undefined && (
            <div className={isHighlighted ? styles.div89 : styles.div40}>
              <span className={isHighlighted ? styles.css10 : styles.tomorrow}>
                {daysLeft}
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6ba0b4934fe9385e72f77ba5e2591d296c8b80f3aa4dedddbc23114065ac46e5?placeholderIfAbsent=true"
                alt="Days left icon"
                className={styles.img40}
              />
            </div>
          )}

          {status && (
            <div style={{ color: statusColor }} className={styles.div98}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7c4788bd401e2f172bf47ac62ddd7da6da9f2fccb73aacfe2cbf3d0bf98ce8b9?placeholderIfAbsent=true"
                alt="Status icon"
                className={styles.img48}
              />
              <span className={styles.done}>{status}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
