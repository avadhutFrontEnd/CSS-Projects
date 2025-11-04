import React from "react";
import styles from "./Dashboard.module.css";

interface MenuItem {
  text: string;
  icon: string;
  active?: boolean;
  notificationCount?: number;
  isDropdown?: boolean;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  isWorkspace?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  items,
  isWorkspace = false,
}) => {
  return (
    <nav className={isWorkspace ? styles.sections2 : styles.sections}>
      <div
        className={
          isWorkspace
            ? styles.sidemenusectioninteraction2
            : styles.sidemenusectioninteraction
        }
      >
        <h3 className={styles.text}>{title}</h3>
        <div className={styles.iconplaceholder} />
      </div>

      {items.map((item, index) => {
        if (isWorkspace && item.isDropdown) {
          return (
            <div key={index} className={styles.sidemenudropdown}>
              <img src={item.icon} alt="" className={styles.img8} />
              <span className={styles.text}>{item.text}</span>
            </div>
          );
        }

        if (item.active) {
          return (
            <div key={index} className={styles.sidemenusection}>
              <img src={item.icon} alt="" className={styles.img2} />
              <span className={styles.text2}>{item.text}</span>
              <div className={styles.div5} />
            </div>
          );
        }

        if (item.notificationCount) {
          return (
            <div key={index} className={styles.sidemenusection3}>
              <img src={item.icon} alt="" className={styles.img4} />
              <span className={styles.text3}>{item.text}</span>
              <div className={styles.notificationCounter}>
                {item.notificationCount}
              </div>
            </div>
          );
        }

        return (
          <div key={index} className={styles.sidemenusection2}>
            <img src={item.icon} alt="" className={styles.img3} />
            <span className={styles.text}>{item.text}</span>
          </div>
        );
      })}
    </nav>
  );
};

export default MenuSection;
