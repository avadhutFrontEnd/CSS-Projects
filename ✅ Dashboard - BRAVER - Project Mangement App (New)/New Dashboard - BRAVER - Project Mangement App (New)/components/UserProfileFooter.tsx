import React from "react";
import styles from "./Dashboard.module.css";

const UserProfileFooter: React.FC = () => {
  return (
    <div className={styles.sidemenusection7}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a6c508ccb2d5d3202a54b901a41af61c618c9f38f2d62c8cc1c0d38218342307?placeholderIfAbsent=true"
        alt="User avatar"
        className={styles.img13}
      />
      <span className={styles.name}>Ibrahim Ahmad</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/324ed7b0a75549a7080aa25f4ec87c40d7cdb028eb74251159cdfcfa13bf1be6?placeholderIfAbsent=true"
        alt="Menu"
        className={styles.img}
      />
    </div>
  );
};

export default UserProfileFooter;
