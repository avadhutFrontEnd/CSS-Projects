import React from "react";
import styles from "./AbsenceTableRow.module.css";
import StatusBadge from "./StatusBadge";

interface AbsenceTableRowProps {
  duration: string;
  days: string;
  type: string;
  typeClass: string;
  typeIconSrc: string;
  status: string;
  statusClass?: string;
  paid: string;
  hasMenu?: boolean;
  onMenuClick?: () => void;
  menuIconSrc?: string;
}

const AbsenceTableRow: React.FC<AbsenceTableRowProps> = ({
  duration,
  days,
  type,
  typeClass,
  typeIconSrc,
  status,
  statusClass,
  paid,
  hasMenu = false,
  onMenuClick,
  menuIconSrc,
}) => {
  return (
    <div className={styles.tableRow}>
      <div className={styles.durationCell}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/48f8ac13eb472eab38dd44140169d95c3e49eee74726a6e5315e63ebda2b8cdf?placeholderIfAbsent=true"
          className={styles.durationIcon}
          alt="Calendar icon"
        />
        <span className={styles.durationText}>{duration}</span>
      </div>
      <div className={styles.daysCell}>{days}</div>
      <div className={`${styles.typeCell} ${typeClass}`}>
        <img
          src={typeIconSrc}
          className={styles.typeIcon}
          alt={`${type} icon`}
        />
        <span className={styles.typeText}>{type}</span>
      </div>
      <StatusBadge status={status} customClass={statusClass} />
      <div className={styles.paidCell}>
        {hasMenu ? (
          <div className={styles.paidWithMenu}>
            <span className={styles.paidText}>{paid}</span>
            <img
              src={menuIconSrc}
              className={styles.menuIcon}
              alt="Menu"
              onClick={onMenuClick}
            />
          </div>
        ) : (
          <span className={styles.paidText}>{paid}</span>
        )}
      </div>
    </div>
  );
};

export default AbsenceTableRow;
