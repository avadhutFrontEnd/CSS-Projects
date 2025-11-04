"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";

// SidebarHeader Component
const SidebarHeader = () => {
  return (
    <header className={styles.logoContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/be52cb761b18f218e0ba1618fb1ffa074a11fb78"
        alt="AutomatePro Logo"
        className={styles.logoIcon}
      />
      <h1 className={styles.logoText}>AutomatePro</h1>
    </header>
  );
};

// WorkspaceSelector Component
const WorkspaceSelector = () => {
  return (
    <div className={styles.workspaceContainer}>
      <div className={styles.workspaceSelector}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5db69f5341c6552fe091dc5800503c8cf4ad19ac"
          alt="Keitoto Studio"
          className={styles.workspaceIcon}
        />
        <span className={styles.workspaceName}>Keitoto Studio</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5cd3c5612797328a67a6bb9d88dce2157fdf698"
          alt="Dropdown"
          className={styles.dropdownIcon}
        />
      </div>
    </div>
  );
};

// NavigationItem Component
const NavigationItem = ({ icon, text }) => {
  return (
    <li className={styles.navItem}>
      <img src={icon} alt={text} className={styles.navIcon} />
      <span className={styles.navText}>{text}</span>
    </li>
  );
};

// NavigationLinks Component
const NavigationLinks = () => {
  const navItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f94563c6356a3dbf97c2d7cd8b6a2cb2d4855c8d",
      text: "Dashboard",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b603cb4ff76d556735f44f12cc914e74b0515b0",
      text: "Inbox",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0605532dec30f54db310777f102075c973a983ca",
      text: "Teams",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/30c34487065735192d5e041fd1926ff2455855e7",
      text: "Assigned to me",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43ada57223eefb09801ee07d12594a6ea56148c6",
      text: "Created by me",
    },
  ];

  return (
    <nav className={styles.navContainer}>
      <ul>
        {navItems.map((item, index) => (
          <NavigationItem key={index} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </nav>
  );
};

// SectionHeader Component
const SectionHeader = ({ title }) => {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionControls}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8b509845a2fa890f077bb0b6e9afe3e341ba7c"
          alt="Menu"
          className={styles.menuIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c47f919ca34fc1448585cba0946bf31d3b88d4d"
          alt="Add"
          className={styles.addIcon}
        />
      </div>
    </div>
  );
};

// ProjectItem Component
const ProjectItem = ({ icon, name }) => {
  return (
    <li className={styles.projectItem}>
      <img src={icon} alt="Project" className={styles.projectIcon} />
      <span className={styles.projectName}>{name}</span>
    </li>
  );
};

// ProjectsSection Component
const ProjectsSection = () => {
  const projects = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/601cc33979f78f80ac7753bc63024b9b35aa8a7e",
      name: "Adrian Bert- CRM Da...",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7084afc3f342e284f7edb858f619f941702e8fbf",
      name: "Trust-SaaS Dashbo..",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd893e98d0cb96f1d6941a4b058df59efbe55d6f",
      name: "Pertamina Project",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/68487ad32522aa08d6ceed3613f3e87e178cf5c3",
      name: "Garuda Project",
    },
  ];

  return (
    <section>
      <SectionHeader title="Projects" />
      <div className={styles.projectsContainer}>
        <ul>
          {projects.map((project, index) => (
            <ProjectItem key={index} icon={project.icon} name={project.name} />
          ))}
        </ul>
      </div>
      <a href="#" className={styles.newItemLink}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/242ea8c6fb79288c730ab9eb726e081fdfc2c2a7"
          alt="New"
          className={styles.newIcon}
        />
        <span className={styles.newText}>New</span>
      </a>
    </section>
  );
};

// FooterNavItem Component
const FooterNavItem = ({ icon, text }) => {
  return (
    <li className={styles.navItem}>
      <img src={icon} alt={text} className={styles.navIcon} />
      <span className={styles.navText}>{text}</span>
    </li>
  );
};

