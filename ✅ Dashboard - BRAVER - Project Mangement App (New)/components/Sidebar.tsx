"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.div2}>
      <header className={styles.div3}>
        <img
          src="https://placehold.co/40x40/4F46E5/4F46E5"
          alt="Braver"
          className={styles.logo}
        />
        <h1 className={styles.div4}>Braver</h1>
      </header>

      <button className={styles.div5}>
        <span className={styles.div6}>CP</span>
        <div className={styles.div7}>
          <h2 className={styles.div8}>Company Project</h2>
          <p className={styles.div9}>12 Members</p>
        </div>
        <i className={styles.tiTiChevronDown} />
      </button>

      <nav className={styles.div10}>
        <h3 className={styles.div11}>MAIN MENU</h3>
        <ul className={styles.div12}>
          <li>
            <button className={styles.div13}>
              <i className={styles.tiTiHome} />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button className={styles.div14}>
              <i className={styles.tiTiListCheck} />
              <span>My Task</span>
            </button>
          </li>
          <li>
            <button className={styles.div15}>
              <div className={styles.div16}>
                <i className={styles.tiTiInbox} />
                <span>Inbox</span>
              </div>
              <span className={styles.div17}>9</span>
            </button>
          </li>
          <li>
            <button className={styles.div18}>
              <i className={styles.tiTiChartBar} />
              <span>Analyze</span>
            </button>
          </li>
          <li>
            <button className={styles.div19}>
              <i className={styles.tiTiUsers} />
              <span>Members</span>
            </button>
          </li>
          <li>
            <button className={styles.div20}>
              <i className={styles.tiTiSettings} />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </nav>

      <section className={styles.div21}>
        <h3 className={styles.div22}>WORKSPACE</h3>
        <ul className={styles.div23}>
          <li>
            <button className={styles.div24}>Landing Page Company</button>
          </li>
          <li>
            <button className={styles.div25}>Dashboard Rumah Sakit</button>
          </li>
          <li>
            <button className={styles.div26}>Ramadhan App</button>
          </li>
          <li>
            <button className={styles.div27}>Real Estate Agency</button>
          </li>
        </ul>
      </section>

      <button className={styles.div28}>
        <i className={styles.tiTiPlus} />
        <span>Add New Project</span>
      </button>

      <footer className={styles.div29}>
        <img
          src="https://placehold.co/32x32/6B7280/6B7280"
          alt="User"
          className={styles.userAvatar}
        />
        <h3 className={styles.div30}>Ibrahim Ahmad</h3>
        <i className={styles.tiTiDotsVertical} />
      </footer>
    </aside>
  );
};

export default Sidebar;
