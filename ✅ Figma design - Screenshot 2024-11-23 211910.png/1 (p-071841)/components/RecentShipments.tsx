import React from "react";
import styles from "./RecentShipments.module.css";

const shipmentData = [
  {
    id: "XY 78842",
    name: "Chris Nolan",
    route: "Osaka Tokyo",
    duration: "20h 20m",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ee8cac3988a30443945ac92ca3e19ae572ab5ba1",
  },
  {
    id: "BK 74254",
    name: "Safar Nao",
    route: "Haneda Osaka",
    duration: "21h 20m",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/85d3c481a6aaecd739d601d9a30065daf56059e8",
  },
  {
    id: "AH 53294",
    name: "Ibrahim Ali",
    route: "Tokyo →Nagasaki",
    duration: "18h 20m",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/31b9cdb91120d4d83f2d60edc206ed96bc63484c",
  },
  {
    id: "DH73456",
    name: "Mick Tison",
    route: "Osaka - Tokyo",
    duration: "14h 20m",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/75384d8d625be82718db06e5e74f557da8f05ca2",
  },
];

const RecentShipments: React.FC = () => {
  return (
    <section className={styles.shipmentsCard}>
      <header className={styles.shipmentsHeader}>
        <h2 className={styles.shipmentsTitle}>Recent Shipment</h2>
        <p className={styles.shipmentsSubtitle}>
          Latest shipment transportation
        </p>
      </header>
      <table className={styles.shipmentsTable}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>#</th>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Route</th>
            <th className={styles.tableHeader}>Durations</th>
          </tr>
        </thead>
        <tbody>
          {shipmentData.map((shipment, index) => (
            <tr key={index}>
              <td className={styles.tableCell}>
                <img
                  src={shipment.imageUrl}
                  alt="Shipment"
                  className={styles.shipmentImage}
                />
              </td>
              <td className={styles.tableCell}>{shipment.id}</td>
              <td className={styles.tableCell}>{shipment.name}</td>
              <td className={styles.tableCell}>{shipment.route}</td>
              <td className={styles.tableCell}>{shipment.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RecentShipments;
