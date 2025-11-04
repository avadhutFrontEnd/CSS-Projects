"use client";
import React from "react";
import styles from "./FinFlowDashboard.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import StatusBar from "./StatusBar";
import TransactionCard from "./TransactionCard";
import PremiumCard from "./PremiumCard";

const FinFlowDashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <Sidebar />
      <main className={styles.mainContent}>
        <Header />
        <StatusBar />
        <section className={styles.transactionGrid}>
          <TransactionCard
            vendor="Figma"
            amount="$112.00"
            frequency="Annualy"
            description="Paid for a corporate account for our te..."
            userName="Carl Jones"
            date="11 Dec,18:32"
            vendorIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/72a24a30c071570b9fdab2d97600a28a2396d9a6"
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb0b5a5d6f4c4b9ebadeeb62cc5926faf78ae0b"
          />
          <TransactionCard
            vendor="PayPal"
            amount="$10,478.00"
            frequency="One-time"
            description="Salaries for November"
            userName="Ann Meyer"
            date="11 Dec,20:28"
            vendorIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d4b989e96d06532c7cc747fd256a600b7bedaebd"
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6c77882b5ed4da383a437bd9134b4aa085d98f34"
          />
          <TransactionCard
            vendor="Adobe Creative Cloud"
            amount="$970.00"
            frequency="Monthly"
            description="Payment for Adobe software"
            userName="Carl Jones"
            date="11 Dec,22:13"
            vendorIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/82deab8c67039c6bd61ee3339d87f9f156d5912d"
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/50bd889481532fe85f5fb202902c9eddf3e8a866"
          />
          <TransactionCard
            vendor="Burger King"
            amount="$90.72"
            frequency="One-time"
            description="Lunch payment"
            userName="Nicholas Wade"
            date="11 Dec,19:02"
            vendorIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bc1c3a82c32b97b22042e386e5352a1bfb2e62fe"
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cfe50d4422f844c2804f1fdf1d79acc3402d6a80"
          />
          <TransactionCard
            vendor="Payoneer"
            amount="$3500.00"
            frequency="Annually"
            description="Marketing Budget of 2024"
            userName="Ann Meyer"
            date="10 Dec,17:26"
            vendorIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cf97d8e5b09017b0503939a8fec95802b34ed06a"
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/579b1a7c493a0c42839f81c6b68d106d64f9c849"
          />
          <TransactionCard
            vendor="Shutterstock"
            amount="$200.00"
            description="Buying images for a p"
            userName="Carl Jones"
            simple
            vendorIconUrl=""
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/80dd290df441224ad221ec5b04c6907283f97560"
          />
          <PremiumCard />
          <TransactionCard
            vendor="Airbnb"
            amount="$3012.64"
            frequency="One-time"
            description="Payment for apartments for employees"
            userName="Stacy Smith"
            date="10 Dec,21:30"
            vendorIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5562ee3ac0ccbdb03208480a707d142684683c31"
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6ddf502001626205e006faecb49d46c8a3d4fe51"
          />
          <TransactionCard
            vendor="Uber"
            amount="$1200.00"
            frequency="Monthly"
            description="Taxi expenses for employees"
            userName="Nicholas Wade"
            date="9 Dec,18:32"
            vendorIconUrl=""
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5e9e003513f4dc1ed95fc539aba02942e363fe57"
            badge="Uber"
          />
          <TransactionCard
            vendor="Dribbble"
            amount="$292.00"
            frequency="Annually"
            description="Payment for a corporate account"
            userName="Carl Jones"
            date="11 Dec,15:07"
            vendorIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/361b3571e73ece88637a2f9df420c0a185f87090"
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/886ed5c6d523fcf6f7d1f2b3e547d70067207fa8"
          />
          <TransactionCard
            vendor="PayPal"
            amount="$11,018.00"
            frequency="One-time"
            description="Salaries for October"
            userName="Ann Meyer"
            date="9 Dec,21:19"
            vendorIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/03788b17f9ab1296b19150c4aeb0f7085ee73265"
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bf7fa1472ebd506d673ec6cf3f28d56dfa809218"
          />
          <TransactionCard
            vendor="American Airlines"
            amount="$316.00"
            description="Payment for the fligh"
            userName="Stacy Smith"
            simple
            vendorIconUrl=""
            userAvatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f489adae7c47964afa560a795013ee71f8aeb6c9"
          />
        </section>
      </main>
    </div>
  );
};

export default FinFlowDashboard;
