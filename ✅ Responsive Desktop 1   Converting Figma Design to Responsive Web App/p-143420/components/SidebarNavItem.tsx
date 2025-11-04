import React from "react";

interface SidebarNavItemProps {
  iconUrl: string;
  label: string;
  badge?: string;
  isActive?: boolean;
  styleClass: string;
  labelClass: string;
  badgeClass?: string;
}

function SidebarNavItem({
  iconUrl,
  label,
  badge,
  styleClass,
  labelClass,
  badgeClass,
}: SidebarNavItemProps) {
  return (
    <div className={styleClass}>
      <img src={iconUrl} alt="" />
      <span className={labelClass}>{label}</span>
      {badge && <span className={badgeClass}>{badge}</span>}
    </div>
  );
}

export default SidebarNavItem;
