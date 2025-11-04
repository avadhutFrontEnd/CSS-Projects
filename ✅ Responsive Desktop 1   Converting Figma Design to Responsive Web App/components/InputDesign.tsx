"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";

function InputDesign() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <SidebarHeader />
      <PrimaryNavigation />
      <AddNewButton />
      <SecondaryNavigation />
      <IntegrationsSection />
      <UserSection />
    </nav>
  );
}

function SidebarHeader() {
  return (
    <header className={styles.sidebarHeader}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91124f47f6c5b8a58da3332a2da405941fb3aaa8"
        alt="FinFlow logo"
        className={styles.logo}
      />
      <h1 className={styles.appName}>FinFlow</h1>
    </header>
  );
}

function PrimaryNavigation() {
  return (
    <ul className={styles.navGroup}>
      <li className={styles.navItemActive}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/062628d7ae27e94dfbe415b80623af695aa330d2"
          alt=""
          className={styles.navIcon}
        />
        <span className={styles.navLabelActive}>Dashboard</span>
      </li>
      <li className={styles.navItem}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4490deb1b4b28d02c0f1cf2fe6283743797d574e"
          alt=""
          className={styles.navIcon}
        />
        <span className={styles.navLabel}>Inbox</span>
        <span className={styles.badge}>2</span>
      </li>
    </ul>
  );
}

function AddNewButton() {
  return (
    <div className={styles.addNewButtonContainer}>
      <button className={styles.addNewButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69020fd9148c6f96dd8fe0160591e6fbca10a155"
          alt=""
          className={styles.addIcon}
        />
        <span className={styles.addButtonText}>Add new</span>
      </button>
    </div>
  );
}

function SecondaryNavigation() {
  return (
    <ul className={styles.navGroup}>
      <li className={styles.navItem}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/289236f4520ef5f4bd6925c6de56806e0dcdcf46"
          alt=""
          className={styles.navIcon}
        />
        <span className={styles.navLabel}>Analytics</span>
      </li>
      <li className={styles.navItem}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c8368a4992e397c51bb486d9ee11d6b53969f3d"
          alt=""
          className={styles.navIcon}
        />
        <span className={styles.navLabel}>Contacts</span>
      </li>
      <li className={styles.navItem}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dadb8d93527459e1bd012ef41ac31a6bb50e9d60"
          alt=""
          className={styles.navIcon}
        />
        <span className={styles.navLabel}>Projects</span>
      </li>
    </ul>
  );
}

function IntegrationsSection() {
  return (
    <>
      <h2 className={styles.sectionTitle}>Integrations</h2>
      <ul className={styles.navGroup}>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/47a930baf8d096163020d05b6af7d3dedd478c2a"
            alt=""
            className={styles.navIcon}
          />
          <span className={styles.navLabel}>Google ID</span>
        </li>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af8b497f4117e063c90e45acfd48ab6e6c2aa7a2"
            alt=""
            className={styles.navIcon}
          />
          <span className={styles.navLabel}>Evernote</span>
        </li>
        <li className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b20384aad2673262f962ab1ad9f1c2bbce9d076e"
            alt=""
            className={styles.navIcon}
          />
          <span className={styles.navLabel}>Slack</span>
        </li>
      </ul>
    </>
  );
}

function UserSection() {
  return (
    <section className={styles.userSection}>
      <div className={styles.userProfile}>
        <div className={styles.userInfo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b372face9e9f2722ba2d2cd9a62b6bbc1531b0a0"
            alt="User avatar"
            className={styles.userAvatar}
          />
          <div className={styles.userDetails}>
            <p className={styles.userName}>Susan Kim</p>
            <p className={styles.userRole}>CEO</p>
          </div>
        </div>
        <ul className={styles.userNavGroup}>
          <li className={styles.navItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba82f133b34cb3fde7c97eb332643d5ce34c089"
              alt=""
              className={styles.navIcon}
            />
            <span className={styles.navLabel}>Settings</span>
          </li>
          <li className={styles.navItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4182879b499b5527aed9d83ba01f5dc096dc238"
              alt=""
              className={styles.navIcon}
            />
            <span className={styles.navLabel}>Log out</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function MainContent() {
  return (
    <main className={styles.mainContent}>
      <MainHeader />
      <SearchAndFilters />
      <CardGrid />
    </main>
  );
}

function MainHeader() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.titleContainer}>
        <h1 className={styles.pageTitle}>Overview</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a854fa1897573e37336e6d7dcb8bb3658149593"
          alt=""
          className={styles.infoIcon}
        />
      </div>
      <button className={styles.newDealButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71c21fcd348287122ec8eb6da3da58091fdf3982"
          alt=""
          className={styles.buttonIcon}
        />
        <span className={styles.buttonText}>New deal</span>
      </button>
    </header>
  );
}

function SearchAndFilters() {
  return (
    <section className={styles.searchFiltersContainer}>
      <div className={styles.searchContainer}>
        <label className={styles.searchLabel}>Search</label>
        <input type="text" className={styles.searchInput} />
      </div>
      <button className={styles.filterButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea7699657f2d11e47315f4b5fd4ae38fcad50f9a"
          alt=""
          className={styles.buttonIcon}
        />
        <span className={styles.buttonText}>Sort</span>
      </button>
      <button className={styles.filterButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b27f94cfeae75a97e4372a74a3625b518e2676"
          alt=""
          className={styles.buttonIcon}
        />
        <span className={styles.buttonText}>Filters</span>
      </button>
      <button className={styles.downloadButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c876f34f6dc56b6fd70b2e351ebb0c7eaca77160"
          alt=""
          className={styles.buttonIcon}
        />
        <span className={styles.downloadButtonText}>Download report</span>
      </button>
    </section>
  );
}

function CardGrid() {
  return (
    <section className={styles.cardGrid}>
      <Card
        title="Pending"
        amount="$980.00"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8c71d533eafd115fdcd0ce70e710664300627269"
        items={[
          { id: 1, name: "Website redesign", value: "$450.00" },
          { id: 2, name: "Logo design project", value: "$320.00" },
          { id: 3, name: "Marketing campaign", value: "$210.00" },
        ]}
      />
      <Card
        title="In Progress"
        amount="$1,250.00"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8c71d533eafd115fdcd0ce70e710664300627269"
        items={[
          { id: 1, name: "Mobile app development", value: "$750.00" },
          { id: 2, name: "SEO optimization", value: "$500.00" },
        ]}
      />
      <Card
        title="Completed"
        amount="$2,430.00"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8c71d533eafd115fdcd0ce70e710664300627269"
        items={[
          { id: 1, name: "E-commerce platform", value: "$1,200.00" },
          { id: 2, name: "Brand identity", value: "$680.00" },
          { id: 3, name: "Content creation", value: "$550.00" },
        ]}
      />
      <Card
        title="Rejected"
        amount="$540.00"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8c71d533eafd115fdcd0ce70e710664300627269"
        items={[
          { id: 1, name: "Social media campaign", value: "$320.00" },
          { id: 2, name: "Email newsletter", value: "$220.00" },
        ]}
      />
    </section>
  );
}

function Card({ title, amount, iconSrc, items }) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <img src={iconSrc} alt="" className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardAmount}>{amount}</p>
      </header>
      <div className={styles.cardContent}>
        {items &&
          items.map((item) => (
            <div key={item.id} className={styles.cardItem}>
              <div className={styles.cardItemDot}></div>
              <p className={styles.cardItemName}>{item.name}</p>
              <p className={styles.cardItemValue}>{item.value}</p>
            </div>
          ))}
      </div>
    </article>
  );
}

export default InputDesign;
