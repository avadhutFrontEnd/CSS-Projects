"use client";
import React from "react";
import styles from "./TaskBoard.module.css";
import TaskHeader from "./TaskHeader";
import TaskGroup from "./TaskGroup";
import StatusBadge from "./StatusBadge";

const TaskBoard: React.FC = () => {
  return (
    <section className={styles.taskBoard}>
      <header className={styles.boardHeader}>
        <div className={styles.topBar}>
          <div className={styles.viewOptions}>
            <button className={styles.viewButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a7d469096fbf867a6177d408be89bedd49678331d85bb7e37df28fe1710c747e?placeholderIfAbsent=true"
                className={styles.viewIcon}
                alt=""
              />
              <span>Spreadsheet</span>
            </button>
            <div className={styles.viewTabs}>
              <button className={styles.viewTab}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/6d9f510fa558dacbc928f18c312c458955a7268bc3e5ff111d209da90aa35db3?placeholderIfAbsent=true"
                  className={styles.viewIcon}
                  alt=""
                />
                <span>Timeline</span>
              </button>
              <button className={styles.viewTab}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2f4d497b56753e07d3a627040fb4f6edf7f73d3cf91bda1c6d8082d46ab9df39?placeholderIfAbsent=true"
                  className={styles.viewIcon}
                  alt=""
                />
                <span>Calendar</span>
              </button>
              <button className={styles.viewTab}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d2100ec2ecb829aaf2c27d6e4072a24902a7865bb60feb8a23d78d648c453a29?placeholderIfAbsent=true"
                  className={styles.viewIcon}
                  alt=""
                />
                <span>Board</span>
              </button>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/18a0d8699872aa26f31dd4dcbfbbbfad08b412be00d2bda5f31864c7caeac393?placeholderIfAbsent=true"
              className={styles.profileImage}
              alt="Profile"
            />
          </div>

          <div className={styles.searchArea}>
            <div className={styles.searchBox}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/601a3d3504266ef1512bf74d1495f3053af36d69795e6d9eb30c2f6843e25daa?placeholderIfAbsent=true"
                className={styles.searchIcon}
                alt="Search"
              />
              <span className={styles.searchPlaceholder}>Search task....</span>
            </div>
            <button className={styles.filterButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e57199044e92b5230ac58be91c44256d8c65ea043f2b9555e81e3dd296a0417a?placeholderIfAbsent=true"
                className={styles.filterIcon}
                alt=""
              />
              <span>Filter</span>
            </button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9bfb88f628ca3e8f6603d6e82a244bd826eba726be70da4309eea797b49cf37a?placeholderIfAbsent=true"
              className={styles.userAvatar}
              alt="User"
            />
          </div>
        </div>

        <div className={styles.statusBar}>
          <StatusBadge
            type="inProgress"
            icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/062f4390b3c704779847ea5df4e94fbb15df094bbf945277def5e3a83fe49d57?placeholderIfAbsent=true"
            label="In Progress"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/87648fdf11e68e5561b242593e7d72fe1b3b8af95cafd459879e9cfbd7446313?placeholderIfAbsent=true"
            className={styles.statusArrow}
            alt=""
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d774fbee32337e54448f494f731e9532128702607a98728726cba624fc5ac479?placeholderIfAbsent=true"
            className={styles.statusIcon}
            alt=""
          />
        </div>
      </header>

      <TaskHeader />

      <div className={styles.taskGroups}>
        <TaskGroup
          title="Wireframing"
          count={3}
          tasks={[
            {
              id: "1",
              title: "Create wireframe for Dashboard page",
              assignee: "TB",
              dueDate: "February 12, 2024",
              priority: "urgent",
              progress: 85,
            },
            {
              id: "2",
              title: "Create wireframe for analytics page",
              assignee: "TB",
              dueDate: "February 12, 2024",
              priority: "urgent",
              progress: 100,
            },
            {
              id: "3",
              title: "Create wireframe for messages page",
              assignee: "TB",
              dueDate: "February 12, 2024",
              priority: "normal",
              progress: 34,
            },
          ]}
        />

        <TaskGroup
          title="Hi-Fi Design"
          count={3}
          tasks={[
            {
              id: "4",
              title: "Create hi-fi design 3 main screen",
              assignee: "TB",
              dueDate: "February 14, 2024",
              priority: "low",
              progress: 20,
            },
            {
              id: "5",
              title: "Create hi-fi a design Onboarding step by step.",
              assignee: "TB",
              dueDate: "February 14, 2024",
              priority: "low",
              progress: 20,
            },
            {
              id: "6",
              title: "Create hi-fi a design a login screen step by step.",
              assignee: "TB",
              dueDate: "February 14, 2024",
              priority: "low",
              progress: 20,
            },
            {
              id: "7",
              title: "Create hi-fi a design a sign up screen step by step.",
              assignee: "HG",
              dueDate: "February 14, 2024",
              priority: "low",
              progress: 20,
            },
          ]}
        />

        <div className={styles.addTaskButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/864548c6a375e6b8b1f1dff0e5623df634c82cb45d54d0764731d92ddb202104?placeholderIfAbsent=true"
            className={styles.addIcon}
            alt=""
          />
          <span>Add task</span>
        </div>

        <hr className={styles.divider} />

        <div className={styles.readySection}>
          <StatusBadge
            type="ready"
            icon="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8c28791c01cb178501376a094e46efecbf5e4dee66c495f73a7292528603797d?placeholderIfAbsent=true"
            label="Ready to check by PM"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/3b92180331e8dc973579e9ebf6afb9b2c35c61487f49dee1ca32ed23d8843e0b?placeholderIfAbsent=true"
            className={styles.readyArrow}
            alt=""
          />
          <div className={styles.readyCount}>2</div>
        </div>

        <TaskHeader isSecondary />

        <div className={styles.completedTasks}>
          {/* Completed tasks would go here - similar structure to TaskGroup */}
          <button className={styles.addTaskButton}>Add task</button>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
