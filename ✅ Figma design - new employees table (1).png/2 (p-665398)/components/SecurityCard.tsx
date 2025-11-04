import React from "react";
import styles from "./InputDesign.module.css";

const SecurityCard: React.FC = () => {
  return (
    <article className={styles.div25}>
      <header className={styles.div26}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c7a92dba83c1081578232487f8f9b8a63a2668e"
          alt="Security"
          className={styles.securityIcon}
        />
        <i className={styles.tiTiX} />
      </header>
      <div className={styles.div27}>
        <h3 className={styles.div28}>Add an extra security to your account.</h3>
        <p className={styles.div29}>
          Add a secondary method of verification used during login.
        </p>
        <button className={styles.button}>Enable 2-step verification</button>
        <button className={styles.button2}>Learn more</button>
      </div>
    </article>
  );
};

export default SecurityCard;
