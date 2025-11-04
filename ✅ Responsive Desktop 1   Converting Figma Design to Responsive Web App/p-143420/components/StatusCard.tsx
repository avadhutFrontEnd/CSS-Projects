import React from "react";

interface StatusCardProps {
  iconUrl: string;
  title: string;
  amount?: string;
  containerClass: string;
  iconContainerClass: string;
  titleClass: string;
  amountClass?: string;
}

function StatusCard({
  iconUrl,
  title,
  amount,
  containerClass,
  iconContainerClass,
  titleClass,
  amountClass,
}: StatusCardProps) {
  return (
    <article className={containerClass}>
      <div className={iconContainerClass}>
        <img src={iconUrl} alt={title} />
        <span className={titleClass}>{title}</span>
      </div>
      {amount && <span className={amountClass}>{amount}</span>}
    </article>
  );
}

export default StatusCard;
