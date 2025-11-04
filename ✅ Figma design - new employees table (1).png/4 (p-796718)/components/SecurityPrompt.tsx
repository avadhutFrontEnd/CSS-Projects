import React from "react";
import styles from "./InputDesign.module.css";

const SecurityPrompt: React.FC = () => {
  return (
    <section className={styles.groups14}>
      <div className={styles.background6}>
        <div className={styles.securityHeader}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6f13f07f845a73b46a4421133bddf1d463e18af4f6454fbc5c788f526b571b36?placeholderIfAbsent=true"
            className={styles.img16}
            alt="Security icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/30b087c305e6c06ecc881bac4ce04a710d5d580435fb73ae2bc74a0f00a81f31?placeholderIfAbsent=true"
            className={styles.img17}
            alt="Options"
          />
        </div>

        <h3 className={styles.addanextrasec}>
          Add an extra security to
          <br />
          your account.
        </h3>

        <p className={styles.addasecondary}>
          Add a secondary method of verification
          <br />
          used during login.
        </p>

        <button className={styles.button4}>
          <span className={styles.background7}>Enable 2-step verification</span>
        </button>

        <button className={styles.button5}>
          <span className={styles.background8}>Learn more</span>
        </button>
      </div>
    </section>
  );
};

export default SecurityPrompt;
