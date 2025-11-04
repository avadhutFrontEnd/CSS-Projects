"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import TaskSection from "./TaskSection";

const todoTasks = [
  {
    name: "Employee Details",
    description: "Create a page where there is information about employees",
    dateRange: "Feb 14, 2024-Feb 1, 2024",
    type: "Dashboard",
    people: [{ initials: "AL" }, { initials: "DT" }],
    priority: "Medium",
  },
  {
    name: "Darkmode version",
    description: "Darkmode version for all screens",
    dateRange: "Feb 14, 2024-Feb 1, 2024",
    type: "Mobile App",
    people: [{ initials: "AL" }, { initials: "DT" }],
    priority: "Low",
  },
  {
    name: "Super Admin Role",
    description: "-",
    dateRange: "Feb 14,2024-Feb 1, 2024",
    type: "Dashboard",
    people: [{ initials: "AL" }, { initials: "DT" }],
    priority: "Medium",
  },
];

const inProgressTasks = [
  {
    name: "Super Admin Role",
    description: "-",
    dateRange: "Feb 14, 2024-Feb 1, 2024",
    type: "Dashboard",
    people: [{ initials: "DT" }],
    priority: "High",
  },
  {
    name: "Settings Page",
    description: "-",
    dateRange: "Feb 14, 2024-Feb 1, 2024",
    type: "Mobile App",
    people: [{ initials: "AL" }, { initials: "DT" }],
    priority: "Medium",
  },
  {
    name: "KPI and Employee Statistics",
    description: "Create a design that displays KPIs and employee statistics",
    dateRange: "Feb 14, 2024-Feb 1, 2024",
    type: "Dashboard",
    people: [{ initials: "DT" }],
    priority: "Low",
  },
];

const inReviewTasks = [
  {
    name: "Customer Role",
    description: "-",
    dateRange: "Feb 14, 2024-Feb 1, 2024",
    type: "Dashboard",
    people: [{ initials: "AL" }, { initials: "DT" }],
    priority: "Medium",
  },
  {
    name: "Admin Role",
    description:
      "Set up with relevant information such as profile picture, phone number etc",
    dateRange: "Feb 14, 2024-Feb 1, 2024",
    type: "Mobile App",
    people: [{ initials: "AL" }, { initials: "DT" }],
    priority: "High",
  },
];

const InputDesign: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <TaskSection title="To-do" count={3} tasks={todoTasks} />
        <TaskSection title="On Progress" count={3} tasks={inProgressTasks} />
        <TaskSection title="In Review" count={2} tasks={inReviewTasks} />
      </main>
    </>
  );
};

export default InputDesign;
