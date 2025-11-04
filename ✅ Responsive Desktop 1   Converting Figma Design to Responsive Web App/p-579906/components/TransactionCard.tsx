import React from "react";
import styles from "./Root.module.css";

interface TransactionCardProps {
  company: string;
  amount: string;
  description: string;
  paymentType: string;
  paymentIcon: string;
  user: string;
  userIcon: string;
  date: string;
  backgroundClassName: string;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  company,
  amount,
  description,
  paymentType,
  paymentIcon,
  user,
  userIcon,
  date,
  backgroundClassName,
}) => {
  return (
    <article className={styles.groups2}>
      <div className={backgroundClassName}>
        <div className={styles.div18}>
          <div className={styles.div19}>
            <h3 className={styles.figma}>{company}</h3>
            <p className={styles.css11200}>{amount}</p>
          </div>
          {paymentType && paymentIcon && (
            <div className={styles.div20}>
              <img
                src={paymentIcon}
                className={styles.img15}
                alt="Payment type icon"
              />
              <p className={styles.annualy}>{paymentType}</p>
            </div>
          )}
        </div>
        <p className={styles.paidforacorpo}>{description}</p>
        <div className={styles.div21}>
          <div className={styles.div22}>
            <img src={userIcon} className={styles.img16} alt="User avatar" />
            <p className={styles.carlJones}>{user}</p>
          </div>
          {date && <p className={styles.dec1832}>{date}</p>}
        </div>
      </div>
    </article>
  );
};
