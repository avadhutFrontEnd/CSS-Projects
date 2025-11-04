import React from "react";
import styles from "./Dashboard.module.css";

interface TaskCardProps {
  title: string;
  description?: string;
  image?: string;
  images?: string[];
  tag: string;
  tagColor: "blue" | "orange" | "green" | "purple";
  avatar: string;
  comments?: number;
  files?: number;
  dueDate?: string;
  inProgress?: number;
  isDone?: boolean;
  isSquare?: boolean;
  isSecondary?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  image,
  images,
  tag,
  tagColor,
  avatar,
  comments,
  files,
  dueDate,
  inProgress,
  isDone,
  isSquare = false,
  isSecondary = false,
}) => {
  const getTagStyle = () => {
    switch (tagColor) {
      case "blue":
        return styles.development;
      case "orange":
        return styles.uxWriting;
      case "green":
        return styles.planning;
      case "purple":
        return styles.research;
      default:
        return styles.development;
    }
  };

  const getTagContainerStyle = () => {
    switch (tagColor) {
      case "blue":
        return styles.div35;
      case "orange":
        return styles.div56;
      case "green":
        return styles.div93;
      case "purple":
        return styles.div102;
      default:
        return styles.div35;
    }
  };

  const getCardContainerStyle = () => {
    if (isSquare) {
      return isSecondary ? styles.div82 : styles.div42;
    }
    return isSecondary ? styles.div61 : styles.div33;
  };

  const getCardStyle = () => {
    if (isSquare) {
      return isSecondary ? styles.div83 : styles.div43;
    }
    return isSecondary ? styles.div62 : styles.div34;
  };

  const getFooterStyle = () => {
    switch (tagColor) {
      case "blue":
        return styles.div36;
      case "orange":
        return styles.div57;
      case "green":
        return styles.div94;
      case "purple":
        return styles.div103;
      default:
        return styles.div36;
    }
  };

  return (
    <article className={getCardContainerStyle()}>
      <div className={getCardStyle()}>
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
          {image && <img src={image} alt={title} className={styles.img36} />}
          {images && (
            <div className={styles.div46}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${title} ${index + 1}`}
                  className={styles.img24}
                />
              ))}
            </div>
          )}
        </div>

        <div className={getTagContainerStyle()}>
          <div className={getTagStyle()}>{tag}</div>
          <img src={avatar} alt="Assignee" className={styles.img20} />
        </div>

        <div className={getFooterStyle()}>
          <div className={styles.div37}>
            {comments && (
              <div className={styles.div38}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c2731703e43b4d2ef3906743abdedbabaee4a260e9220ce41bddff7f52361313?placeholderIfAbsent=true"
                  alt="Comments"
                  className={styles.img21}
                />
                <div className={styles.css82}>{comments}</div>
              </div>
            )}
            {files && (
              <div className={styles.div39}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cf76e5c6254e9aee224c70d5dbe73cf1dc738493939c5a1431dfd81ff3a5de27?placeholderIfAbsent=true"
                  alt="Files"
                  className={styles.img22}
                />
                <div className={styles.css32}>{files}</div>
              </div>
            )}
          </div>

          {dueDate && (
            <div className={styles.div40}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4881159770899025ebcc241c23b1bc1783fe5f42b9940685fbd9f43c9730de23?placeholderIfAbsent=true"
                alt="Due date"
                className={styles.img23}
              />
              <div className={styles.tomorrow}>{dueDate}</div>
            </div>
          )}

          {inProgress && (
            <div className={styles.div81}>
              <div className={styles.css24}>{inProgress}</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/139e2695929d3903a35ad69980cb5a08f55a663f4979e5dfe7042a337fc3b3ba?placeholderIfAbsent=true"
                alt="In progress"
                className={styles.img40}
              />
            </div>
          )}

          {isDone && (
            <div className={styles.div98}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7c4788bd401e2f172bf47ac62ddd7da6da9f2fccb73aacfe2cbf3d0bf98ce8b9?placeholderIfAbsent=true"
                alt="Done"
                className={styles.img48}
              />
              <div className={styles.done}>Done</div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
