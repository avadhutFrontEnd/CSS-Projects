"use client";
import React from "react";
import styles from "./Root.module.css";
import { TransactionCard } from "./TransactionCard";
import { StatusCard } from "./StatusCard";
import { Navbar } from "./Navbar";
import { PremiumCard } from "./PremiumCard";

export default function Root() {
  return (
    <main className={styles.root}>
      <div className={styles.image}>
        <div className={styles.div}>
          <aside className={styles.column}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4ee5c6e5cd638869f8d11b14cb52bd605292a0f90c88da79959b8f67bc0848a6?placeholderIfAbsent=true"
              className={styles.img}
              alt="Dashboard logo"
            />
          </aside>
          <section className={styles.column2}>
            <div className={styles.div2}>
              <Navbar />

              <section className={styles.div10}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/25887d112374565b46fae38b1902147bd27f6dafd979b348caaa03b746e7f6eb?placeholderIfAbsent=true"
                  className={styles.img10}
                  alt="Background"
                />
                <div className={styles.div11}>
                  <StatusCard
                    icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a0c8bdfb6f0c679fae59036f67edb3cb8cb70537fee5ba92efd6d52f5dfa9d5d?placeholderIfAbsent=true"
                    status="Pending"
                    amount="$980.00"
                    className={styles.button5}
                    backgroundClassName={styles.background6}
                    statusClassName={styles.div12}
                    amountClassName={styles.css98000}
                  />
                  <StatusCard
                    icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1e0921212e8fa65526c11efe4dda8713582274b08aefc5452f76ef3814de3f4f?placeholderIfAbsent=true"
                    status="In progress"
                    amount="$25,017.00"
                    className={styles.button6}
                    backgroundClassName={styles.background7}
                    statusClassName={styles.div13}
                    amountClassName={styles.css2501700}
                  />
                  <StatusCard
                    icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9cabe73d54b25bcf30ba66d0f761cb0e562c67b9c000d0f2b17544e2087bc5b6?placeholderIfAbsent=true"
                    status="Successful"
                    amount="$12,327.00"
                    className={styles.button7}
                    backgroundClassName={styles.background8}
                    statusClassName={styles.div14}
                    amountClassName={styles.css1232700}
                  />
                  <StatusCard
                    icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fb24b062042354dfb5a7ae1d4b6efd3a1051270051efafba313d48a5fad06960?placeholderIfAbsent=true"
                    status="Declined"
                    amount=""
                    className={styles.button8}
                    backgroundClassName={styles.background9}
                    statusClassName={styles.groups}
                    amountClassName=""
                  />
                </div>

                <div className={styles.div15}>
                  <div className={styles.div}>
                    <section className={styles.column3}>
                      <div className={styles.div16}>
                        <div className={styles.div17}>
                          <div className={styles.div}>
                            <div className={styles.column4}>
                              <TransactionCard
                                company="Figma"
                                amount="$112.00"
                                description="Paid for a corporate account for our te..."
                                paymentType="Annualy"
                                paymentIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4d0504225fa63cfdf2b03d7db15a6ba136d12d05cea7a062ae99eda849125358?placeholderIfAbsent=true"
                                user="Carl Jones"
                                userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cad16ef67bd5f41fa0243e6b19d3fc444fc568af3e12edc2675739f72aa4b0b4?placeholderIfAbsent=true"
                                date="11 Dec,18:32"
                                backgroundClassName={styles.background10}
                              />
                            </div>
                            <div className={styles.column5}>
                              <TransactionCard
                                company="PayPal"
                                amount="$10,478.00"
                                description="Salaries for November"
                                paymentType="One-time"
                                paymentIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/aa3a0d01662d29254da7c62f960fce9af2cd528203447c2d86567f71032778fa?placeholderIfAbsent=true"
                                user="Ann Meyer"
                                userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3b5cad8ae0b069d0f75dbf02aadde067da96392f98466ba378ae6acee6f8704a?placeholderIfAbsent=true"
                                date="11 Dec,20:28"
                                backgroundClassName={styles.background11}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.div26}>
                          <div className={styles.div}>
                            <div className={styles.column6}>
                              <TransactionCard
                                company="Walmart"
                                amount="$425.00"
                                description="Purchase of new equipment"
                                paymentType="Monthly"
                                paymentIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e4c035f8c9aade5b8a4043cf425b0144e0814f29e4f636da84da94d09bcc53b3?placeholderIfAbsent=true"
                                user="Nicholas Wade"
                                userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/75d9038a56d6cacfa6de6bbc8ac958154f5b6f510f6faacf82324ea83044b605?placeholderIfAbsent=true"
                                date="11 Dec,16:07"
                                backgroundClassName={styles.background12}
                              />
                            </div>
                            <div className={styles.column7}>
                              <TransactionCard
                                company="Apple"
                                amount="$4,718.52"
                                description="Buying 3 new macbooks for the office"
                                paymentType="One-time"
                                paymentIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b88cb15693ae1be554bb7bf154ee653c41951089d0d605cb29e09ea108dd1c07?placeholderIfAbsent=true"
                                user="Stacy Smith"
                                userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/13237998d02ba3645c702ad292fb5d4d6ca4f281eec7828513618368aca352bc?placeholderIfAbsent=true"
                                date="11 Dec,18:32"
                                backgroundClassName={styles.background13}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className={styles.column8}>
                      <div className={styles.div37}>
                        <div className={styles.div38}>
                          <TransactionCard
                            company="Adobe Creative Cloud"
                            amount="$970.00"
                            description="Payment for Adobe software"
                            paymentType="Monthly"
                            paymentIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/30b14c13fd359eef4108515d73ec4921621dd58218701df4c501f8fc45d54ed5?placeholderIfAbsent=true"
                            user="Carl Jones"
                            userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d3010f21cd5dfb6ea1907e75b98ce5d3bfe5bf3332a95e51015b7f50f54c44fc?placeholderIfAbsent=true"
                            date="11 Dec,22:13"
                            backgroundClassName={styles.background14}
                          />

                          <article className={styles.groups7}>
                            <div className={styles.background15}>
                              <div className={styles.div44}>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f3fbfbec2789b12b589d68646a2bfaf11ce8486c9948d7081923c5921b2f4c5b?placeholderIfAbsent=true"
                                  className={styles.img25}
                                  alt="Burger King icon"
                                />
                                <h3>Burger King</h3>
                              </div>
                              <div className={styles.div45}>
                                <div className={styles.div46}>
                                  <p className={styles.css9072}>$90.72</p>
                                  <p className={styles.lunchpayment}>
                                    Lunch payment
                                  </p>
                                </div>
                                <div className={styles.div47}>
                                  <img
                                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ba548fc32fb35d1746a255ebb4c9602342ed4b117809cbce6f7c4242ea18a344?placeholderIfAbsent=true"
                                    className={styles.img26}
                                    alt="Payment type icon"
                                  />
                                  <p>One-time</p>
                                </div>
                              </div>
                              <div className={styles.div48}>
                                <div className={styles.div49}>
                                  <img
                                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0e1847538ca82465aac79952de6acd4370b6ab4d8b3f7d48b7411a21a3a304f5?placeholderIfAbsent=true"
                                    className={styles.img27}
                                    alt="User avatar"
                                  />
                                  <p className={styles.nicholasWade}>
                                    Nicholas Wade
                                  </p>
                                </div>
                                <p className={styles.dec1902}>11 Dec,19:02</p>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className={styles.div50}>
                          <TransactionCard
                            company="Payoneer"
                            amount="$3200.00"
                            description="Office rent"
                            paymentType=""
                            paymentIcon=""
                            user="Ann Meyer"
                            userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ffdb3616dd369d9e9cef3e86f5cfc25a7d48909e86f0e3932024a9442b766c2c?placeholderIfAbsent=true"
                            date=""
                            backgroundClassName={styles.background16}
                          />

                          <TransactionCard
                            company="Shutterstock"
                            amount="$200.00"
                            description="Buying images for a p"
                            paymentType=""
                            paymentIcon=""
                            user="Carl Jones"
                            userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/acf0215d633477858022edeeac97f4c532ff06bc6fb0da9337384ebaa09c28c8?placeholderIfAbsent=true"
                            date=""
                            backgroundClassName={styles.background17}
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                <div className={styles.div53}>
                  <TransactionCard
                    company="Airbnb"
                    amount="$3012.64"
                    description="Payment for apartments for employees"
                    paymentType="One-time"
                    paymentIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5ff78ef2926bc94a8d35db745afe74a96b2fe97a161145de2717c5b8ec8d3da1?placeholderIfAbsent=true"
                    user="Stacy Smith"
                    userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c4fba4b832ae3ee3945a65f76e40fb0d828900a747a79282fda68232f5412488?placeholderIfAbsent=true"
                    date="10 Dec,21:30"
                    backgroundClassName={styles.background18}
                  />

                  <PremiumCard />

                  <TransactionCard
                    company="Payoneer"
                    amount="$3500.00"
                    description="Marketing Budget of 2024"
                    paymentType="Annually"
                    paymentIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2c5a92fdb3b8b0a6c75fb94f51c33c94cade0e374ff531b369932c44ddf1ccee?placeholderIfAbsent=true"
                    user="Ann Meyer"
                    userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3a205f0646e9412256935a88434e71ff95ea569a9bef60640971fadf90df7df2?placeholderIfAbsent=true"
                    date="10 Dec,17:26"
                    backgroundClassName={styles.background20}
                  />

                  <TransactionCard
                    company="Amazon"
                    amount="$987.13"
                    description="Purchase of new equ"
                    paymentType=""
                    paymentIcon=""
                    user="Nicholas Wade"
                    userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/226b9e8e87eefdf5f4c3a99966d0b6879767d6ad3cc86c0ccb1614bcf27835e7?placeholderIfAbsent=true"
                    date=""
                    backgroundClassName={styles.background21}
                  />
                </div>

                <div className={styles.div65}>
                  <div className={styles.div}>
                    <div className={styles.column9}>
                      <TransactionCard
                        company="Uber"
                        amount="$1200.00"
                        description="Taxi expenses for employees"
                        paymentType="Monthly"
                        paymentIcon=""
                        user="Nicholas Wade"
                        userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/323e5dfd3141ac96b0e4882e847c865a29967019821b5199ea7e9cda6907f6f1?placeholderIfAbsent=true"
                        date="9 Dec,18:32"
                        backgroundClassName={styles.background22}
                      />
                    </div>
                    <div className={styles.column10}>
                      <TransactionCard
                        company="Dribbble"
                        amount="$292.00"
                        description="Payment for a corporate account"
                        paymentType="Annually"
                        paymentIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0b6342737eb847d72df78d51deb25902178f48fd044a4e78350a611280bf8390?placeholderIfAbsent=true"
                        user="Carl Jones"
                        userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/74353d5e81bfe738f10bc5a26a053437dbeba376456e9dc884507835d1a9ac62?placeholderIfAbsent=true"
                        date="11 Dec,15:07"
                        backgroundClassName={styles.background23}
                      />
                    </div>
                    <div className={styles.column11}>
                      <TransactionCard
                        company="PayPal"
                        amount="$11,018.00"
                        description="Salaries for October"
                        paymentType="One-time"
                        paymentIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/87ce47f38e4ddb8c4f386738946eba0bb621806563dedf88a54ab4aafa7be129?placeholderIfAbsent=true"
                        user="Ann Meyer"
                        userIcon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f8e8cd135aefceb0aae3dc433aa28a19b7f3059cb258e799eb77f4813ebea282?placeholderIfAbsent=true"
                        date="9 Dec,21:19"
                        backgroundClassName={styles.background24}
                      />
                    </div>
                    <div className={styles.column12}>
                      <article className={styles.groups17}>
                        <div className={styles.background25}>
                          <h3 className={styles.americanAirline}>
                            American Airlines
                          </h3>
                          <p className={styles.css31600}>$316.00</p>
                          <p className={styles.paymentforthe}>
                            Payment for the fligh
                          </p>
                          <div className={styles.div79}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8e71684a23eeb3a0e39e7c28368654a58b4144a80e2e67cf1d1f07956ac1162e?placeholderIfAbsent=true"
                              className={styles.img42}
                              alt="User avatar"
                            />
                            <p className={styles.stacySmith}>Stacy Smith</p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
