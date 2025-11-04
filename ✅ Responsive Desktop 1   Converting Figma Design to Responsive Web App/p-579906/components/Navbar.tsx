"use client";
import React from "react";
import styles from "./Root.module.css";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.div3}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ffc1e3faee0bd1af80591583f7f4d89fe692b5b602c1cb6b7b0fd7e9c25b3359?placeholderIfAbsent=true"
          className={styles.img2}
          alt="Background"
        />
        <div className={styles.div4}>
          <div className={styles.div5}>
            <h2 className={styles.overview}>Overview</h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e00a0f03ffbed6379f3342a6013f60586053b5af987e41d815200ad04a314e3a?placeholderIfAbsent=true"
              className={styles.img3}
              alt="Overview icon"
            />
          </div>
          <button className={styles.button}>
            <div className={styles.background}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ef370b6508dfdb17330aec9d0f2ae8274c481ea564984a8f9c092ad74c75ee8e?placeholderIfAbsent=true"
                className={styles.img4}
                alt="Add icon"
              />
              <span>New deal</span>
            </div>
          </button>
        </div>
        <div className={styles.div6}>
          <div className={styles.text}>
            <div className={styles.background2}>
              <span className={styles.search}>Search</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/904cc162fd4847475505bd528280e918d2dead174fcbda00552dac341f07c7b1?placeholderIfAbsent=true"
                className={styles.img5}
                alt="Search icon"
              />
            </div>
          </div>
          <div className={styles.div7}>
            <div className={styles.div8}>
              <button className={styles.button2}>
                <div className={styles.background3}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c04b6d820e133e10631ba6bf3a914c11df4bee12fede9daf4af9e0ccb466b395?placeholderIfAbsent=true"
                    className={styles.img6}
                    alt="Sort icon"
                  />
                  <span>Sort</span>
                </div>
              </button>
              <button className={styles.button3}>
                <div className={styles.background4}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/144889959cd5aecd73efbda119b997962bb7f52b4c1219c755a8e7d2fb2f39eb?placeholderIfAbsent=true"
                    className={styles.img7}
                    alt="Filters icon"
                  />
                  <span>Filters</span>
                </div>
              </button>
            </div>
            <div className={styles.div9}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ae463d56783bd15215f687507e066adffb0097a4dda2497d910a2f82109bc154?placeholderIfAbsent=true"
                className={styles.img8}
                alt="Separator"
              />
              <button className={styles.button4}>
                <div className={styles.background5}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/97a87b42529cb1b4f6c6fd1cc97cc65b13a07f44d99e215b674369b9c26a8b77?placeholderIfAbsent=true"
                    className={styles.img9}
                    alt="Download icon"
                  />
                  <span className={styles.downloadreport}>Download report</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
