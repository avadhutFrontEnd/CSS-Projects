"use client";
import React from "react";
import styles from "./StoreList.module.css";
import SearchBar from "./SearchBar";
import FilterControls from "./FilterControls";
import StoreCard from "./StoreCard";

function StoreList() {
  const stores = [
    {
      id: 1,
      name: "Adidas",
      distance: "0.5 mi",
      openUntil: "Open 'til 6pm",
      logo: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dbe8faf16087725cf45459444cdec717cb3730da97b6890523588872b10babde?placeholderIfAbsent=true",
      favoriteIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3682893ce11175fee15d88c758a00636837fdefa558c649fd6edb5c5bb35e845?placeholderIfAbsent=true",
      shareIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/19e436a40ac49fb71b3046e8681ed22612f7a00194585699b1510b5a8a6a4d23?placeholderIfAbsent=true",
    },
    {
      id: 2,
      name: "Nike",
      distance: "0.7 mi",
      openUntil: "Open 'til 6pm",
      logo: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c094f33d52a3f80cbe4187cda738a65d5a91b8ac07a93d060b394f350a19a99b?placeholderIfAbsent=true",
      favoriteIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e2c1ec9d1d377fb0c7a7fff30f0dd3dbf6302ce1baef40aef689ac4047453b3f?placeholderIfAbsent=true",
      shareIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a63b71ba476cb6f33846ece286bac87494f80f2274a1bc0be73d03ac1add20a0?placeholderIfAbsent=true",
    },
    {
      id: 3,
      name: "Puma",
      distance: "0.3mi.",
      openUntil: "Open 'til 6pm",
      logo: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2beee7b845024c84bcfd0c24a109c77bbc994fae843e0e4b665f62a4385a5503?placeholderIfAbsent=true",
      favoriteIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/eb861df44e9581a3e3977412e8b7a3a428f80c24735cada3a350c88559bc13cf?placeholderIfAbsent=true",
      shareIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1d313981e2363b495831dc4b9ab4c2d5b6834760e9bb7ad2fe05b0b962657f46?placeholderIfAbsent=true",
    },
    {
      id: 4,
      name: "Under Armour",
      distance: "0.2 mi .",
      openUntil: "Open 'til 6pm",
      logo: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d1ae2356c108f9aa1851e921b558cc340373b065c42a716020478860e3d88efa?placeholderIfAbsent=true",
      favoriteIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/703b694d1bbc2190ec29df61f35969847503d251c9de65f3fa4c69cbb04ed2b5?placeholderIfAbsent=true",
      shareIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0caeb17d77b6c1456a9ec72e3c545e285525dfdac147feec62d2dd0159157b43?placeholderIfAbsent=true",
    },
    {
      id: 5,
      name: "Timberland",
      distance: "0.4 mi .",
      openUntil: "Open 'til 6pm",
      logo: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ea1096515856b9531a9d5b4d048d118127faeccb3960ad09b9c658d9dfb88399?placeholderIfAbsent=true",
      logoText: "Timberland",
      favoriteIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e2c1ec9d1d377fb0c7a7fff30f0dd3dbf6302ce1baef40aef689ac4047453b3f?placeholderIfAbsent=true",
      shareIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1857fb99d231b47e6f1c8709267639fb99569b9c78551f367aefd33c5429278c?placeholderIfAbsent=true",
    },
    {
      id: 6,
      name: "EA7 Emporio Armani",
      distance: "2.1mi.",
      openUntil: "Open 'til 6pm",
      logo: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8d59c21b674f67c0b7e78c8af70e5b41980beb9eae12fcb68deca13d4df4384e?placeholderIfAbsent=true",
      logoText: "EAT",
      logoSubImg:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f62246a3db6f827c38145f2a38e1fa73289d94a3d2a3e4549cc1688aae72ae9a?placeholderIfAbsent=true",
      favoriteIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a9db9a37a39230c0413401cdfcc936fb73986aff56faae8f91b28cd5a1024aaa?placeholderIfAbsent=true",
      shareIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/442463e1f3d8f3ad67c673fd9ae4695380408706c73ec0dca8664953861e1e27?placeholderIfAbsent=true",
    },
    {
      id: 7,
      name: "Converse",
      distance: "2.5 mi",
      openUntil: "Open 'til 6pm",
      logo: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3f55321410bae10c4267547e5803c17a32ac621faea897792e3906ea12c0bcf6?placeholderIfAbsent=true",
      logoSubImg:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/690cdc316233d184f397805ffc2f127f11373e4b81bf934cbdea30bb4472cc1b?placeholderIfAbsent=true",
      logoText: "CONVERSE",
      favoriteIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6b9eda15fc97fe4661e0959fbfd1065148c27159ae54aac36be91126badc37c4?placeholderIfAbsent=true",
      shareIcon:
        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7f3721e07ed93fd88f6c7a130f35851f5d76d552948469105aa4666c99b6aa19?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className={styles.storeListColumn}>
      <div className={styles.storeListContainer}>
        <div className={styles.headerContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/38b141f9bfdebc7d375ce69a3172b6c2bcb1a30162f6c7f708934f37a7d89102?placeholderIfAbsent=true"
            className={styles.backgroundImage}
          />
          <header className={styles.appHeader}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fcad4be594edb46a60b6c6a37ab58ccc7018e8d96371174e3890c9df292aadaf?placeholderIfAbsent=true"
              className={styles.menuIcon}
            />
            <div className={styles.logoContainer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/429dc8e8b3d00ab466a83534f226d6156aaf9ac29521be19072f0e044c96b13b?placeholderIfAbsent=true"
                className={styles.appLogo}
              />
              <h1 className={styles.appName}>outletbuddy</h1>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/40d7d10b9b2830e96deef9efbdf0dd5291d1e9927b9904a50e718508738bf358?placeholderIfAbsent=true"
              className={styles.notificationIcon}
            />
          </header>

          <SearchBar />
          <FilterControls />
        </div>

        <div className={styles.storesList}>
          {stores.map((store) => (
            <StoreCard
              key={store.id}
              name={store.name}
              distance={store.distance}
              openUntil={store.openUntil}
              logo={store.logo}
              logoText={store.logoText}
              logoSubImg={store.logoSubImg}
              favoriteIcon={store.favoriteIcon}
              shareIcon={store.shareIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoreList;
