import React from "react";
import styles from "./SalesDynamics.module.css";

function SalesDynamics() {
  return (
    <div className={styles.salesDynamics}>
      <div className={styles.salesHeader}>
        <div className={styles.headerLabels}>
          <span className={styles.headerLabel}>Sales</span>
          <span className={styles.headerLabel}>Revenue</span>
          <span className={styles.headerLabel}>Leods</span>
          <span className={styles.headerLabel}>KPI</span>
          <span className={styles.headerLabel}>W/L</span>
        </div>

        <div className={styles.userPerformance}>
          <div className={styles.userGroup}>
            <div className={styles.userInfo}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/73127b7f1afedd600f1c4475eb17d801edc67fa24553c2042f196037dfa78a74?placeholderIfAbsent=true"
                className={styles.userAvatar}
                alt="User avatar"
              />
              <span className={styles.userName}>Armin A.</span>
            </div>
            <span className={styles.userValue}>$209,633</span>
            <div className={styles.userMetrics}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1023"
                className={styles.metricsChart}
                alt="Metrics chart"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1030"
                className={styles.metricsBar}
                alt="Metrics bar"
              />
            </div>
            <span className={styles.metricsValue}>0.84</span>
          </div>
          <div className={styles.userPercentage}>
            <span className={styles.percentageValue}>31%</span>
            <div className={styles.userRatio}>
              <div className={styles.ratioContainer}>
                <span className={styles.ratioValue}>12</span>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1032"
                className={styles.ratioIcon}
                alt="Ratio icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.userPerformanceAlt}>
        <div className={styles.userGroupAlt}>
          <div className={styles.userInfoAlt}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1033"
              className={styles.userAvatar}
              alt="User avatar"
            />
            <span className={styles.userName}>Mikasa A</span>
          </div>
          <span className={styles.userValueAlt}>$156,841</span>
          <div className={styles.userMetricsAlt}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1100"
              className={styles.metricsChartAlt}
              alt="Metrics chart"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1101"
              className={styles.metricsBarAlt}
              alt="Metrics bar"
            />
          </div>
          <span className={styles.metricsValueAlt}>0.89</span>
          <div className={styles.userPercentageAlt}>
            <span className={styles.percentageValueAlt}>39%</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1102"
              className={styles.ratioIconAlt}
              alt="Ratio icon"
            />
          </div>
          <div className={styles.userRatioAlt}>
            <span className={styles.ratioValueAlt}>33</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1103"
              className={styles.ratioIconSmall}
              alt="Ratio icon"
            />
          </div>
        </div>

        <div className={styles.userControls}>
          <div className={styles.controlsGroup}>
            <div className={styles.controlsContent}>
              <div className={styles.controlsRow}>
                <button className={styles.controlButton}>
                  <div className={styles.controlBackground}>
                    <span>Top sales</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1110"
                      className={styles.controlIcon}
                      alt="Control icon"
                    />
                  </div>
                </button>
                <button className={styles.controlButtonAlt}>
                  <div className={styles.controlBackgroundAlt}>
                    <span>Sales streak</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1111"
                      className={styles.controlIconAlt}
                      alt="Control icon"
                    />
                  </div>
                </button>
              </div>
              <span className={styles.controlsLabel}>Work with platforms</span>
            </div>
            <button className={styles.controlButtonSmall}>
              <div className={styles.controlBackgroundSmall}>
                <span>Top review</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1112"
                  className={styles.controlIconSmall}
                  alt="Control icon"
                />
              </div>
            </button>
          </div>
          <div className={styles.valueButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1113"
              className={styles.valueIcon}
              alt="Value icon"
            />
            <button className={styles.valueButtonContainer}>
              <div className={styles.valueButtonBackground}>$156.841</div>
            </button>
          </div>
        </div>

        <div className={styles.platformContainer}>
          <div className={styles.platformBackground}>
            <div className={styles.platformHeader}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1120"
                className={styles.platformIcon}
                alt="Platform icon"
              />
              <span>Dribbble</span>
            </div>
            <div className={styles.platformMetrics}>
              <span className={styles.metricsPercentage}>45.3%</span>
              <span className={styles.metricsAmount}>$71,048</span>
            </div>
          </div>
          <div className={styles.platformAlternative}>
            <div className={styles.alternativeRow}>
              <div className={styles.alternativeBackground}>
                <div className={styles.alternativeHeader}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1121"
                    className={styles.alternativeIcon}
                    alt="Alternative icon"
                  />
                  <span className={styles.alternativeName}>Instogrom</span>
                </div>
                <div className={styles.alternativeMetrics}>
                  <span className={styles.alternativePercentage}>28.1%</span>
                  <span className={styles.alternativeAmount}>$44,072</span>
                </div>
              </div>
              <div className={styles.alternativeContainer}>
                <div className={styles.alternativeBackgroundAlt}>
                  <div className={styles.alternativeHeaderAlt}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1122"
                      className={styles.alternativeIconAlt}
                      alt="Alternative icon"
                    />
                    <span>Google</span>
                  </div>
                  <div className={styles.alternativeMetricsAlt}>
                    <span className={styles.alternativePercentageAlt}>
                      14.1%
                    </span>
                    <span className={styles.alternativeAmountAlt}>922,114</span>
                  </div>
                </div>
                <button className={styles.alternativeButton}>
                  <div className={styles.alternativeButtonBackground}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1123"
                      className={styles.alternativeButtonIcon}
                      alt="Button icon"
                    />
                    <span className={styles.alternativeButtonPercentage}>
                      5.4%
                    </span>
                    <span className={styles.alternativeButtonAmount}>
                      $8,469
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.otherBackground}>
              <div className={styles.otherHeader}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1130"
                  className={styles.otherIcon}
                  alt="Other icon"
                />
                <span>Other</span>
              </div>
              <div className={styles.otherMetrics}>
                <span className={styles.otherPercentage}>7.1%</span>
                <span className={styles.otherAmount}>$11,135</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.salesDynamicsContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1131"
            className={styles.backgroundImage}
            alt="Background"
          />
          <h3 className={styles.salesDynamicsTitle}>Sales dynamic</h3>
          <div className={styles.dynamicsChart}>
            <div className={styles.chartWeeks}>
              <span className={styles.week}>W1</span>
              <span className={styles.week}>W3</span>
              <span className={styles.week}>W5</span>
            </div>
            <div className={styles.chartLabel}>
              <span className={styles.labelText}>W</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1132"
                className={styles.labelIcon}
                alt="Label icon"
              />
            </div>
            <div className={styles.chartWeeksAlt}>
              <span className={styles.weekAlt}>W</span>
              <span className={styles.weekAlt}>W11</span>
            </div>
          </div>
          <div className={styles.chartMarkers}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1133"
              className={styles.markerIcon}
              alt="Marker"
            />
            <div className={styles.markerGroup}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1200"
                className={styles.markerGroupIcon}
                alt="Marker group"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1201"
                className={styles.markerLine}
                alt="Marker line"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.userPerformanceThird}>
        <div className={styles.userGroupThird}>
          <div className={styles.userInfoThird}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1202"
              className={styles.userAvatarThird}
              alt="User avatar"
            />
            <span>Eren Y</span>
          </div>
          <span className={styles.userValueThird}>$117,115</span>
          <div className={styles.userMetricsThird}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1203"
              className={styles.metricsChartThird}
              alt="Metrics chart"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1210"
              className={styles.metricsBarThird}
              alt="Metrics bar"
            />
          </div>
          <span className={styles.metricsValueThird}>0.79</span>
        </div>
        <div className={styles.userPercentageThird}>
          <span className={styles.percentageValueThird}>32%</span>
          <div className={styles.userRatioThird}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1211"
              className={styles.ratioIconThird}
              alt="Ratio icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1212"
              className={styles.ratioIconSmallThird}
              alt="Ratio icon small"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesDynamics;
