"use client";
import React from "react";
import styles from "./StoreDetail.module.css";

function StoreDetail() {
  return (
    <section className={styles.storeDetailColumn}>
      <div className={styles.storeDetailContainer}>
        <div className={styles.mapContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/720bb165eadac9f369f34059ad0cdbc395a1b0c0a561a7800641c45af01e828e?placeholderIfAbsent=true"
            className={styles.mapImage}
          />

          <div className={styles.mapControls}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b335b5162fb620ef76a69f5a94f886869fdf6c80d41ccdb50f10fad2be01d1a0?placeholderIfAbsent=true"
              className={styles.mapControlIcon}
            />
            <button className={styles.mapButton}>
              <div className={styles.mapButtonBackground}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/542bf0dbf66a1177953b13dddd935b4fb28ae3cd3d3d178552f8b17c066a3ec4?placeholderIfAbsent=true"
                  className={styles.mapButtonIcon}
                />
                <span className={styles.mapButtonText}>15</span>
              </div>
            </button>
          </div>

          <div className={styles.storeMarkers}>
            <div className={styles.storeMarker}>
              <div className={styles.markerContainer}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/05fefea1c51003ad1c7d31e58d9b7e64caef25a4279b53297c9ac3eb23f16678?placeholderIfAbsent=true"
                  className={styles.markerImage}
                />
                <span className={styles.markerText}>adidas</span>
              </div>
              <button className={styles.markerButton}>
                <div className={styles.markerButtonBackground}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5ba43c5e552ce14e33ec40948ba6704fccb1b57943c053ac5ded94cd18b25773?placeholderIfAbsent=true"
                    className={styles.markerButtonIcon}
                  />
                  <span className={styles.markerButtonText}>100</span>
                </div>
              </button>
            </div>

            <div className={styles.storeDetailCard}>
              <div className={styles.cardBackground}>
                <div className={styles.cardHeader}>
                  <div className={styles.logoContainer}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8e5042fbcd78d398fe2d4966c2be7db36826d81278466df4b2c31cdd4fd7a1ef?placeholderIfAbsent=true"
                      className={styles.storeLogo}
                    />
                    <span className={styles.logoText}>adidas</span>
                  </div>
                  <div className={styles.storeInfo}>
                    <h2 className={styles.storeName}>Adidas</h2>
                    <div className={styles.storeMetadata}>
                      <span className={styles.storeDistance}>0.5 mi</span>
                      <span className={styles.storeHours}>Open 'til 6pm</span>
                    </div>
                  </div>
                </div>

                <div className={styles.storeStats}>
                  <div className={styles.statItem}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b82033b3e2f528b0545b5c1716164ee2a755884e691bf2eb495fa9b738d256f2?placeholderIfAbsent=true"
                      className={styles.statIcon}
                    />
                    <span className={styles.statValue}>100</span>
                  </div>
                  <div className={styles.statItem}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7c5bf3dec1581e732cf609d0b697a6244bcc191ed3d097d87870f136ec5f6150?placeholderIfAbsent=true"
                      className={styles.statIcon}
                    />
                    <span className={styles.statHours}>Open 'til 6pm</span>
                  </div>
                  <div className={styles.statItem}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/419f5993441fa13d60982c9a146d9ba349fc9be7c586ab7bd469e341a7a4f60f?placeholderIfAbsent=true"
                      className={styles.statIcon}
                    />
                    <span className={styles.statPrice}>$$5$$</span>
                  </div>
                </div>

                <h3 className={styles.storeTagline}>
                  The largest Adidas store in the city
                </h3>

                <p className={styles.storeDescription}>
                  Adidas is a German company, one of the world's leading
                  <br />
                  sports goods manufacturers, It was founded in 1924 by the
                  <br />
                  Dassler brothers as Dassler.
                </p>

                <button className={styles.detailsButton}>
                  <div className={styles.detailsButtonBackground}>
                    More Details
                  </div>
                </button>
              </div>
            </div>

            <div className={styles.additionalMarkers}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cc7232831d6ec13925af68779b943cb157f3ef5fb54ddb6de209da0d6ab8c674?placeholderIfAbsent=true"
                className={styles.additionalMarkerIcon}
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4845134b6de31bcf4f6828ee95a87a742b3068112116fe99088ac9c5d6ff5f5d?placeholderIfAbsent=true"
                className={styles.additionalMarkerSubIcon}
              />
            </div>

            <div className={styles.timberlandMarker}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c62582db101ac76c22bdbeb80595890c4d1b06bf983438f67706ec7123193316?placeholderIfAbsent=true"
                className={styles.timberlandIcon}
              />
              <div className={styles.timberlandContainer}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2501fe95e10730c868e1392dc26ce1e38cf634b2464fb0656ef9d2a76776cae9?placeholderIfAbsent=true"
                  className={styles.timberlandLogo}
                />
                <span className={styles.timberlandText}>Timberland</span>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8df709eafd8e46229f854955d939c12643a164d3d341c680b4760676642bb6df?placeholderIfAbsent=true"
                className={styles.timberlandSubIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreDetail;
