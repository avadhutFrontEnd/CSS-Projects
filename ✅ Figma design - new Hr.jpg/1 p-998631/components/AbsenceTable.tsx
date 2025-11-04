"use client";
import React, { useState } from "react";
import styles from "./AbsenceTable.module.css";
import AbsenceTableRow from "./AbsenceTableRow";
import StatusBadge from "./StatusBadge";

const AbsenceTable: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <section className={styles.tableSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b37d7e591693cc958ad0118e6329181958642430c0d6c978c553d47432616efd?placeholderIfAbsent=true"
        className={styles.tableBackground}
        alt="Background"
      />
      <header className={styles.tableHeader}>
        <h2 className={styles.tableTitle}>Upcoming Absence (8)</h2>
        <div className={styles.tableActions}>
          <div className={styles.filterAction}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1bb8a397915c0653a8cf4a78454997c547a25bd704c66649f16abf19b489ca55?placeholderIfAbsent=true"
              className={styles.filterIcon}
              alt="Filter icon"
            />
            <span>Add filter</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f44d66bb4cfce8af51aa39403d82a94de8b0cb08c90ef8e3faea86f271ecadaa?placeholderIfAbsent=true"
            className={styles.actionButtons}
            alt="Action buttons"
          />
        </div>
      </header>
      <div className={styles.divider} />

      <div className={styles.tableContainer}>
        <div className={styles.tableColumnHeaders}>
          <div className={styles.columnHeader}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dd61fe6f1798e18111e1616764868ca3553d12687641256eb3284e1c4eda36df?placeholderIfAbsent=true"
              className={styles.columnIcon}
              alt="Duration icon"
            />
            <span>DURATION</span>
          </div>
          <div className={styles.columnHeaderGroup}>
            <span className={styles.columnHeaderText}>#OF DAYS</span>
            <span className={styles.columnHeaderText}>TYPE</span>
            <span className={styles.columnHeaderText}>STATUS</span>
            <span className={styles.columnHeaderText}>PAID</span>
          </div>
        </div>

        <div className={styles.tableBody}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/450f039ec826855bf99d8cd43920f31d2ad4d6fb532a43c152a1dc60737882c8?placeholderIfAbsent=true"
            className={styles.tableBodyBackground}
            alt="Background"
          />

          <AbsenceTableRow
            duration="Jun 8—Jun 11,2023"
            days="4 Days"
            type="Sick Leave"
            typeClass={styles.sickLeaveType}
            typeIconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0d2f7cfeca54ee589ade7949685c11ecd0cfa4db0716f06d1156ceecedc97f91?placeholderIfAbsent=true"
            status="Pending"
            paid="60%"
          />

          <div className={styles.rowDivider} />

          <AbsenceTableRow
            duration="Sep 12—Jun 16,2023"
            days="5 Days"
            type="Vacation"
            typeClass={styles.vacationType}
            typeIconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/164f986cfe11718d54693027ab0052eaa3543f9523842cb912b315409bd21470?placeholderIfAbsent=true"
            status="Approved"
            paid="Yes"
          />

          <div className={styles.rowDivider} />

          <AbsenceTableRow
            duration="Oct 2—Oct3,2023"
            days="2 Days"
            type="Vacation"
            typeClass={styles.vacationType}
            typeIconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/93e522391ed28b790ab166c8515e2aa90f0aec7c04ce2a180ceb4b01e39de83d?placeholderIfAbsent=true"
            status="Requested"
            statusClass={styles.requestedStatus}
            paid="Yes"
          />

          <div className={styles.rowDivider} />

          <AbsenceTableRow
            duration="Nov 27,2023"
            days="1Day"
            type="Education"
            typeClass={styles.educationType}
            typeIconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1aea2cfb199990036e4b3786787b1b7ee7d12ce764bec0c0e2a0fac5f432b1a6?placeholderIfAbsent=true"
            status="Pending"
            paid="Yes"
          />

          <div className={styles.noteRow}>
            <AbsenceTableRow
              duration="Nov 28,2023"
              days="1Day"
              type="Education"
              typeClass={styles.educationType}
              typeIconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/764aee56f409e8953f0767cdb993daa5924e97efa92e2b540043a33d6e979184?placeholderIfAbsent=true"
              status="Requested"
              statusClass={styles.requestedStatus}
              paid="Yes"
            />
            <div className={styles.noteSection}>
              <div className={styles.noteLink}>
                <span className={styles.noteLinkText}>See note</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/00e98c72fddc9277ace22987b77655b2947de919c5ca8123723f79e09093b45c?placeholderIfAbsent=true"
                  className={styles.noteLinkIcon}
                  alt="Note icon"
                />
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/52a84615ebd8a3a6236a68c66a69982add0d8e4efd6aa3850e968eab35049cef?placeholderIfAbsent=true"
                className={styles.noteAvatar}
                alt="User avatar"
              />
            </div>
          </div>

          <AbsenceTableRow
            duration="Dec21—Dec 22,2023"
            days="2 Days"
            type="Vacation"
            typeClass={styles.vacationType}
            typeIconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/70473301b67335ccdc906d2de42dbf4c1aadda0967d2c68e3e982fa7e63aa542?placeholderIfAbsent=true"
            status="Approved"
            paid="Yes"
          />

          <div className={styles.rowDivider} />

          <AbsenceTableRow
            duration="Dec 27—Dec 30,2023"
            days="4 Days"
            type="Vacation"
            typeClass={styles.vacationType}
            typeIconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ad9624561a9e589384230e280c1ee7df790cedb6f49c1998ec75b73d69cd8542?placeholderIfAbsent=true"
            status="Approved"
            paid="Yes"
          />

          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/19fd4511ba68b7b5778cd8e2700f7206135a50a7f8c0216e88fb58bb9b4eac43?placeholderIfAbsent=true"
            className={styles.tableDivider}
            alt="Divider"
          />

          {showDropdown && (
            <div className={styles.actionDropdown}>
              <div className={styles.dropdownItem}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dbf66442d33aed8a92838d76a7ccca9027ed24a935cac9da4cf1b97b9659016d?placeholderIfAbsent=true"
                  className={styles.dropdownIcon}
                  alt="View icon"
                />
                <span className={styles.dropdownText}>View</span>
              </div>
              <div className={styles.dropdownItem}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/097a4dd77b328ebbc671eec09cf6945d111e03556e257e87e61aa40c476a3611?placeholderIfAbsent=true"
                  className={styles.dropdownIcon}
                  alt="Edit icon"
                />
                <span className={styles.dropdownText}>Edit</span>
              </div>
              <button className={styles.deleteButton}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c92c5dbb49f1a0a78dff1db09af7a88ae513acdf8053520ae2941722237b27a0?placeholderIfAbsent=true"
                  className={styles.deleteIcon}
                  alt="Delete icon"
                />
                <span className={styles.deleteText}>Delete</span>
              </button>
            </div>
          )}

          <AbsenceTableRow
            duration="Jan2, 2024"
            days="1Day"
            type="Vacation"
            typeClass={styles.vacationType}
            typeIconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b2cb6416347c745983e4272bca575302983a72143dc77d396823a077e8322770?placeholderIfAbsent=true"
            status="Requested"
            statusClass={styles.requestedStatus}
            paid="Yes"
            hasMenu={true}
            onMenuClick={toggleDropdown}
            menuIconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/342d956528b985f36089f67de8ada6bfb707a2f743093cbf5b35ee15630f1576?placeholderIfAbsent=true"
          />
        </div>
      </div>
    </section>
  );
};

export default AbsenceTable;
