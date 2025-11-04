"use client";
import React from "react";
import styles from "./TransactionDashboard.module.css";

const TransactionDashboard: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.dashboardWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/25887d112374565b46fae38b1902147bd27f6dafd979b348caaa03b746e7f6eb?placeholderIfAbsent=true"
          className={styles.backgroundImage}
          alt="Dashboard background"
        />
        <div className={styles.contentContainer}>
          <div className={styles.mainGrid}>
            <div className={styles.leftColumn}>
              <div className={styles.transactionGrid}>
                <div className={styles.transactionGridRow}>
                  <div className={styles.transactionColumn}>
                    <div className={styles.transactionCard}>
                      <div className={styles.cardBackground}>
                        <div className={styles.cardHeader}>
                          <div className={styles.vendorInfo}>
                            <span className={styles.vendorName}>Figma</span>
                            <span className={styles.amount}>$112.00</span>
                          </div>
                          <div className={styles.paymentTypeWrapper}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4d0504225fa63cfdf2b03d7db15a6ba136d12d05cea7a062ae99eda849125358?placeholderIfAbsent=true"
                              className={styles.paymentTypeIcon}
                              alt="Payment type icon"
                            />
                            <span className={styles.paymentType}>Annualy</span>
                          </div>
                        </div>
                        <p className={styles.description}>
                          Paid for a corporate account for our te...
                        </p>
                        <div className={styles.cardFooter}>
                          <div className={styles.userInfo}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cad16ef67bd5f41fa0243e6b19d3fc444fc568af3e12edc2675739f72aa4b0b4?placeholderIfAbsent=true"
                              className={styles.userAvatar}
                              alt="User avatar"
                            />
                            <span className={styles.userName}>Carl Jones</span>
                          </div>
                          <span className={styles.transactionDate}>
                            11 Dec,18:32
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.transactionColumn}>
                    <div className={styles.transactionCard}>
                      <div className={styles.cardBackground}>
                        <div className={styles.vendorInfo}>
                          <span className={styles.vendorName}>PayPal</span>
                          <span className={styles.amount}>$10,478.00</span>
                          <p className={styles.description}>
                            Salaries for November
                          </p>
                          <div className={styles.userInfo}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3b5cad8ae0b069d0f75dbf02aadde067da96392f98466ba378ae6acee6f8704a?placeholderIfAbsent=true"
                              className={styles.userAvatar}
                              alt="User avatar"
                            />
                            <span className={styles.userName}>Ann Meyer</span>
                          </div>
                        </div>
                        <div className={styles.paymentDetails}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/aa3a0d01662d29254da7c62f960fce9af2cd528203447c2d86567f71032778fa?placeholderIfAbsent=true"
                            className={styles.paymentTypeIcon}
                            alt="Payment type icon"
                          />
                          <span className={styles.paymentType}>One-time</span>
                          <span className={styles.transactionDate}>
                            11 Dec,20:28
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.transactionGridRow}>
                  <div className={styles.transactionColumn}>
                    <div className={styles.transactionCard}>
                      <div className={styles.cardBackground}>
                        <div className={styles.cardHeader}>
                          <div className={styles.vendorInfo}>
                            <span className={styles.vendorName}>Walmart</span>
                            <span className={styles.amount}>$425.00</span>
                            <p className={styles.description}>
                              Purchase of new equipment
                            </p>
                          </div>
                          <div className={styles.paymentTypeWrapper}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e4c035f8c9aade5b8a4043cf425b0144e0814f29e4f636da84da94d09bcc53b3?placeholderIfAbsent=true"
                              className={styles.paymentTypeIcon}
                              alt="Payment type icon"
                            />
                            <span className={styles.paymentType}>Monthly</span>
                          </div>
                        </div>
                        <div className={styles.cardFooter}>
                          <div className={styles.userInfo}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/75d9038a56d6cacfa6de6bbc8ac958154f5b6f510f6faacf82324ea83044b605?placeholderIfAbsent=true"
                              className={styles.userAvatar}
                              alt="User avatar"
                            />
                            <span className={styles.userName}>
                              Nicholas Wade
                            </span>
                          </div>
                          <span className={styles.transactionDate}>
                            11 Dec,16:07
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.transactionColumn}>
                    <div className={styles.transactionCard}>
                      <div className={styles.cardBackground}>
                        <div className={styles.cardHeader}>
                          <div className={styles.vendorInfo}>
                            <span className={styles.vendorName}>Apple</span>
                            <span className={styles.amount}>$4,718.52</span>
                          </div>
                          <div className={styles.paymentTypeWrapper}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b88cb15693ae1be554bb7bf154ee653c41951089d0d605cb29e09ea108dd1c07?placeholderIfAbsent=true"
                              className={styles.paymentTypeIcon}
                              alt="Payment type icon"
                            />
                            <span className={styles.paymentType}>One-time</span>
                          </div>
                        </div>
                        <p className={styles.description}>
                          Buying 3 new macbooks for the office
                        </p>
                        <div className={styles.cardFooter}>
                          <div className={styles.userInfo}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/13237998d02ba3645c702ad292fb5d4d6ca4f281eec7828513618368aca352bc?placeholderIfAbsent=true"
                              className={styles.userAvatar}
                              alt="User avatar"
                            />
                            <span className={styles.userName}>Stacy Smith</span>
                          </div>
                          <span className={styles.transactionDate}>
                            11 Dec,18:32
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.rightColumnContent}>
                <div className={styles.rightColumnTop}>
                  <div className={styles.transactionCard}>
                    <div className={styles.adobeCardBackground}>
                      <div className={styles.cardHeader}>
                        <div className={styles.vendorInfo}>
                          <span className={styles.vendorName}>
                            Adobe Creative Cloud
                          </span>
                          <span className={styles.amount}>$970.00</span>
                          <p className={styles.description}>
                            Payment for Adobe software
                          </p>
                        </div>
                        <div className={styles.paymentTypeWrapper}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/30b14c13fd359eef4108515d73ec4921621dd58218701df4c501f8fc45d54ed5?placeholderIfAbsent=true"
                            className={styles.paymentTypeIcon}
                            alt="Payment type icon"
                          />
                          <span className={styles.paymentType}>Monthly</span>
                        </div>
                      </div>
                      <div className={styles.cardFooter}>
                        <div className={styles.userInfo}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d3010f21cd5dfb6ea1907e75b98ce5d3bfe5bf3332a95e51015b7f50f54c44fc?placeholderIfAbsent=true"
                            className={styles.userAvatar}
                            alt="User avatar"
                          />
                          <span className={styles.userName}>Carl Jones</span>
                        </div>
                        <span className={styles.transactionDate}>
                          11 Dec,22:13
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.transactionCard}>
                    <div className={styles.burgerKingCardBackground}>
                      <div className={styles.burgerKingHeader}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f3fbfbec2789b12b589d68646a2bfaf11ce8486c9948d7081923c5921b2f4c5b?placeholderIfAbsent=true"
                          className={styles.burgerKingIcon}
                          alt="Burger King icon"
                        />
                        <span className={styles.burgerKingName}>
                          Burger King
                        </span>
                      </div>
                      <div className={styles.burgerKingContent}>
                        <div className={styles.burgerKingInfo}>
                          <span className={styles.burgerKingAmount}>
                            $90.72
                          </span>
                          <p className={styles.burgerKingDescription}>
                            Lunch payment
                          </p>
                        </div>
                        <div className={styles.burgerKingPaymentType}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ba548fc32fb35d1746a255ebb4c9602342ed4b117809cbce6f7c4242ea18a344?placeholderIfAbsent=true"
                            className={styles.burgerKingPaymentIcon}
                            alt="Payment type icon"
                          />
                          <span className={styles.burgerKingPaymentText}>
                            One-time
                          </span>
                        </div>
                      </div>
                      <div className={styles.burgerKingFooter}>
                        <div className={styles.burgerKingUser}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0e1847538ca82465aac79952de6acd4370b6ab4d8b3f7d48b7411a21a3a304f5?placeholderIfAbsent=true"
                            className={styles.burgerKingUserAvatar}
                            alt="User avatar"
                          />
                          <span className={styles.burgerKingUserName}>
                            Nicholas Wade
                          </span>
                        </div>
                        <span className={styles.burgerKingDate}>
                          11 Dec,19:02
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rightColumnBottom}>
                  <div className={styles.transactionCard}>
                    <div className={styles.payoneerCardBackground}>
                      <span className={styles.vendorName}>Payoneer</span>
                      <span className={styles.amount}>$3200.00</span>
                      <p className={styles.description}>Office rent</p>
                      <div className={styles.userInfo}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ffdb3616dd369d9e9cef3e86f5cfc25a7d48909e86f0e3932024a9442b766c2c?placeholderIfAbsent=true"
                          className={styles.userAvatar}
                          alt="User avatar"
                        />
                        <span className={styles.userName}>Ann Meyer</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.transactionCard}>
                    <div className={styles.shutterstockCardBackground}>
                      <span className={styles.vendorName}>Shutterstock</span>
                      <span className={styles.amount}>$200.00</span>
                      <p className={styles.description}>
                        Buying images for a p
                      </p>
                      <div className={styles.userInfo}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/acf0215d633477858022edeeac97f4c532ff06bc6fb0da9337384ebaa09c28c8?placeholderIfAbsent=true"
                          className={styles.userAvatar}
                          alt="User avatar"
                        />
                        <span className={styles.userName}>Carl Jones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomCardsRow}>
            <div className={styles.airbnbCard}>
              <div className={styles.cardBackground}>
                <div className={styles.airbnbHeader}>
                  <span className={styles.vendorName}>Airbnb</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5ff78ef2926bc94a8d35db745afe74a96b2fe97a161145de2717c5b8ec8d3da1?placeholderIfAbsent=true"
                    className={styles.vendorIcon}
                    alt="Airbnb icon"
                  />
                </div>
                <div className={styles.airbnbAmountRow}>
                  <span className={styles.amount}>$3012.64</span>
                  <span className={styles.paymentType}>One-time</span>
                </div>
                <p className={styles.description}>
                  Payment for apartments for employees
                </p>
                <div className={styles.cardFooter}>
                  <div className={styles.userInfo}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c4fba4b832ae3ee3945a65f76e40fb0d828900a747a79282fda68232f5412488?placeholderIfAbsent=true"
                      className={styles.userAvatar}
                      alt="User avatar"
                    />
                    <span className={styles.userName}>Stacy Smith</span>
                  </div>
                  <span className={styles.transactionDate}>10 Dec,21:30</span>
                </div>
              </div>
            </div>
            <div className={styles.premiumCard}>
              <div className={styles.premiumCardContent}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/eaeaa6a0ed6c463710e629c7e39071072cda6a0a9929140e69f45401a98ad4a8?placeholderIfAbsent=true"
                  className={styles.premiumBackground}
                  alt="Premium background"
                />
                <h3 className={styles.premiumTitle}>Premium Plan</h3>
                <p className={styles.premiumDescription}>
                  Upgrade your plan to Premium
                  <br />
                  to get all benefits
                </p>
                <button className={styles.premiumButton}>
                  <div className={styles.premiumButtonBackground}>
                    Get Premium Plan
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.payoneerMarketingCard}>
              <div className={styles.payoneerMarketingBackground}>
                <div className={styles.payoneerMarketingHeader}>
                  <span className={styles.vendorName}>Payoneer</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2c5a92fdb3b8b0a6c75fb94f51c33c94cade0e374ff531b369932c44ddf1ccee?placeholderIfAbsent=true"
                    className={styles.vendorIcon}
                    alt="Payoneer icon"
                  />
                </div>
                <div className={styles.payoneerMarketingContent}>
                  <div className={styles.payoneerMarketingInfo}>
                    <span className={styles.amount}>$3500.00</span>
                    <p className={styles.description}>
                      Marketing Budget of 2024
                    </p>
                  </div>
                  <span className={styles.paymentType}>Annually</span>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.userInfo}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3a205f0646e9412256935a88434e71ff95ea569a9bef60640971fadf90df7df2?placeholderIfAbsent=true"
                      className={styles.userAvatar}
                      alt="User avatar"
                    />
                    <span className={styles.userName}>Ann Meyer</span>
                  </div>
                  <span className={styles.transactionDate}>10 Dec,17:26</span>
                </div>
              </div>
            </div>
            <div className={styles.amazonCard}>
              <div className={styles.amazonCardBackground}>
                <span className={styles.vendorName}>Amazon</span>
                <span className={styles.amount}>$987.13</span>
                <p className={styles.description}>Purchase of new equ</p>
                <div className={styles.userInfo}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/226b9e8e87eefdf5f4c3a99966d0b6879767d6ad3cc86c0ccb1614bcf27835e7?placeholderIfAbsent=true"
                    className={styles.userAvatar}
                    alt="User avatar"
                  />
                  <span className={styles.userName}>Nicholas Wade</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.bottomRowGrid}>
              <div className={styles.uberColumn}>
                <div className={styles.uberCard}>
                  <div className={styles.uberCardBackground}>
                    <div className={styles.uberHeader}>
                      <span className={styles.vendorName}>Uber</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b02e367e4fdaee8767189bc25934a0a66ee6d85d4f3574652e9efd813abf2594?placeholderIfAbsent=true"
                        className={styles.vendorIcon}
                        alt="Uber icon"
                      />
                    </div>
                    <div className={styles.uberContent}>
                      <div className={styles.uberInfo}>
                        <span className={styles.amount}>$1200.00</span>
                        <p className={styles.description}>
                          Taxi expenses for employees
                        </p>
                      </div>
                      <span className={styles.paymentType}>Monthly</span>
                    </div>
                    <div className={styles.cardFooter}>
                      <div className={styles.userInfo}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/323e5dfd3141ac96b0e4882e847c865a29967019821b5199ea7e9cda6907f6f1?placeholderIfAbsent=true"
                          className={styles.userAvatar}
                          alt="User avatar"
                        />
                        <span className={styles.userName}>Nicholas Wade</span>
                      </div>
                      <span className={styles.transactionDate}>
                        9 Dec,18:32
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dribbbleColumn}>
                <div className={styles.dribbbleCard}>
                  <div className={styles.dribbbleCardBackground}>
                    <div className={styles.dribbbleHeader}>
                      <div className={styles.dribbbleInfo}>
                        <span className={styles.vendorName}>Dribbble</span>
                        <span className={styles.amount}>$292.00</span>
                      </div>
                      <div className={styles.dribbblePaymentType}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0b6342737eb847d72df78d51deb25902178f48fd044a4e78350a611280bf8390?placeholderIfAbsent=true"
                          className={styles.paymentTypeIcon}
                          alt="Payment type icon"
                        />
                        <span className={styles.paymentType}>Annually</span>
                      </div>
                    </div>
                    <p className={styles.description}>
                      Payment for a corporate account
                    </p>
                    <div className={styles.cardFooter}>
                      <div className={styles.userInfo}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/74353d5e81bfe738f10bc5a26a053437dbeba376456e9dc884507835d1a9ac62?placeholderIfAbsent=true"
                          className={styles.userAvatar}
                          alt="User avatar"
                        />
                        <span className={styles.userName}>Carl Jones</span>
                      </div>
                      <span className={styles.transactionDate}>
                        11 Dec,15:07
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.paypalColumn}>
                <div className={styles.paypalCard}>
                  <div className={styles.paypalCardBackground}>
                    <div className={styles.paypalInfo}>
                      <span className={styles.vendorName}>PayPal</span>
                      <span className={styles.amount}>$11,018.00</span>
                      <p className={styles.description}>Salaries for October</p>
                      <div className={styles.userInfo}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f8e8cd135aefceb0aae3dc433aa28a19b7f3059cb258e799eb77f4813ebea282?placeholderIfAbsent=true"
                          className={styles.userAvatar}
                          alt="User avatar"
                        />
                        <span className={styles.userName}>Ann Meyer</span>
                      </div>
                    </div>
                    <div className={styles.paypalPaymentDetails}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/87ce47f38e4ddb8c4f386738946eba0bb621806563dedf88a54ab4aafa7be129?placeholderIfAbsent=true"
                        className={styles.paymentTypeIcon}
                        alt="Payment type icon"
                      />
                      <span className={styles.paymentType}>One-time</span>
                      <span className={styles.transactionDate}>
                        9 Dec,21:19
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.airlinesColumn}>
                <div className={styles.airlinesCard}>
                  <div className={styles.airlinesCardBackground}>
                    <span className={styles.vendorName}>American Airlines</span>
                    <span className={styles.amount}>$316.00</span>
                    <p className={styles.description}>Payment for the fligh</p>
                    <div className={styles.userInfo}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8e71684a23eeb3a0e39e7c28368654a58b4144a80e2e67cf1d1f07956ac1162e?placeholderIfAbsent=true"
                        className={styles.userAvatar}
                        alt="User avatar"
                      />
                      <span className={styles.userName}>Stacy Smith</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionDashboard;
