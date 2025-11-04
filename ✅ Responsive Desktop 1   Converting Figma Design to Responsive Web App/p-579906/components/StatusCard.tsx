import React from "react";
import styles from "./Root.module.css";

interface StatusCardProps {
  icon: string;
  status: string;
  amount: string;
  className: string;
  backgroundClassName: string;
  statusClassName: string;
  amountClassName: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({
  icon,
  status,
  amount,
  className,
  backgroundClassName,
  statusClassName,
  amountClassName,
}) => {
  return (
    <article className={className}>
      <div className={backgroundClassName}>
        <div className={statusClassName}>
          <img
            src={icon}
            className={styles.img11}
            alt={`${status} status icon`}
          />
          <p>{status}</p>
        </div>
        {amount && <p className={amountClassName}>{amount}</p>}
      </div>
    </article>
  );
};
