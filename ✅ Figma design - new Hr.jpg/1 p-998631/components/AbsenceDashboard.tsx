"use client";
import React from "react";
import styles from "./AbsenceDashboard.module.css";
import LeaveCard from "./LeaveCard";
import AbsenceTable from "./AbsenceTable";
import NotificationToast from "./NotificationToast";

const AbsenceDashboard: React.FC = () => {
  return (
    <main className={styles.dashboard}>
      <div className={styles.container}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/41debfc3cf22c64da673677a1ee9e3eb23c9e968efd98b94f890889cb0538ca3?placeholderIfAbsent=true"
          className={styles.backgroundImage}
          alt="Background"
        />
        <div className={styles.content}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c934523aa3b6e69b57202b770003e28c573fa1be53799f52f3e8aab362965782?placeholderIfAbsent=true"
            className={styles.backgroundImage}
            alt="Background overlay"
          />
          <header className={styles.header}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/083dd96470bf6c698c3d307d0ed9c155d0ac7c95fb4dc001a5e97b9ee73f4547?placeholderIfAbsent=true"
              className={styles.logo}
              alt="Company logo"
            />
            <div className={styles.navigation}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/00d06fa2a5509d9e7d030c7d967d49d969f061a401cce8fa268d76b8288c39a1?placeholderIfAbsent=true"
                className={styles.navBar}
                alt="Navigation bar"
              />
              <section className={styles.mainSection}>
                <div className={styles.contentLayout}>
                  <div className={styles.columnLayout}>
                    <div className={styles.mainColumn}>
                      <div className={styles.titleSection}>
                        <h1 className={styles.pageTitle}>My Absence</h1>
                        <div className={styles.breadcrumb}>
                          <span className={styles.breadcrumbPath}>
                            Manage / Absence & Leave
                          </span>
                          <div className={styles.currentPage}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7edd81f3365d9b1905f4ebf20dc3a280adcde6018e76cebf0bdb771fd7ca218f?placeholderIfAbsent=true"
                              className={styles.breadcrumbDivider}
                              alt="Divider"
                            />
                            <span>My Absence</span>
                          </div>
                        </div>
                        <div className={styles.leaveCardsContainer}>
                          <LeaveCard
                            type="Sick Leave"
                            daysUsed="1/10"
                            backgroundClass={styles.sickLeaveCard}
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5431a7f4d7afb44d5c5bcd53dba8bbd19e42bb685242284dfa5642d37ad3fb18?placeholderIfAbsent=true"
                            backgroundImageSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c5eaed59ad778a639f74b0d302322fe19b1fb81ad1b7a93b146ead61e0280691?placeholderIfAbsent=true"
                          />
                          <LeaveCard
                            type="Vacation"
                            daysUsed="19/25"
                            backgroundClass={styles.vacationCard}
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f8dea080619d3c917d8be6c9e7333bb6db19107a3c5ab9de8e9d403965abab30?placeholderIfAbsent=true"
                          />
                          <LeaveCard
                            type="Education"
                            daysUsed="0/2"
                            backgroundClass={styles.educationCard}
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/08cd27155f59a8fc94b33edc76ad2b2f9f80527c5ea3e877e21d32da046896c5?placeholderIfAbsent=true"
                          />
                          <LeaveCard
                            type="Relocation"
                            daysUsed="0/2"
                            backgroundClass={styles.relocationCard}
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ae6ded690b3d34b8e48f8020799c604494f0e4fe2d3d08dcc334594412eb91fd?placeholderIfAbsent=true"
                          />
                          <LeaveCard
                            type="Sabbatical"
                            daysUsed="5/5"
                            backgroundClass={styles.sabbaticalCard}
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dda051d4f39eef1be6527b5986388ef7753873a9fc37afaa941029990f439c7d?placeholderIfAbsent=true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.sideColumn}>
                      <div className={styles.actionSection}>
                        <button className={styles.requestButton}>
                          <span className={styles.requestButtonText}>
                            Request Absence
                          </span>
                        </button>
                        <div className={styles.bereavementCard}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4b0692e1d1720263c40a1f6434779bc59eb5f45fcc4535f05cb8d9ca421c67d4?placeholderIfAbsent=true"
                            className={styles.cardBackground}
                            alt="Card background"
                          />
                          <div className={styles.bereavementInfo}>
                            <h3 className={styles.bereavementTitle}>
                              Bereavement
                            </h3>
                            <p className={styles.bereavementDaysUsed}>
                              0/2 Days Used
                            </p>
                          </div>
                          <div className={styles.bereavementIcons}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/073d86c15b8832ca3865026cdc95d0f939e7a9781f1dd629a76f329f9b045f30?placeholderIfAbsent=true"
                              className={styles.bereavementIcon}
                              alt="Bereavement icon"
                            />
                            <div className={styles.bereavementIconsGroup}>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e966d1880002c97ee63ebdfc0228f00bf390c815656ea6c3461f9faf66e61896?placeholderIfAbsent=true"
                                className={styles.bereavementIconSmall}
                                alt="Icon"
                              />
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/59ae14c96f615497648a8544496ea8eb67043fa11552bd425334231f74e3be12?placeholderIfAbsent=true"
                                className={styles.bereavementIconLarge}
                                alt="Icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <AbsenceTable />
              </section>
            </div>
          </header>
          <NotificationToast
            message="—Your absence has been requested."
            type="success"
          />
        </div>
      </div>
    </main>
  );
};

export default AbsenceDashboard;
