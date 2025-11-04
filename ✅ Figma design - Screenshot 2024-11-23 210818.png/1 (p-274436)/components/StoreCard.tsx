import React from "react";
import styles from "./StoreCard.module.css";

interface StoreCardProps {
  name: string;
  distance: string;
  openUntil: string;
  logo: string;
  logoText?: string;
  logoSubImg?: string;
  favoriteIcon: string;
  shareIcon: string;
}

function StoreCard({
  name,
  distance,
  openUntil,
  logo,
  logoText,
  logoSubImg,
  favoriteIcon,
  shareIcon,
}: StoreCardProps) {
  return (
    <article className={styles.storeCard}>
      <div className={styles.storeInfo}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.storeLogo} />
          {logoText && <span className={styles.logoText}>{logoText}</span>}
          {logoSubImg && (
            <img src={logoSubImg} className={styles.logoSubImage} />
          )}
        </div>
        <div className={styles.storeDetails}>
          <h2 className={styles.storeName}>{name}</h2>
          <div className={styles.storeMetadata}>
            <span className={styles.storeDistance}>{distance}</span>
            <span className={styles.storeHours}>{openUntil}</span>
          </div>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <button className={styles.iconButton}>
          <img src={favoriteIcon} className={styles.favoriteIcon} />
        </button>
        <button className={styles.iconButton}>
          <img src={shareIcon} className={styles.shareIcon} />
        </button>
      </div>
    </article>
  );
}

export default StoreCard;
