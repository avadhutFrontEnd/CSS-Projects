import React from "react";
import styles from "./FinFlowDashboard.module.css";
import TransactionCard from "./TransactionCard";
import PremiumCard from "./PremiumCard";

const TransactionGrid: React.FC = () => {
  const transactions = [
    {
      id: 1,
      vendor: "Figma",
      vendorIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/72a24a30c071570b9fdab2d97600a28a2396d9a6",
      amount: "$112.00",
      frequency: "Annualy",
      description: "Paid for a corporate account for our te...",
      user: "Carl Jones",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ccb0b5a5d6f4c4b9ebadeeb62cc5926faf78ae0b",
      date: "11 Dec,18:32",
    },
    {
      id: 2,
      vendor: "PayPal",
      vendorIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d4b989e96d06532c7cc747fd256a600b7bedaebd",
      amount: "$10,478.00",
      frequency: "One-time",
      description: "Salaries for November",
      user: "Ann Meyer",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6c77882b5ed4da383a437bd9134b4aa085d98f34",
      date: "11 Dec,20:28",
    },
    {
      id: 3,
      vendor: "Adobe Creative Cloud",
      vendorIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/82deab8c67039c6bd61ee3339d87f9f156d5912d",
      amount: "$970.00",
      frequency: "Monthly",
      description: "Payment for Adobe software",
      user: "Carl Jones",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50bd889481532fe85f5fb202902c9eddf3e8a866",
      date: "11 Dec,22:13",
    },
    {
      id: 4,
      vendor: "Walmart",
      vendorIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3e1630e3005501a4c3eb6dec8b8c145cbeb7c445",
      amount: "$425.00",
      frequency: "Monthly",
      description: "Purchase of new equipment",
      user: "Nicholas Wade",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67a75f5c140f98d35fa2c193dff51fe5383c93d2",
      date: "11 Dec,16:07",
    },
    {
      id: 5,
      vendor: "Apple",
      vendorIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0de886a807859c10f16bcacca6bdeeefb70d1607",
      amount: "$4,718.52",
      frequency: "One-time",
      description: "Buying 3 new macbooks for the office",
      user: "Stacy Smith",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/527e3a8bd768e3a8e88138092adc6ef29e3f49da",
      date: "11 Dec,18:32",
    },
    // Premium card will be inserted here
    {
      id: 7,
      vendor: "Airbnb",
      vendorIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5562ee3ac0ccbdb03208480a707d142684683c31",
      amount: "$3012.64",
      frequency: "One-time",
      description: "Payment for apartments for employees",
      user: "Stacy Smith",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ddf502001626205e006faecb49d46c8a3d4fe51",
      date: "10 Dec,21:30",
    },
    {
      id: 8,
      vendor: "Uber",
      vendorIcon: "",
      amount: "$1200.00",
      frequency: "Monthly",
      description: "Taxi expenses for employees",
      user: "Nicholas Wade",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5e9e003513f4dc1ed95fc539aba02942e363fe57",
      date: "9 Dec,18:32",
      isTextLogo: true,
    },
    {
      id: 9,
      vendor: "Dribbble",
      vendorIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/361b3571e73ece88637a2f9df420c0a185f87090",
      amount: "$292.00",
      frequency: "Annually",
      description: "Payment for a corporate account",
      user: "Carl Jones",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/886ed5c6d523fcf6f7d1f2b3e547d70067207fa8",
      date: "11 Dec,15:07",
    },
    {
      id: 10,
      vendor: "PayPal",
      vendorIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/03788b17f9ab1296b19150c4aeb0f7085ee73265",
      amount: "$11,018.00",
      frequency: "One-time",
      description: "Salaries for October",
      user: "Ann Meyer",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bf7fa1472ebd506d673ec6cf3f28d56dfa809218",
      date: "9 Dec,21:19",
    },
    {
      id: 11,
      vendor: "American Airlines",
      vendorIcon: "",
      amount: "$316.00",
      frequency: "",
      description: "Payment for the fligh",
      user: "Stacy Smith",
      userAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f489adae7c47964afa560a795013ee71f8aeb6c9",
      date: "",
    },
  ];

  return (
    <div className={styles.transactionGrid}>
      {transactions.map((transaction, index) => {
        // Insert premium card at position 6
        if (index === 5) {
          return <PremiumCard key="premium" />;
        }
        return (
          <TransactionCard
            key={transaction.id}
            vendor={transaction.vendor}
            vendorIcon={transaction.vendorIcon}
            amount={transaction.amount}
            frequency={transaction.frequency}
            description={transaction.description}
            user={transaction.user}
            userAvatar={transaction.userAvatar}
            date={transaction.date}
            isTextLogo={transaction.isTextLogo}
          />
        );
      })}
    </div>
  );
};

export default TransactionGrid;
