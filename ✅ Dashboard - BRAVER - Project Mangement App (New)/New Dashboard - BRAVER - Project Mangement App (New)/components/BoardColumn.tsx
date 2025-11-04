import React from "react";
import styles from "./Dashboard.module.css";

interface BoardColumnProps {
  title: string;
  count: number;
  color: string;
}

const BoardColumn: React.FC<BoardColumnProps> = ({ title, count, color }) => {
  const getColumnStyles = () => {
    if (title === "TODO") return styles.div9;
    if (title === "IN WORK") return styles.div14;
    if (title === "QA") return styles.div19;
    return styles.div24;
  };

  const getTitleStyles = () => {
    if (title === "TODO") return styles.div11;
    if (title === "IN WORK") return styles.div16;
    if (title === "QA") return styles.div21;
    return styles.div26;
  };

  const getTextStyles = () => {
    if (title === "TODO") return styles.todo;
    if (title === "IN WORK") return styles.inwork;
    if (title === "QA") return styles.qa;
    return styles.completed;
  };

  const getCountStyles = () => {
    if (title === "TODO") return styles.css2;
    if (title === "IN WORK") return styles.css4;
    if (title === "QA") return styles.css8;
    return styles.css3;
  };

  const getActionStyles = () => {
    if (title === "TODO") return styles.div12;
    if (title === "IN WORK") return styles.div17;
    if (title === "QA") return styles.div22;
    return styles.div27;
  };

  return (
    <div className={getColumnStyles()}>
      <div className={title === "QA" ? styles.div20 : styles.div10}>
        <div className={getTitleStyles()}>
          <h3 className={getTextStyles()}>{title}</h3>
          <div className={getCountStyles()}>{count}</div>
        </div>
        <div className={getActionStyles()}>
          <img
            src={
              title === "COMPLETED"
                ? "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9be3955d0707c9b5fbee4b055314ecff49b25da9730a85a7c2a5f1a5a024e191?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ed36e6bc996919345738c79995c22fa4a75c039c060ee2ae0aaffea2d16db503?placeholderIfAbsent=true"
            }
            alt="Add"
            className={styles.img16}
          />
        </div>
      </div>
      <div className={color} />
    </div>
  );
};

export default BoardColumn;
