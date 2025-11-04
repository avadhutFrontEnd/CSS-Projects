"use client";
import React from "react";
import styles from "./InputDesign.module.css";

interface NavItemProps {
  text: string;
  isActive?: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  text,
  isActive = false,
  className,
}) => {
  if (isActive) {
    return (
      <div className={styles.div9}>
        <div className={styles.div10} />
        <span>{text}</span>
      </div>
    );
  }

  return <div className={className}>{text}</div>;
};

export default NavItem;