// SidebarFooter Component
const SidebarFooter = () => {
  return (
    <footer className={styles.sidebarFooter}>
      <ul>
        <FooterNavItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/54de248c5c7c6aebe6e23c0628cbf7d49b6172eb"
          text="Settings"
        />
        <FooterNavItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/981a91ca165d68db0eab396b904a1decc08eab69"
          text="Help Center"
        />
      </ul>
      <div className={styles.profileContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebaf444c3ff535c3f410bdbda5d5ef7d54f5e57d"
          alt="Profile"
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <p className={styles.profileName}>Darlene Robertson</p>
          <p className={styles.profileEmail}>darfene®gmailcom</p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d011813c1cdef5b18f4ec0c8cbc586c828c99f7"
          alt="Menu"
          className={styles.menuIcon}
        />
      </div>
    </footer>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <SidebarHeader />
      <WorkspaceSelector />
      <NavigationLinks />
      <div className={styles.divider} />
      <section>
        <SectionHeader title="Favorites" />
      </section>
      <div className={styles.divider} />
      <ProjectsSection />
      <SidebarFooter />
    </aside>
  );
};

// TopBar Component
const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <div className={styles.windowControls}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ea8a938637eb4b001c53d709b02d81bdc239054"
          alt="Window Control"
          className={styles.controlIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdfd5ddbdaab8dc478ef3cc3ac6566484a45ba89"
          alt="Window Control"
          className={styles.controlIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a3c1ae87df62777f596e3e5ed6141827bd0155"
          alt="Window Control"
          className={styles.controlIcon}
        />
      </div>
      <div className={styles.browserControls}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aea684494361867da13fdda2b8565ffb46cedc09"
          alt="Browser Control"
          className={styles.browserIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e992e8de5783f1625f019d596689e97bb11f2a9"
          alt="Browser Control"
          className={styles.browserIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4f48119bf2a032d0f3a8f70513dcb52e6248520"
          alt="Browser Control"
          className={styles.browserIcon}
        />
      </div>
      <div className={styles.addressBar}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e6d84d7852281a4af6c8a7e71712ff2750f1f8b"
          alt="Lock"
          className={styles.lockIcon}
        />
        <div className={styles.urlContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e926e29bfcc22072aca277fa50776b28307aea47"
            alt="URL Icon"
            className={styles.urlIcon}
          />
          <span className={styles.urlText}>app.automatepro.com</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5e85c8a694ce4636b190c1ae1fa721c31a1558f"
            alt="Search"
            className={styles.searchIcon}
          />
        </div>
      </div>
      <div className={styles.toolsContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb672c0f753d2ff0145de727e14b478011e0b1f7"
          alt="Tool"
          className={styles.toolIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb6fef6aac39df7d2793b73358aa33df53ec5d7"
          alt="Tool"
          className={styles.toolIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b65c0c3cf7fc329fa538c6d283e320487f77226"
          alt="Tool"
          className={styles.toolIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65dc59ae2d30e5285e7144ad578c5d0de500a905"
          alt="Tool"
          className={styles.toolIcon}
        />
      </div>
    </header>
  );
};

// StatCard Component
const StatCard = ({ title, value, icon }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statIconContainer}>
        <img src={icon} alt="" className={styles.statIcon} />
      </div>
      <div className={styles.statContent}>
        <h3 className={styles.statTitle}>{title}</h3>
        <p className={styles.statValue}>{value}</p>
      </div>
    </div>
  );
};

// TaskItem Component
const TaskItem = ({ title, project, dueDate, priority, status }) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.taskCheckbox}>
        <input type="checkbox" id={`task-${title}`} />
        <label htmlFor={`task-${title}`} className={styles.taskLabel}></label>
      </div>
      <div className={styles.taskContent}>
        <h4 className={styles.taskTitle}>{title}</h4>
        <p className={styles.taskProject}>{project}</p>
      </div>
      <div className={styles.taskMeta}>
        <span className={styles.taskDueDate}>{dueDate}</span>
        <span
          className={`${styles.taskPriority} ${styles[`priority${priority}`]}`}
        >
          {priority}
        </span>
        <span className={`${styles.taskStatus} ${styles[`status${status}`]}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

// ProjectCard Component
const ProjectCard = ({ name, progress, members }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <h3 className={styles.projectTitle}>{name}</h3>
        <div className={styles.projectMenu}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8b509845a2fa890f077bb0b6e9afe3e341ba7c"
            alt="Menu"
            className={styles.menuIcon}
          />
        </div>
      </div>
      <div className={styles.projectProgress}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className={styles.progressText}>{progress}%</span>
      </div>
      <div className={styles.projectMembers}>
        {members.map((member, index) => (
          <div
            key={index}
            className={styles.memberAvatar}
            style={{ zIndex: members.length - index }}
          >
            <img src={member} alt="Team member" />
          </div>
        ))}
      </div>
    </div>
  );
};

// MainContentArea Component
const MainContentArea = () => {
  const stats = [
    {
      title: "Total Tasks",
      value: "248",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f94563c6356a3dbf97c2d7cd8b6a2cb2d4855c8d",
    },
    {
      title: "In Progress",
      value: "32",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/30c34487065735192d5e041fd1926ff2455855e7",
    },
    {
      title: "Completed",
      value: "186",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0605532dec30f54db310777f102075c973a983ca",
    },
    {
      title: "Overdue",
      value: "12",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b603cb4ff76d556735f44f12cc914e74b0515b0",
    },
  ];

  const tasks = [
    {
      title: "Update dashboard design",
      project: "Trust-SaaS Dashboard",
      dueDate: "Today",
      priority: "High",
      status: "InProgress",
    },
    {
      title: "Create user flow diagrams",
      project: "Adrian Bert CRM",
      dueDate: "Tomorrow",
      priority: "Medium",
      status: "ToDo",
    },
    {
      title: "Finalize API documentation",
      project: "Pertamina Project",
      dueDate: "Oct 15",
      priority: "Low",
      status: "Review",
    },
    {
      title: "Implement authentication flow",
      project: "Garuda Project",
      dueDate: "Oct 18",
      priority: "High",
      status: "ToDo",
    },
  ];

  const projects = [
    {
      name: "Trust-SaaS Dashboard",
      progress: 75,
      members: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ebaf444c3ff535c3f410bdbda5d5ef7d54f5e57d",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ebaf444c3ff535c3f410bdbda5d5ef7d54f5e57d",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ebaf444c3ff535c3f410bdbda5d5ef7d54f5e57d",
      ],
    },
    {
      name: "Adrian Bert CRM",
      progress: 45,
      members: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ebaf444c3ff535c3f410bdbda5d5ef7d54f5e57d",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ebaf444c3ff535c3f410bdbda5d5ef7d54f5e57d",
      ],
    },
  ];

  return (
    <div className={styles.mainContentArea}>
      <section className={styles.contentHeader}>
        <h2 className={styles.pageTitle}>Dashboard</h2>
        <div className={styles.headerActions}>
          <button className={styles.actionButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c47f919ca34fc1448585cba0946bf31d3b88d4d"
              alt="Add"
              className={styles.addIcon}
            />
            <span>New Task</span>
          </button>
          <button className={styles.actionButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8b509845a2fa890f077bb0b6e9afe3e341ba7c"
              alt="Menu"
              className={styles.menuIcon}
            />
          </button>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </section>

      <section className={styles.contentGrid}>
        <div className={styles.tasksSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>My Tasks</h3>
            <button className={styles.viewAllButton}>View All</button>
          </div>
          <div className={styles.tasksList}>
            {tasks.map((task, index) => (
              <TaskItem key={index} {...task} />
            ))}
          </div>
        </div>

        <div className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Active Projects</h3>
            <button className={styles.viewAllButton}>View All</button>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Main InputDesign Component
function InputDesign() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.mainContent}>
          <TopBar />
          <MainContentArea />
        </main>
      </div>
    </>
  );
}

export default InputDesign;
