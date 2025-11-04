import React from "react";
import styles from "./NotificationToast.module.css";

interface NotificationToastProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

const NotificationToast: React.FC<NotificationToastProps> = ({
  message,
  type,
}) => {
  return (
    <footer className={styles.toastContainer}>
      <div className={styles.toastContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/700e671194841948435348108a03666db68407db2d1e444ad87e26d80e15b291?placeholderIfAbsent=true"
          className={styles.toastBackground}
          alt="Background"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5c45ce13a9bd6f8525241a8a66d67106aa757f7149185f9546d26fea689b3eaa?placeholderIfAbsent=true"
          className={styles.toastDivider}
          alt="Divider"
        />
        <div className={styles.toastMessage}>
          <div className={styles.toastInfo}>
            <div className={`${styles.toastType} ${styles[type]}`}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/992d92d8b9a9967d69b93ae70187984d33a2e3af0afc0fd1e1d4d284fbfa7726?placeholderIfAbsent=true"
                className={styles.toastTypeIcon}
                alt={`${type} icon`}
              />
              <span className={styles.toastTypeText}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </div>
            <span className={styles.toastText}>{message}</span>
          </div>
          <div className={styles.toastActions}>
            <button className={styles.toastAction}>Undo action</button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/582d32e8b7465cb3197dd8f3b3df363e45b52bfe46dd24991cc30fe68c75b02e?placeholderIfAbsent=true"
              className={styles.actionIcon}
              alt="Undo icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1ccf8e2f543a7815cb578cfc2740b5edef78bf4553fc8c0e99ae9eac2fed5c81?placeholderIfAbsent=true"
              className={styles.actionDivider}
              alt="Divider"
            />
            <button className={styles.toastAction}>Close</button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1a545ea92574d819ce12786f0c1923adfea64f16caa8793a47eeb85e458f1a6e?placeholderIfAbsent=true"
              className={styles.closeIcon}
              alt="Close icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NotificationToast;
