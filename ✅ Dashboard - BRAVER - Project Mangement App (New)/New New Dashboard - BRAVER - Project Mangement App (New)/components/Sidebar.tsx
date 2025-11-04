import React from "react";
import styles from "./Dashboard.module.css";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.column}>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <div className={styles.mark} />
          <h1 className={styles.braver}>Braver</h1>
        </div>

        <div className={styles.sidemenuheader}>
          <div className={styles.avatardescription}>
            <div className={styles.avatar}>CP</div>
            <div className={styles.paragraphcontainer}>
              <h2 className={styles.daveJones}>Company Project</h2>
              <p className={styles.members}>12 Members</p>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f9336371425f457982c4857c943c87a4f410bc43c0a5579bb852c50dd32c50b8?placeholderIfAbsent=true"
            alt="Menu icon"
            className={styles.img}
          />
        </div>

        <nav className={styles.div4}>
          <section className={styles.sections}>
            <header className={styles.sidemenusectioninteraction}>
              <h3 className={styles.text}>MAIN MENU</h3>
              <div className={styles.iconplaceholder} />
            </header>

            <ul>
              <li className={styles.sidemenusection}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a78e9ee5079a2c9dbcd405d46886e029a7546b7cf931cc4f78aadac3ffeca278?placeholderIfAbsent=true"
                  alt="Home icon"
                  className={styles.img2}
                />
                <span className={styles.text2}>Home</span>
                <div className={styles.div5} />
              </li>
              <li className={styles.sidemenusection2}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a800a8cdbb71a7b1c977541bd8239e2a4e903b0fad1cdd3a42dde5012e5b357e?placeholderIfAbsent=true"
                  alt="Task icon"
                  className={styles.img3}
                />
                <span className={styles.text}>My Task</span>
              </li>
              <li className={styles.sidemenusection3}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0880f8d1820996a2b81b367472dd7805c63004a015dffc931807ab873b62bed8?placeholderIfAbsent=true"
                  alt="Inbox icon"
                  className={styles.img4}
                />
                <span className={styles.text3}>Inbox</span>
                <span className={styles.notificationCounter}>9</span>
              </li>
              <li className={styles.sidemenusection4}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c96ad5cc5231936ce0f068aeee92b27e29ce1ea418a6a43289c0ad8d45b48479?placeholderIfAbsent=true"
                  alt="Analyze icon"
                  className={styles.img5}
                />
                <span className={styles.text}>Analyze</span>
              </li>
              <li className={styles.sidemenusection5}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/313d56a28ec97487fa11ee1d7b12dee948a11777503460c72bbaf402c4320f15?placeholderIfAbsent=true"
                  alt="Members icon"
                  className={styles.img6}
                />
                <span className={styles.text}>Members</span>
              </li>
              <li className={styles.sidemenusection6}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/74b70dd677c344ce49a13898815b0af582f9207b50ee800287e8fa358b654b81?placeholderIfAbsent=true"
                  alt="Settings icon"
                  className={styles.img7}
                />
                <span className={styles.text}>Settings</span>
              </li>
            </ul>
          </section>

          <section className={styles.sections2}>
            <header className={styles.sidemenusectioninteraction2}>
              <h3 className={styles.text}>WORKSPACE</h3>
              <div className={styles.iconplaceholder} />
            </header>

            <ul>
              <li className={styles.sidemenudropdown}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f1c8336abd8cacfa56b2bb6a83e248dcf8756bad5304d50373c1d6ea4e5516c8?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className={styles.img8}
                />
                <span className={styles.text}>Landing Page Company</span>
              </li>
              <li className={styles.sidemenudropdown}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a1ba78c1d635dd16c712cca9c59f4034510b0cf1ce8935deddbdc16937e73554?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className={styles.img9}
                />
                <span className={styles.text}>Dashboard Rumah Sakit</span>
              </li>
              <li className={styles.sidemenudropdown}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/381ffae2508b2cddeeab41754a3160399ed62de850f40b49453318843a570fdb?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className={styles.img10}
                />
                <span className={styles.text}>Ramadhan App</span>
              </li>
              <li className={styles.sidemenudropdown}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/41fc4de37900a5e58e1d49d4695e14c72cc0e5e8d3a01ba563bbcbc48e651092?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className={styles.img11}
                />
                <span className={styles.text}>Real Estate Agency</span>
              </li>
            </ul>
          </section>
        </nav>

        <button className={styles.newTask}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e7d9f13c22625d560daad1afe810c0333aa0b994884e8ea22ce038b5fcaa1cc8?placeholderIfAbsent=true"
            alt="Add project"
            className={styles.img12}
          />
          <span className={styles.addNewProject}>Add New Project</span>
        </button>

        <div className={styles.sidemenusection7}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a6c508ccb2d5d3202a54b901a41af61c618c9f38f2d62c8cc1c0d38218342307?placeholderIfAbsent=true"
            alt="User avatar"
            className={styles.img13}
          />
          <span className={styles.name}>Ibrahim Ahmad</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/324ed7b0a75549a7080aa25f4ec87c40d7cdb028eb74251159cdfcfa13bf1be6?placeholderIfAbsent=true"
            alt="Menu icon"
            className={styles.img}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
