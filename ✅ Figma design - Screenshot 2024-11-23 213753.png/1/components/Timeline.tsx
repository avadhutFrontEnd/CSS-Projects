"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const Timeline = () => {
  return (
    <section className={styles.div50}>
      <header className={styles.div51}>
        <h3 className={styles.div52}>Timeline</h3>
        <div className={styles.div53}>
          <span>updated 5 min ago</span>
          <button className={styles.div54}>Refresh</button>
        </div>
      </header>

      <div className={styles.div55}>
        <div className={styles.div56}>
          <time>06:00</time>
          <time>08:00</time>
          <time>10:00</time>
          <time>12:00</time>
          <time>14:00</time>
          <time>16:00</time>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9bce0cda568aa67cd63fa9de7e5f162882a2f0d"
          alt="Timeline Chart"
          className={styles.chartImg}
        />
      </div>

      <ul className={styles.div57}>
        <li className={styles.div58}>
          <div className={styles.div59}>
            <p className={styles.div60}>Now</p>
            <time>18:05</time>
          </div>
          <div className={styles.div61}>
            <h4 className={styles.div62}>Driving</h4>
            <address className={styles.div63}>
              Lievardes lauku teritorija, LV-5070, Singapore
            </address>
          </div>
          <div className={styles.div64}>
            <span className={styles.div65}>55 km/h</span>
            <span className={styles.div66}>50 min</span>
            <span className={styles.div67}>48 km</span>
          </div>
        </li>

        <li className={styles.div68}>
          <time className={styles.div69}>17:48</time>
          <div className={styles.div70}>
            <h4 className={styles.div71}>Started Driving</h4>
            <address className={styles.div72}>
              Shinjiku lauku teritorija, LV-1270, Singapore
            </address>
          </div>
        </li>

        <li className={styles.div73}>
          <time className={styles.div74}>17:32</time>
          <div className={styles.div75}>
            <h4 className={styles.div76}>Stopped</h4>
            <address className={styles.div77}>
              Orchard fiev, LV-5034, Singapore
            </address>
          </div>
        </li>

        <li className={styles.div78}>
          <time className={styles.div79}>17:12</time>
          <div className={styles.div80}>
            <h4 className={styles.div81}>Driving</h4>
            <address className={styles.div82}>
              Sofia Garden teritorija, LV-8470, Singapore
            </address>
          </div>
        </li>

        <li className={styles.div83}>
          <time className={styles.div84}>17:05</time>
          <h4 className={styles.div85}>Started Driving</h4>
        </li>
      </ul>
    </section>
  );
};

export default Timeline;
