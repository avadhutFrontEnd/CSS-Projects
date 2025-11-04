import React from "react";
import styles from "./InputDesign.module.css";

const UserProfile: React.FC = () => {
  return (
    <section className={styles.background2}>
      <div className={styles.groups}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b79a49cb2fe75c65fe8a4f30c94e96779782a44f9ce9c5e0355904f573a8a5c9?placeholderIfAbsent=true"
          className={styles.img3}
          alt="User avatar"
        />
        <div className={styles.userInfo}>
          <h3 className={styles.manageko}>Manageko.</h3>
          <p className={styles.managmailcom}>manag@mail.com</p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
