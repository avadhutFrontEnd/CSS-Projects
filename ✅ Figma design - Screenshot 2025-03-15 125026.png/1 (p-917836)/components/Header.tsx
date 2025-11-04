import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  isSecondary?: boolean;
}

function Header({ isSecondary = false }: HeaderProps) {
  if (isSecondary) {
    return (
      <header className={styles.secondaryHeader}>
        <div className={styles.userGroup}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/974e89088410cd23621bc7a183e6e8dab09e9ebd953c8ff8890b9517a488cef1?placeholderIfAbsent=true"
            className={styles.menuIcon}
            alt="Menu"
          />

          <button className={styles.userButton}>
            <div className={styles.userButtonBackground}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1e349040bc1aea9af36f0faef5d569c7704e8a0c588c77d6117e06868ccc2de7?placeholderIfAbsent=true"
                className={styles.userAvatar}
                alt="User avatar"
              />
              <span className={styles.userName}>Armin A.</span>
            </div>
          </button>

          <button className={styles.userButton}>
            <div className={styles.userButtonBackground}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fb27a18e80e46c963a0558f0d638ab849f65da9e12c952a2dbbee658f2fe9f9b?placeholderIfAbsent=true"
                className={styles.userAvatar}
                alt="User avatar"
              />
              <span className={styles.userName}>Eren Y.</span>
            </div>
          </button>

          <button className={styles.userButton}>
            <div className={styles.userButtonBackground}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/87a6213fe643343ccefa5b234b102719e3c5e1a0abc5336c672fdc0cb8cfd636?placeholderIfAbsent=true"
                className={styles.userAvatar}
                alt="User avatar"
              />
              <span className={styles.userName}>Mikasg A.</span>
            </div>
          </button>

          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/aa6ec27b80d0b066e5816bd564b5174dface90997d9e72a352ba105ddc0eb70a?placeholderIfAbsent=true"
            className={styles.menuIcon}
            alt="Menu"
          />
        </div>

        <div className={styles.actionGroup}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fe36fc26254139baa11e8959467b995ec9ad37b3d93162a51ea5edc515e8d8aa?placeholderIfAbsent=true"
            className={styles.actionIcon}
            alt="Action"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/bdd156a137fc64b08a8650c9673387b7ce124e14c6c5aadbcd91e6e07bc9254f?placeholderIfAbsent=true"
            className={styles.actionIcon}
            alt="Action"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/511993887154239785941f459c4810b0d81c474ceb9d54f08c25e8ee0af68ce1?placeholderIfAbsent=true"
            className={styles.actionIcon}
            alt="Action"
          />
        </div>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1f2075ff8d7b3e0d71cd5cf820f267cf0c638bc60194fbafc65b25e810557db1?placeholderIfAbsent=true"
          className={styles.logo}
          alt="Logo"
        />
        <h1 className={styles.logoText}>Codename.com</h1>
      </div>

      <div className={styles.searchContainer}>
        <div className={styles.searchBackground}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4f5291e12de19ea18af95a13003ae0f0f4f32819058bbd586064d3093cf34bb0?placeholderIfAbsent=true"
            className={styles.searchIcon}
            alt="Search"
          />
          <span className={styles.searchPlaceholder}>
            Try searching &quot;insights&quot;
          </span>
        </div>
      </div>

      <div className={styles.userControls}>
        <div className={styles.notificationContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0b91048717df556f5dcbac481dd31627442e833f119843d056112842c2af7e33?placeholderIfAbsent=true"
            className={styles.notificationBackground}
            alt="Notification background"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9f4b3adbb24fe8e47c2cd1173d13dffd167b4e0bc5258133dd307aa442c88fbc?placeholderIfAbsent=true"
            className={styles.notificationIcon}
            alt="Notification"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/09b3f96c3802aecf2db447dc45958e7ad38bd45e75d7ba4fffd31890b573f476?placeholderIfAbsent=true"
            className={styles.notificationImage}
            alt="Notification"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fc4dad8831507f7b386b3cdabebf0cc7d4fe2390ee877f5aee5e4b8915b837df?placeholderIfAbsent=true"
          className={styles.userAvatar}
          alt="User avatar"
        />
      </div>
    </header>
  );
}

export default Header;
