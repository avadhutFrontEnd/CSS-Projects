"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import NavItem from "./NavItem";

const Header: React.FC = () => {
  return (
    <header className={styles.div3}>
      <div className={styles.div4}>
        <h1 className={styles.div5}>TransGlobal</h1>
        <nav className={styles.div6}>
          <NavItem text="Overview" className={styles.div7} />
          <NavItem text="Shipping" className={styles.div8} />
          <NavItem text="Tracking" isActive={true} />
          <NavItem text="Invoices" className={styles.div11} />
          <NavItem text="Analytics" className={styles.div12} />
        </nav>
      </div>
      <div className={styles.div13}>
        <div className={styles.div14}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/778821"
            alt=""
            className="w-[40px] h-[41px] rounded-[20px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/821821"
            alt=""
            className="w-[41px] h-[41px] rounded-[20px]"
          />
        </div>
        <div className={styles.div15}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a793ba9305911479dd5d5939301121a514c2b43d"
            alt=""
            className="w-[39px] h-[40px] rounded-full"
          />
          <div className={styles.div16}>
            <p className={styles.div17}>Anna Green</p>
            <p className={styles.div18}>Account Executive</p>
          </div>
          <div>
            <svg
              className="w-[11px] h-[6px] text-[#424242]"
              viewBox="0 0 11 6"
              fill="none"
            >
              <path
                d="M1 1L5.5 5L10 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
