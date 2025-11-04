"use client";
import React from "react";
import styles from "./ShipmentTable.module.css";

const ShipmentTable: React.FC = () => {
  return (
    <section className={styles.tableSection}>
      <div className={styles.tableHeader}>
        <div className={styles.headerLeft}>
          <h3 className={styles.tableTitle}>Recent Activities</h3>
          <div className={styles.filterButtons}>
            <button className={styles.filterButton}>
              <div className={styles.filterButtonBg}>All</div>
            </button>
            <button className={styles.statusButton}>Delivered</button>
            <button className={styles.statusButton}>In transit</button>
            <button className={styles.statusButton}>Pending</button>
            <button className={styles.statusButton}>Processing</button>
          </div>
        </div>

        <div className={styles.headerRight}>
          <button className={styles.customizeButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1e07c1f95b770b272a32da8a5d3b4b75fb394fed9e496151915b8ff715a5e946?placeholderIfAbsent=true"
              className={styles.customizeIcon}
              alt="Customize"
            />
            <span>Customize</span>
          </button>

          <div className={styles.pagination}>
            <span className={styles.paginationText}>1-10 of 40</span>
            <button className={styles.paginationButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f8bcfba6521576643469a03f7c044fc8addd4a3a6d81cadaf064d5f1e03f9e20?placeholderIfAbsent=true"
                className={styles.paginationIcon}
                alt="Previous page"
              />
            </button>
            <button className={styles.paginationButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5592db704beab19d7ebc65d5f3f87e4cd3adb5afe4abd8b3138bb05808a58e1d?placeholderIfAbsent=true"
                className={styles.paginationIcon}
                alt="Next page"
              />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.tableColumnHeaders}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2950aa7de4b402d3792052adf3ddd43ed5d148da048bb63ef50f4c1ea78bb1d4?placeholderIfAbsent=true"
          className={styles.backgroundImage}
          alt=""
        />

        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>Order ID</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dc88317a2e2f5834c568e9ae1f1cb2d9ea765eeaaf24d39159ef23faf66f4965?placeholderIfAbsent=true"
            className={styles.sortIcon}
            alt="Sort"
          />
        </div>

        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>Category</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7885f94dd08bb49b83ddea78abb998a1806210264c702d25cfdfd12d8aaf3d8e?placeholderIfAbsent=true"
            className={styles.sortIcon}
            alt="Sort"
          />
        </div>

        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>Weight</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8a2508a69e08e1d23d17ce6836ca1482d57c6da4df0ba1843b0dac6383539674?placeholderIfAbsent=true"
            className={styles.sortIcon}
            alt="Sort"
          />
        </div>

        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>Company</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/50da2392b0bda7d59593cf0ed702e7f70af2286bdc753402d803f921dff3de47?placeholderIfAbsent=true"
            className={styles.sortIcon}
            alt="Sort"
          />
        </div>

        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>Arrival time</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/262acdc48c8d5635d921fcda7caf426ae4873a9c2fd5f13ce62abac856be55c1?placeholderIfAbsent=true"
            className={styles.sortIcon}
            alt="Sort"
          />
        </div>

        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>Route</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0c4aaa29741245da99c70d634e10f708216445d74275de7f22f369f632e51639?placeholderIfAbsent=true"
            className={styles.sortIcon}
            alt="Sort"
          />
        </div>

        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>Shipper</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2d602856027bbab7f0d84a71b510a3e8910e5292b36a03dd938a0234898608a2?placeholderIfAbsent=true"
            className={styles.sortIcon}
            alt="Sort"
          />
        </div>

        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>Price</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/220bb31c2ba13da0210b64eca0e671c62ef6531336ed6e850cdc61f2d11515b3?placeholderIfAbsent=true"
            className={styles.sortIcon}
            alt="Sort"
          />
        </div>

        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>Status</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fcdfff50bd2c49ea2686dc14f4d33d2729e3a6ff5f58bdf4ed4ef8fae85b7430?placeholderIfAbsent=true"
            className={styles.sortIcon}
            alt="Sort"
          />
        </div>
      </div>

      <div className={styles.tableBody}>
        <div className={styles.tableRow}>
          <div className={styles.orderIdCell}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f965c48236471f923705947abbc6963c9997b710f44ec3a9e538f2c14faf5b87?placeholderIfAbsent=true"
              className={styles.orderIcon}
              alt="Order"
            />
            <span className={styles.orderId}>#10986-08-778sg</span>
          </div>

          <div className={styles.tableRowData}>
            <span className={styles.categoryCell}>Electronic</span>
            <span className={styles.weightCell}>2.600t</span>
            <span className={styles.companyCell}>Generic SO.</span>
            <span className={styles.arrivalCell}>6th July, 2023</span>
            <span className={styles.routeCell}>London-Prague</span>
            <span className={styles.shipperCell}>DHL</span>
            <span className={styles.priceCell}>$5,678,00</span>
            <div className={styles.statusCell}>
              <button className={styles.deliveredButton}>
                <div className={styles.deliveredButtonBg}>Delivered</div>
              </button>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/784940e9c5907c4d8085629fdcbd9033ae6ce8089ec023b549b888fb7d383eaf?placeholderIfAbsent=true"
              className={styles.moreIcon}
              alt="More options"
            />
          </div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.orderIdCell}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a5cd316e51b3d35a8b9233a6ffeb5565f187c6434d2abe61a208285876fcd60a?placeholderIfAbsent=true"
              className={styles.orderIcon}
              alt="Order"
            />
            <span className={styles.orderId}>#10568-12-873fwg</span>
          </div>

          <div className={styles.tableRowData}>
            <div className={styles.categoryGroup}>
              <span className={styles.categoryCell}>Building materials</span>
              <span className={styles.weightCell}>6,568t</span>
            </div>

            <div className={styles.detailsGroup}>
              <span className={styles.companyCell}>Abuilding CO.</span>
              <span className={styles.arrivalCell}>2th July,2023</span>
              <span className={styles.routeCell}>Berlin-Poznan</span>
              <span className={styles.shipperCell}>Amazon</span>
              <span className={styles.priceCell}>$12,500,00</span>
              <div className={styles.statusCell}>
                <button className={styles.deliveredButton}>
                  <div className={styles.deliveredButtonBg}>Delivered</div>
                </button>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/4b4caa23b08e5b2f06433b9347e40f8a6e7c760d6168fd070598ad4dbf18662e?placeholderIfAbsent=true"
                className={styles.moreIcon}
                alt="More options"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipmentTable;
