import React from "react";
import styles from "./InputDesign.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.groups15}>
      <div className={styles.headerContent}>
        <div className={styles.breadcrumbs}>
          <div className={styles.navigationControls}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a7976507b32d3246efd5099686dac3a77608b07b047e1e0781a3520fc8a903d6?placeholderIfAbsent=true"
              className={styles.img19}
              alt="Back"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dde993355fb9828624a7b621bacf3f95a5754c0df64c4ea48737eb158e076c18?placeholderIfAbsent=true"
              className={styles.img20}
              alt="Forward"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2ddb09abac93849c742d09956f30ce2c7fa175a38168dbed3359f2bc33c256c7?placeholderIfAbsent=true"
              className={styles.img21}
              alt="Divider"
            />
          </div>

          <nav className={styles.breadcrumbPath}>
            <span className={styles.myPages}>My Pages/</span>
            <span className={styles.crafboardProjec2}>Crafboard Project</span>
          </nav>
        </div>

        <div className={styles.headerActions}>
          <button className={styles.newTabButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dddb83fc1c068c32adc047959fd5e3d71ab4b223a2b23ecc83c01b724af3e688?placeholderIfAbsent=true"
              className={styles.img22}
              alt="New tab icon"
            />
            <span>NewTab</span>
          </button>

          <div className={styles.actionIcons}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4762810dff2a58b69749548dca906297ae064b12250853ad0b8ba8184253cff1?placeholderIfAbsent=true"
              className={styles.img23}
              alt="Divider"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7328103061761a0b1c794c2aaaab56082da86f79ac139c93bd883568a03746b7?placeholderIfAbsent=true"
              className={styles.img24}
              alt="Action 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5829e55dba1e10ac8ae5fa8766c52a57442fee5a028104068bb9ff8901e79e57?placeholderIfAbsent=true"
              className={styles.img25}
              alt="Action 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8b3d14f5cebf9db4df2679cb8efbe9481b20ebfdcdf9c1557b6bd30f922e74e5?placeholderIfAbsent=true"
              className={styles.img26}
              alt="Action 3"
            />
          </div>
        </div>
      </div>

      <div className={styles.background9} />
    </header>
  );
};

export default Header;
