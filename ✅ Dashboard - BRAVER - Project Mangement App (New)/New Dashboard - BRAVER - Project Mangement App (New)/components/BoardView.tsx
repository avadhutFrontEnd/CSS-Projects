import React from "react";
import styles from "./Dashboard.module.css";
import BoardColumn from "./BoardColumn";
import TaskCard from "./TaskCard";
import NewTaskButton from "./NewTaskButton";

const BoardView: React.FC = () => {
  return (
    <div className={styles.div7}>
      <div className={styles.div8}>
        <BoardColumn title="TODO" count={2} color={styles.div13} />

        <BoardColumn title="IN WORK" count={4} color={styles.div18} />

        <BoardColumn title="QA" count={8} color={styles.div23} />

        <BoardColumn title="COMPLETED" count={3} color={styles.div28} />
      </div>

      <div className={styles.div29}>
        <div className={styles.div}>
          <div className={styles.column3}>
            <div className={styles.div30}>
              <div className={styles.div31}>
                <div className={styles.div}>
                  <div className={styles.column4}>
                    <div className={styles.div32} />
                  </div>
                  <div className={styles.column5}>
                    <TaskCard
                      title="Slack Integration"
                      description="Add a field in the portal to let the user connect their Slack account."
                      tag="Development"
                      tagColor="blue"
                      avatar="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/88fd183c4d52e8b52958e5dbd343f19788b52ecb033d243e18f8ee404ffa5ec5?placeholderIfAbsent=true"
                      comments={8}
                      files={3}
                      dueDate="Tomorrow"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.div41}>
                <div className={styles.div}>
                  <div className={styles.column6}>
                    <TaskCard
                      title="Moodboards"
                      images={[
                        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8a477da5f2248b39604c506fd5a79f6f7fdfbb5bf5a7b4fd751e9295737cb171?placeholderIfAbsent=true",
                        "https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/18f5a53dabefbe6f67bc1b977521f8064c380cf16fef7dbe6352f484c2245cf4?placeholderIfAbsent=true",
                      ]}
                      tag="UI Design"
                      tagColor="blue"
                      avatar="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2cf3e9f06d6aa66ff3b156ed724ade3ff71d6bc3ebec2175899fa19cd744b995?placeholderIfAbsent=true"
                      comments={2}
                      files={2}
                      dueDate="Nov 23"
                      isSquare={true}
                    />
                  </div>
                  <div className={styles.column7}>
                    <TaskCard
                      title="Copywriting of the app"
                      description="Composing words to provide people with decision-making clarity when interacting with a product."
                      tag="UX Writing"
                      tagColor="orange"
                      avatar="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a1399f843a01146e350484b995bde45a10e61c85ceeec11a958602195fba360f?placeholderIfAbsent=true"
                      comments={8}
                      dueDate="Nov 30"
                    />

                    <TaskCard
                      title="Implement Apps"
                      tag="Development"
                      tagColor="blue"
                      avatar="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ac60bb9566243813f6eac3693f9e346f66512df8094a8877f615c07cca4b0045?placeholderIfAbsent=true"
                      comments={2}
                      files={2}
                      isSecondary={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.column8}>
            <div className={styles.div69}>
              <div className={styles.div70}>
                <div className={styles.div}>
                  <div className={styles.column9}>
                    <TaskCard
                      title="Dashboard Design"
                      image="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b5c9bdcd2c71cc74d7ebb8f459eacc34e48c86d0111b586a9d7a74a5b3f3ec80?placeholderIfAbsent=true"
                      tag="UI Design"
                      tagColor="blue"
                      avatar="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e6f56ca2a3732a24a99c1bd7b0aae8b410c97b98306eff5bf75d64b073c283cc?placeholderIfAbsent=true"
                      comments={5}
                      files={1}
                      inProgress={2}
                      isSquare={true}
                    />

                    <TaskCard
                      title="Design System"
                      description="Create a consistent look and feel both on web and mobile."
                      tag="UI Design"
                      tagColor="blue"
                      avatar="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dade27b601e54730fc53d6f239cd318a3cadd491a63901c102e4396b76ef2969?placeholderIfAbsent=true"
                      comments={10}
                      files={2}
                      inProgress={10}
                      isSecondary={true}
                    />
                  </div>

                  <div className={styles.column10}>
                    <TaskCard
                      title="Presentation"
                      description="Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan."
                      tag="Planning"
                      tagColor="green"
                      avatar="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7d1c095c217f95a89ba25d94d2bbdbd73822b6bb0a825d829ff5bb0f0e749a50?placeholderIfAbsent=true"
                      comments={11}
                      files={3}
                      isDone={true}
                    />

                    <TaskCard
                      title="Brainstorming"
                      tag="Research"
                      tagColor="purple"
                      avatar="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/22cdc88b7e910f623f6536dec98367d638dabe551753d685d274d955a0c61eb9?placeholderIfAbsent=true"
                      comments={21}
                      isDone={true}
                      isSecondary={true}
                    />
                  </div>
                </div>
              </div>

              <NewTaskButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardView;
