"use client";
import React from "react";
import styles from "./Dashboard.module.css";
import StatusColumn from "./StatusColumn";
import ProjectCard from "./ProjectCard";

const BoardContent: React.FC = () => {
  return (
    <div className={styles.div7}>
      <div className={styles.div8}>
        <StatusColumn
          title="TODO"
          count={2}
          color={styles.div13}
          iconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ed36e6bc996919345738c79995c22fa4a75c039c060ee2ae0aaffea2d16db503?placeholderIfAbsent=true"
        />

        <StatusColumn
          title="IN WORK"
          count={4}
          color={styles.div18}
          iconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ed36e6bc996919345738c79995c22fa4a75c039c060ee2ae0aaffea2d16db503?placeholderIfAbsent=true"
        />

        <StatusColumn
          title="QA"
          count={8}
          color={styles.div23}
          iconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ed36e6bc996919345738c79995c22fa4a75c039c060ee2ae0aaffea2d16db503?placeholderIfAbsent=true"
        />

        <StatusColumn
          title="COMPLETED"
          count={3}
          color={styles.div28}
          iconSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9be3955d0707c9b5fbee4b055314ecff49b25da9730a85a7c2a5f1a5a024e191?placeholderIfAbsent=true"
        />
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
                    <ProjectCard
                      title="Slack Integration"
                      description="Add a field in the portal to let the user connect their Slack account."
                      tag="Development"
                      tagColor={styles.development}
                      avatarSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/88fd183c4d52e8b52958e5dbd343f19788b52ecb033d243e18f8ee404ffa5ec5?placeholderIfAbsent=true"
                      commentCount={8}
                      fileCount={3}
                      dueDate="Tomorrow"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.div41}>
                <div className={styles.div}>
                  <div className={styles.column6}>
                    <div className={styles.div42}>
                      <div className={styles.div43}>
                        <div className={styles.div44}>
                          <div className={styles.div45}>
                            <h3 className={styles.moodboards}>Moodboards</h3>
                            <div className={styles.div46}>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/8a477da5f2248b39604c506fd5a79f6f7fdfbb5bf5a7b4fd751e9295737cb171?placeholderIfAbsent=true"
                                alt="Moodboard preview 1"
                                className={styles.img24}
                              />
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/18f5a53dabefbe6f67bc1b977521f8064c380cf16fef7dbe6352f484c2245cf4?placeholderIfAbsent=true"
                                alt="Moodboard preview 2"
                                className={styles.img25}
                              />
                            </div>
                          </div>
                          <div className={styles.div47}>
                            <div className={styles.uiDesign}>UI Design</div>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/2cf3e9f06d6aa66ff3b156ed724ade3ff71d6bc3ebec2175899fa19cd744b995?placeholderIfAbsent=true"
                              alt="Assignee"
                              className={styles.img26}
                            />
                          </div>
                          <div className={styles.div48}>
                            <div className={styles.div49}>
                              <div className={styles.div50}>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5bd9ae5e1d3a7075c5c17ab133f9c98f9f9bc98faf6fb15649f94a96b0b96628?placeholderIfAbsent=true"
                                  alt="Comment icon"
                                  className={styles.img27}
                                />
                                <span className={styles.css22}>2</span>
                              </div>
                              <div className={styles.div51}>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/c7fcfe0c4223e197beb9738dec50642c114a9662cf5ab8200ad6b1b28720f708?placeholderIfAbsent=true"
                                  alt="File icon"
                                  className={styles.img28}
                                />
                                <span className={styles.css23}>2</span>
                              </div>
                            </div>
                            <div className={styles.div52}>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/07ec89193b4658ed8a75632cd9e3f3578dfcf7af5adb7c056572a1258abc6a5b?placeholderIfAbsent=true"
                                alt="Calendar icon"
                                className={styles.img29}
                              />
                              <span className={styles.nov23}>Nov 23</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.column7}>
                    <div className={styles.div53}>
                      <ProjectCard
                        title="Copywriting of the app"
                        description="Composing words to provide people with decision-making clarity when interacting with a product."
                        tag="UX Writing"
                        tagColor={styles.uxWriting}
                        avatarSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/a1399f843a01146e350484b995bde45a10e61c85ceeec11a958602195fba360f?placeholderIfAbsent=true"
                        commentCount={8}
                        dueDate="Nov 30"
                      />

                      <div className={styles.div61}>
                        <div className={styles.div62}>
                          <div className={styles.div63}>
                            <h3 className={styles.implementApps}>
                              Implement Apps
                            </h3>
                            <div className={styles.div64}>
                              <div className={styles.development}>
                                Development
                              </div>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ac60bb9566243813f6eac3693f9e346f66512df8094a8877f615c07cca4b0045?placeholderIfAbsent=true"
                                alt="Assignees"
                                className={styles.img33}
                              />
                            </div>
                          </div>
                          <div className={styles.div65}>
                            <div className={styles.div66}>
                              <div className={styles.div67}>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/1aeb1946b06103ae17bc226117f2b82851a761bdd8880df7a0c96ffab40fb0ee?placeholderIfAbsent=true"
                                  alt="Comment icon"
                                  className={styles.img34}
                                />
                                <span className={styles.comments}>
                                  2 comments
                                </span>
                              </div>
                              <div className={styles.div68}>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/fa4675d218c1a39606d4c70559cfe51b4bffc9c65e3b7cff877f0112c45a51fa?placeholderIfAbsent=true"
                                  alt="File icon"
                                  className={styles.img35}
                                />
                                <span className={styles.files}>2 files</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    <div className={styles.div71}>
                      <div className={styles.div72}>
                        <div className={styles.div73}>
                          <div className={styles.div74}>
                            <div className={styles.div75}>
                              <h3 className={styles.dashboardDesign}>
                                Dashboard Design
                              </h3>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/b5c9bdcd2c71cc74d7ebb8f459eacc34e48c86d0111b586a9d7a74a5b3f3ec80?placeholderIfAbsent=true"
                                alt="Dashboard preview"
                                className={styles.img36}
                              />
                            </div>
                            <div className={styles.div76}>
                              <div className={styles.uiDesign}>UI Design</div>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e6f56ca2a3732a24a99c1bd7b0aae8b410c97b98306eff5bf75d64b073c283cc?placeholderIfAbsent=true"
                                alt="Assignee"
                                className={styles.img37}
                              />
                            </div>
                            <div className={styles.div77}>
                              <div className={styles.div78}>
                                <div className={styles.div79}>
                                  <img
                                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/03a40932d78eb509b773c2820ed1b341eed8f29f787ff3aaf96e87b9ed41dc97?placeholderIfAbsent=true"
                                    alt="Comment icon"
                                    className={styles.img38}
                                  />
                                  <span className={styles.css5}>5</span>
                                </div>
                                <div className={styles.div80}>
                                  <img
                                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/bbf3075d30c8bfcd3ccdcf92ffea0ddf17495ec514c41cbb1651ceaca1517418?placeholderIfAbsent=true"
                                    alt="File icon"
                                    className={styles.img39}
                                  />
                                  <span className={styles.css1}>1</span>
                                </div>
                              </div>
                              <div className={styles.div81}>
                                <span className={styles.css24}>2</span>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/139e2695929d3903a35ad69980cb5a08f55a663f4979e5dfe7042a337fc3b3ba?placeholderIfAbsent=true"
                                  alt="Days left"
                                  className={styles.img40}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ProjectCard
                        title="Design System"
                        description="Create a consistent look and feel both on web and mobile."
                        tag="UI Design"
                        tagColor={styles.uiDesign}
                        avatarSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dade27b601e54730fc53d6f239cd318a3cadd491a63901c102e4396b76ef2969?placeholderIfAbsent=true"
                        commentCount={10}
                        fileCount={2}
                        daysLeft={10}
                        isHighlighted={true}
                      />
                    </div>
                  </div>

                  <div className={styles.column10}>
                    <div className={styles.div90}>
                      <ProjectCard
                        title="Presentation"
                        description="Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan."
                        tag="Planning"
                        tagColor={styles.planning}
                        avatarSrc="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/7d1c095c217f95a89ba25d94d2bbdbd73822b6bb0a825d829ff5bb0f0e749a50?placeholderIfAbsent=true"
                        commentCount={11}
                        fileCount={3}
                        status="Done"
                        statusColor="#78c552"
                      />

                      <div className={styles.div99}>
                        <div className={styles.div100}>
                          <div className={styles.div101}>
                            <h3 className={styles.brainstorming}>
                              Brainstorming
                            </h3>
                            <div className={styles.div102}>
                              <div className={styles.research}>Research</div>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/22cdc88b7e910f623f6536dec98367d638dabe551753d685d274d955a0c61eb9?placeholderIfAbsent=true"
                                alt="Assignees"
                                className={styles.img49}
                              />
                            </div>
                          </div>
                          <div className={styles.div103}>
                            <div className={styles.div104}>
                              <div className={styles.div105}>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5bd9ae5e1d3a7075c5c17ab133f9c98f9f9bc98faf6fb15649f94a96b0b96628?placeholderIfAbsent=true"
                                  alt="Comment icon"
                                  className={styles.img50}
                                />
                                <span className={styles.css21}>21</span>
                              </div>
                            </div>
                            <div className={styles.div106}>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/695ce5aefe713416a1c8a931f47cb49e8b48ff485c06c0c8f842ae5f22a9fa8e?placeholderIfAbsent=true"
                                alt="Done icon"
                                className={styles.img51}
                              />
                              <span className={styles.done}>Done</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.div107}>
                <button className={styles.div108}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/cf08fc34a5472016d32732848b5ad14bfa681001662de8a8eaf7e985af41a5f7?placeholderIfAbsent=true"
                    alt="Add icon"
                    className={styles.img52}
                  />
                  <span className={styles.newTask2}>New Task</span>
                </button>
                <div className={styles.div109} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardContent;
