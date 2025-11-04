import React from "react";
import styles from "./PlatformMetrics.module.css";

function PlatformMetrics() {
  return (
    <div className={styles.platformMetrics}>
      <div className={styles.metricsContainer}>
        <div className={styles.metricsRow}>
          <div className={styles.metricsCard}>
            <div className={styles.cardBackground}>
              <div className={styles.cardHeader}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c721af547987b62a0df86c9fb9d0261d690fbe105bf4f94b70cd9e8ed35eff0d?placeholderIfAbsent=true"
                  className={styles.headerIcon}
                  alt="Icon"
                />
                <button className={styles.filterButton}>
                  <div className={styles.filterBackground}>
                    <span>Filters</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/654a447f55089b6dd746883f35882e13830120152bd49df206767e4df06d47a9?placeholderIfAbsent=true"
                      className={styles.filterIcon}
                      alt="Filter"
                    />
                  </div>
                </button>
              </div>

              <div className={styles.platformList}>
                <div className={styles.platformBackground}>
                  <div className={styles.platformItem}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c760db9afc78d6dec24df994e5556072cde18c3b54a9d1746af30d8943f179d3?placeholderIfAbsent=true"
                      className={styles.platformIcon}
                      alt="Dribbble"
                    />
                    <span className={styles.platformName}>Dribbble</span>
                  </div>
                  <div className={styles.platformValue}>
                    <span className={styles.valueAmount}>$227,459</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9aed83a7d1aec040e6d668fe1a942aa669594c43fbca544b82e06c7bbc935345?placeholderIfAbsent=true"
                      className={styles.valueChart}
                      alt="Chart"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.platformList}>
                <div className={styles.platformBackground}>
                  <div className={styles.platformItem}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3742f5af3065be05073c000965aa0346971cf6764c7b34d77135041acc91e986?placeholderIfAbsent=true"
                      className={styles.platformIcon}
                      alt="Instagram"
                    />
                    <span>Instagram</span>
                  </div>
                  <div className={styles.platformValue}>
                    <span className={styles.valueAmount}>$142,823</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/16adcad16a9dd4866f73eb1bc98acc9765154cd765fc0cf91a38a8cec011b1a6?placeholderIfAbsent=true"
                      className={styles.valueChart}
                      alt="Chart"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.platformList}>
                <div className={styles.platformBackground}>
                  <div className={styles.platformItem}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8fbe3d3df22dc97885223f3075957eb2d447086ad7d63d3618179f591ce43d0e?placeholderIfAbsent=true"
                      className={styles.platformIcon}
                      alt="Behance"
                    />
                    <span>Behance</span>
                  </div>
                  <div className={styles.platformValue}>
                    <span className={styles.valueAmount}>$89,935</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9595f2bcd871cf1b53c5a93d19fefe9808e933584bd58d477d907c988d41a9b7?placeholderIfAbsent=true"
                      className={styles.valueChart}
                      alt="Chart"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.platformBackground}>
                <div className={styles.platformItem}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b7fb3eb829086f93ff75a1df1546e11d532d579cc460a97183ca1baad97f4d99?placeholderIfAbsent=true"
                    className={styles.platformIcon}
                    alt="Google"
                  />
                  <span className={styles.platformName}>Google</span>
                </div>
                <div className={styles.platformValue}>
                  <span className={styles.valueAmount}>$37,028</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/793c29e998e186aa5196c607272c3fe3aa4d5a2353d1ef06c61f1ea649de02f4?placeholderIfAbsent=true"
                    className={styles.valueChart}
                    alt="Chart"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.dealsCard}>
            <div className={styles.dealsBackground}>
              <div className={styles.dealsHeader}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6ef9135357d03c6b00564126bcf327f7c02f30b95e0ae5981a1b4c2851157f09?placeholderIfAbsent=true"
                  className={styles.headerIcon}
                  alt="Icon"
                />
                <button className={styles.filterButton}>
                  <div className={styles.filterBackground}>
                    <span>Filters</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8c0623d43b118b55630f2d70aac0f14a63ab793805c40468d4d91b77b7fc2508?placeholderIfAbsent=true"
                      className={styles.filterIcon}
                      alt="Filter"
                    />
                  </div>
                </button>
              </div>

              <div className={styles.chartContainer}>
                <div className={styles.chartGroup}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/02e12818a72e9dfeebfeeb2176e7ac9585ef01787fa791ce3f1ee975770a4ef0?placeholderIfAbsent=true"
                    className={styles.chartBackground}
                    alt="Chart background"
                  />
                  <div className={styles.chartLabel}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a0841cf46061d8f51305084a9f7b0af7c75d14d57a4b8bf61c06fe4b57b3f1f2?placeholderIfAbsent=true"
                      className={styles.labelBackground}
                      alt="Label background"
                    />
                    Be
                  </div>
                  <div className={styles.chartBar}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/902c19879ace83f88823a2dae004b5bcee52d480dd03b21c8a5b101b790d5f8b?placeholderIfAbsent=true"
                      className={styles.barIcon}
                      alt="Bar"
                    />
                  </div>
                  <div className={styles.chartBar}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/22968efdca3880ea58e1fb915de9301ccc556acc11437fc74a5ed12b305ee0eb?placeholderIfAbsent=true"
                      className={styles.barIcon}
                      alt="Bar"
                    />
                  </div>
                  <div className={styles.chartBar}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/653bf93bc006c40ff31edf0046f4393141e50f5815a6ae099b2adcef8ff531e9?placeholderIfAbsent=true"
                      className={styles.barIcon}
                      alt="Bar"
                    />
                  </div>
                </div>

                <div className={styles.chartLegend}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/85d579c3778c4a30d2deee58ba271c1c2a5c1b93b29eb82f1cc157fee110c5e2?placeholderIfAbsent=true"
                    className={styles.legendBackground}
                    alt="Legend background"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/88c0e73ead0a7b44caab658083f59f0fe51e514c8f02910dba9e808e2668d2d8?placeholderIfAbsent=true"
                    className={styles.legendIcon}
                    alt="Legend"
                  />
                </div>
              </div>

              <h4 className={styles.dealsTitle}>Deals amount</h4>
              <p className={styles.dealsSubtitle}>by referrer category</p>
            </div>
          </div>
        </div>

        <div className={styles.platformValueCard}>
          <div className={styles.valueBackground}>
            <div className={styles.valueHeader}>
              <div className={styles.valueHeaderGroup}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c362b50099c3aeb18f7ccd8bd788596365e608b888e141d204df3113e0ba8a38?placeholderIfAbsent=true"
                  className={styles.valueHeaderIcon}
                  alt="Icon"
                />
                <div className={styles.valueHeaderContent}>
                  <h4 className={styles.valueHeaderTitle}>Platform value</h4>
                  <p className={styles.valueHeaderSubtitle}>Dribbble</p>
                </div>
              </div>

              <div className={styles.valueMetrics}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2b3106c8813b27d1bf76335c7dbb44460187f056fbe01f62189e2cb575d75517?placeholderIfAbsent=true"
                  className={styles.metricsIcon}
                  alt="Metrics"
                />
                <div className={styles.metricsContent}>
                  <h5 className={styles.metricsTitle}>Revenue</h5>
                  <p className={styles.metricsValue}>$18,552</p>
                  <span className={styles.metricsLabel}>Leods</span>
                  <div className={styles.metricsRow}>
                    <span className={styles.metricsCount}>373</span>
                    <span className={styles.metricsRatio}>97/276</span>
                  </div>
                  <span className={styles.metricsLabel}>Win/lose</span>
                  <div className={styles.metricsRow}>
                    <span className={styles.metricsPercentage}>16%</span>
                    <span className={styles.metricsRatio}>51/318</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.valueControls}>
              <div className={styles.controlsGroup}>
                <button className={styles.controlButton}>
                  <div className={styles.controlDarkBackground}>Revenue</div>
                </button>
                <button className={styles.controlButton}>
                  <div className={styles.controlLightBackground}>Leads</div>
                </button>
                <button className={styles.controlButton}>
                  <div className={styles.controlLightBackground}>W/L</div>
                </button>
              </div>

              <div className={styles.chartContainer}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d445d9686bc751ceefde8b669c176ab19501d6f7841480e67ad5eb6472ef57cb?placeholderIfAbsent=true"
                  className={styles.chartLine}
                  alt="Chart line"
                />
                <div className={styles.chartValues}>
                  <button className={styles.valueButton}>
                    <div className={styles.valueButtonBackground}>$11,035</div>
                  </button>
                  <span className={styles.valueAmount}>$14,500</span>
                </div>
              </div>

              <div className={styles.chartDetailContainer}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c9aa8f3820087c837a81ee2638d3acfd3f89e89296c06f9282dbcfafc8ef91e3?placeholderIfAbsent=true"
                  className={styles.chartDetailBackground}
                  alt="Chart background"
                />
                <div className={styles.chartDetails}>
                  <button className={styles.detailButton}>
                    <div className={styles.detailButtonBackground}>$6,901</div>
                  </button>
                  <div className={styles.detailValues}>
                    <button className={styles.valueButton}>
                      <div className={styles.valueButtonBackground}>$0,288</div>
                    </button>
                    <span className={styles.valueAmount}>$11,000</span>
                  </div>
                </div>

                <div className={styles.chartLabels}>
                  <span className={styles.labelAmount}>$7,500</span>
                  <span className={styles.labelAmount}>$4,000</span>
                </div>

                <div className={styles.chartMarkers}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9917d577149f419d29e093baf3d904af948a1df53f31378cbb86faf56859c212?placeholderIfAbsent=true"
                    className={styles.markerIcon}
                    alt="Marker"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/125b2fc9f948a77fbf54472633ed18d63f4c7f7e98a364b92f9625fc74401556?placeholderIfAbsent=true"
                    className={styles.markerIcon}
                    alt="Marker"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/bad66ec7bf814d9e30327e87455d2342dba32d5f1b726cfc42d2c6724e6336b5?placeholderIfAbsent=true"
                    className={styles.markerIcon}
                    alt="Marker"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c1b764826cab45405cf26d07ec25875ebf299f638bfa9cb3b6b8f4a6d9f5968f?placeholderIfAbsent=true"
                    className={styles.markerIcon}
                    alt="Marker"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/aa8dcf2f72904a20e15e0c4c17b26761febe5780aea4d184591e60cdce2ac530?placeholderIfAbsent=true"
                    className={styles.markerIcon}
                    alt="Marker"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a7740a94c79b2ef8bc9141d397c38b81ae1047fad0e57438bd8e5cbeb24a3c48?placeholderIfAbsent=true"
                    className={styles.markerIcon}
                    alt="Marker"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8ab0eed2189cd61ea632cabc6eb14015176f34ad5ab1f5fa4b3a8bcc2b263509?placeholderIfAbsent=true"
                    className={styles.markerIcon}
                    alt="Marker"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/251a0d4366cadfe019db95d40ab9d17497128b8760dda9c6c68fcb71d25254e0?placeholderIfAbsent=true"
                    className={styles.markerIcon}
                    alt="Marker"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/da482845edc7ef66d215c1d7b77e575c88abd3d056760f7219d90a1084a63095?placeholderIfAbsent=true"
                    className={styles.markerIcon}
                    alt="Marker"
                  />
                </div>
              </div>

              <div className={styles.timeLabels}>
                <span className={styles.timeLabel}>Se9</span>
                <span className={styles.timeLabel}>Oct</span>
                <span className={styles.timeLabel}>Nov</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformMetrics;
