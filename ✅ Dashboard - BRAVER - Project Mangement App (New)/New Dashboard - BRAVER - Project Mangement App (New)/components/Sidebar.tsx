import React from "react";
import styles from "./Dashboard.module.css";
import SidebarHeader from "./SidebarHeader";
import MenuSection from "./MenuSection";
import AddProject from "./AddProject";
import UserProfileFooter from "./UserProfileFooter";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.column}>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <div className={styles.mark} />
          <h1 className={styles.braver}>Braver</h1>
        </div>

        <SidebarHeader />

        <div className={styles.div4}>
          <MenuSection
            title="MAIN MENU"
            items={[
              {
                text: "Home",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a78e9ee5079a2c9dbcd405d46886e029a7546b7cf931cc4f78aadac3ffeca278?placeholderIfAbsent=true",
                active: true,
              },
              {
                text: "My Task",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a800a8cdbb71a7b1c977541bd8239e2a4e903b0fad1cdd3a42dde5012e5b357e?placeholderIfAbsent=true",
                active: false,
              },
              {
                text: "Inbox",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0880f8d1820996a2b81b367472dd7805c63004a015dffc931807ab873b62bed8?placeholderIfAbsent=true",
                active: false,
                notificationCount: 9,
              },
              {
                text: "Analyze",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c96ad5cc5231936ce0f068aeee92b27e29ce1ea418a6a43289c0ad8d45b48479?placeholderIfAbsent=true",
                active: false,
              },
              {
                text: "Members",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/313d56a28ec97487fa11ee1d7b12dee948a11777503460c72bbaf402c4320f15?placeholderIfAbsent=true",
                active: false,
              },
              {
                text: "Settings",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/74b70dd677c344ce49a13898815b0af582f9207b50ee800287e8fa358b654b81?placeholderIfAbsent=true",
                active: false,
              },
            ]}
          />

          <MenuSection
            title="WORKSPACE"
            items={[
              {
                text: "Landing Page Company",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f1c8336abd8cacfa56b2bb6a83e248dcf8756bad5304d50373c1d6ea4e5516c8?placeholderIfAbsent=true",
                isDropdown: true,
              },
              {
                text: "Dashboard Rumah Sakit",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a1ba78c1d635dd16c712cca9c59f4034510b0cf1ce8935deddbdc16937e73554?placeholderIfAbsent=true",
                isDropdown: true,
              },
              {
                text: "Ramadhan App",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/381ffae2508b2cddeeab41754a3160399ed62de850f40b49453318843a570fdb?placeholderIfAbsent=true",
                isDropdown: true,
              },
              {
                text: "Real Estate Agency",
                icon: "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/41fc4de37900a5e58e1d49d4695e14c72cc0e5e8d3a01ba563bbcbc48e651092?placeholderIfAbsent=true",
                isDropdown: true,
              },
            ]}
            isWorkspace={true}
          />
        </div>

        <AddProject />
        <UserProfileFooter />
      </div>
    </aside>
  );
};

export default Sidebar;
