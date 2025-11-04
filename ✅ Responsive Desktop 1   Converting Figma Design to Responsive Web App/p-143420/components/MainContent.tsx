"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import StatusCard from "./StatusCard";

function MainContent() {
  return (
    <section className={styles.div32}>
      <Header />
      <SearchBar />

      <div className={styles.div38}>
        <StatusCard
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8c71d533eafd115fdcd0ce70e710664300627269"
          title="Pending"
          amount="$980.00"
          iconContainerClass={styles.div40}
          titleClass={styles.span5}
          amountClass={styles.span6}
          containerClass={styles.div39}
        />

        <StatusCard
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cfa04a69128d0e3e5bf030bb0f0fc78f2672298a"
          title="In progress"
          amount="$25,017.00"
          iconContainerClass={styles.div42}
          titleClass={styles.span7}
          amountClass={styles.span8}
          containerClass={styles.div41}
        />

        <StatusCard
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b13a62df3355c2d80ff9466819f327dea006a214"
          title="Successful"
          amount="$12,327.00"
          iconContainerClass={styles.div44}
          titleClass={styles.span9}
          amountClass={styles.span10}
          containerClass={styles.div43}
        />

        <StatusCard
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4969a8b32ac5df13f83340400bfd69b262688"
          title="Declined"
          amount=""
          iconContainerClass={styles.div46}
          titleClass={styles.span11}
          containerClass={styles.div45}
        />
      </div>
    </section>
  );
}

export default MainContent;
