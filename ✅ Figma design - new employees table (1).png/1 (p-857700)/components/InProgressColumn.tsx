"use client";
import React from "react";
import styles from "./FigmaDesignNewEmployeesTable1Png.module.css";
import TaskCard from "./TaskCard";

const InProgressColumn: React.FC = () => {
  return (
    <section className={styles.groups25}>
      <div className={styles.div59}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ac48e03b26c5c983b772ec54d1f0cd06911695716bdaf0dbe585de70f39c6023?placeholderIfAbsent=true"
          className={styles.img}
          alt="Background"
        />
        <div className={styles.groups26}>
          <div className={styles.background24}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/45b0d2525931b95d74f68d97d038e06730f133a5e25323cc60878b03881f127c?placeholderIfAbsent=true"
              className={styles.img66}
              alt="Icon"
            />
            <div className={styles.div60}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2187c2d2f140d28b2e3b69f9eec14e63d805aad541595350b3297c6e0f671b58?placeholderIfAbsent=true"
                className={styles.img67}
                alt="Icon"
              />
              <h2 className={styles.onProgress}>On Progress</h2>
              <div className={styles.button16}>
                <div className={styles.background25}>3</div>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2234a6cfd03603a8f9f50b6da2179869b088730cd6a8d8f4c2a0611983806478?placeholderIfAbsent=true"
            className={styles.img68}
            alt="Menu icon"
          />
        </div>
      </div>

      <div className={styles.groups27}>
        <div className={styles.div61}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a952ae6e5774df337ae3cd6f47ca8a0d14753f95c826205d63ba86b196077969?placeholderIfAbsent=true"
            className={styles.img69}
            alt="Icon"
          />
          <div className={styles.div62}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d854be91d70d47b07c13a402f3ba870574d96b68c2c43cf24aabb50ba46980e6?placeholderIfAbsent=true"
              className={styles.img70}
              alt="Icon"
            />
            <span>Task Name</span>
          </div>
        </div>
        <div className={styles.div63}>
          <div className={styles.div64}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/465abf0d29f2ef4edd732a6741c0666f9f7a5a04438fd5c118652dbc45f6efd4?placeholderIfAbsent=true"
              className={styles.img71}
              alt="Icon"
            />
            <span>Description</span>
          </div>
          <div className={styles.div65}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/37c2c1fe0a7773e2654d0096527bf0c17bd4fe1506bbb7358622e54f33d00f33?placeholderIfAbsent=true"
              className={styles.img72}
              alt="Icon"
            />
            <span className={styles.estimation}>Estimation</span>
          </div>
          <div className={styles.div66}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0c260e67fbc9a2fb6d5941b089c9308696355cf7e33b2a6b48bad9be55f2f909?placeholderIfAbsent=true"
              className={styles.img73}
              alt="Icon"
            />
            <span>Type</span>
          </div>
          <div className={styles.div67}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f87a1001ff8589e58ce4178d301f969fcbfaa2b5893737c9e0f494a4945bc76e?placeholderIfAbsent=true"
              className={styles.img74}
              alt="Icon"
            />
            <span>People</span>
          </div>
          <div className={styles.div68}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d96591b882a7429752ea76a5197a5c18330e5cf09eb54102f2d0a1d0f190eb97?placeholderIfAbsent=true"
              className={styles.img75}
              alt="Icon"
            />
            <span>Priority</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/39232c34c2b38cbf65a981317fd614fa96be4918c19a7c3b77d50d8992a31efa?placeholderIfAbsent=true"
            className={styles.img76}
            alt="Menu icon"
          />
        </div>
      </div>

      <div className={styles.div69}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9adf5a93e817f1e8427584df4c8ecf0bc1fec41d7f2e6b57906dc34d32c757d5?placeholderIfAbsent=true"
          className={styles.img}
          alt="Background"
        />
        <div className={styles.groups28}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/20fb9d9127276f0a366977d11c520cfe28646ea5dfcefbd1b98cf3c3ad611057?placeholderIfAbsent=true"
            className={styles.img77}
            alt="Divider"
          />
          <div className={styles.div70}>
            <div className={styles.div71}>
              <TaskCard
                title="Super Admin Role"
                date="Feb 14, 2024-Feb 1, 2024"
                type="Dashboard"
                typeColor="purple"
              />

              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e31c5d039dd39579b425b435df62198e3c7bef0fd7f385077051668beb4dbb8c?placeholderIfAbsent=true"
                className={styles.img82}
                alt="Divider"
              />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b14b0929dab2d7b0a059b89a1fb6bc82f800d97bace8b12447b2adf6c98a35fa?placeholderIfAbsent=true"
              className={styles.img83}
              alt="Icon"
            />
          </div>
        </div>

        <div className={styles.div75}>
          <div className={styles.div76}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/660623fc394549504bc0668d24ce889b80628698a5b113a97296934f812bf459?placeholderIfAbsent=true"
              className={styles.img84}
              alt="Icon"
            />
            <span>Settings Page</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e58f07e3523fd91145576f8dcce4074c17ae37753a49ed0ab75fcc706131c443?placeholderIfAbsent=true"
            className={styles.img85}
            alt="Divider"
          />
          <div className={styles.div77}>
            <div className={styles.feb142024Feb}>Feb 14, 2024-Feb 1, 2024</div>
            <div className={styles.groups31}>
              <div className={styles.button18}>
                <div className={styles.background27}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ebbeffbd8e3edd7fe35271c186ca0630b6c91472c73e7177e17ac6b1a6266e40?placeholderIfAbsent=true"
                    className={styles.img86}
                    alt="Icon"
                  />
                  <span>Mobile App</span>
                </div>
              </div>
            </div>
            <div className={styles.div78}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0df4f778fc65ea19e9e8db52ecef9d176c959b7ed28906430909048f7918deda?placeholderIfAbsent=true"
                className={styles.img87}
                alt="Icon"
              />
              <div className={styles.groups32}>
                <div className={styles.button19}>
                  <div className={styles.background28}>Medium</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fc2b3064fbc18dc50db16e35d0680624d07deea759693e6dc1c408ec204eb0bf?placeholderIfAbsent=true"
                className={styles.img88}
                alt="Icon"
              />
            </div>
          </div>
        </div>

        <div className={styles.groups33}>
          <div className={styles.div79}>
            <div className={styles.div80}>
              <div className={styles.div81}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4bd20a368d4bc00cc182b371e6e49d668e72c0509c2bd885ef0ffe73549c327e?placeholderIfAbsent=true"
                  className={styles.img89}
                  alt="Icon"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d758ba1c7152656467c6028c152b636aed6c449ccf7df0a194c299b8a8e19786?placeholderIfAbsent=true"
                  className={styles.img90}
                  alt="Icon"
                />
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/13f24108a6cde5b6440b6872955441f45ba59d2d5b442d5a8fbdabb3da3110d9?placeholderIfAbsent=true"
                className={styles.img91}
                alt="Divider"
              />
              <div className={styles.div82}>
                <div className={styles.div83}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/af620d307673cd0e207e39763a3370cb64e5912d2e57b7ea31a250bbea051c6f?placeholderIfAbsent=true"
                    className={styles.img92}
                    alt="Icon"
                  />
                  <span className={styles.kpIandEmployee}>
                    KPI and Employee Statistics
                  </span>
                  <p className={styles.createadesign}>
                    Create a design that displays KPIs
                    <br />
                    and employee statistics
                  </p>
                </div>
                <div className={styles.div84}>
                  <div className={styles.groups34}>
                    Feb 14, 2024-Feb 1, 2024
                  </div>
                  <div className={styles.groups35}>
                    <div className={styles.button20}>
                      <div className={styles.background29}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/068a10d2f29acaf2b37af6f77f165e8470c51ef23a1e5e381d5f6482350f0ca8?placeholderIfAbsent=true"
                          className={styles.img93}
                          alt="Icon"
                        />
                        <span>Dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/46a39b6a609f90c676f1b67ce9a8c27a3af14dcc59bd7fac3be7d2840cf8a53b?placeholderIfAbsent=true"
              className={styles.img94}
              alt="Icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5e54706544c1aa613b4ce2ed15ec8d554c44bc2e873865ef6ff0fab609d20f51?placeholderIfAbsent=true"
              className={styles.img95}
              alt="Icon"
            />
          </div>
          <div className={styles.div85}>
            <div className={styles.groups36}>
              <div className={styles.button21}>
                <div className={styles.background30}>Low</div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5fdc736953fbde717ba4f128df06182512b5c7a53fa8c28fcef61cd37c36f13f?placeholderIfAbsent=true"
              className={styles.img96}
              alt="Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InProgressColumn;
