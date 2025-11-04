"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";

// Sidebar components
const SidebarHeader = () => (
  <header className={styles.div3}>
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91124f47f6c5b8a58da3332a2da405941fb3aaa8"
      alt="FinFlow logo"
      className="w-[24px] h-[24px]"
    />
    <h1 className={styles.div4}>FinFlow</h1>
  </header>
);

const NavigationMenu = () => (
  <nav className={styles.div5}>
    <a href="#" className={styles.div6}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/062628d7ae27e94dfbe415b80623af695aa330d2"
        alt=""
        className="w-[16px] h-[16px]"
      />
      <span className={styles.span}>Dashboard</span>
    </a>
    <a href="#" className={styles.div7}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4490deb1b4b28d02c0f1cf2fe6283743797d574e"
        alt=""
        className="w-[16px] h-[16px]"
      />
      <span className={styles.span}>Inbox</span>
      <span className={styles.div8}>2</span>
    </a>
    <a href="#" className={styles.div9}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/289236f4520ef5f4bd6925c6de56806e0dcdcf46"
        alt=""
        className="w-[16px] h-[16px]"
      />
      <span className={styles.span}>Analytics</span>
    </a>
    <a href="#" className={styles.div10}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c8368a4992e397c51bb486d9ee11d6b53969f3d"
        alt=""
        className="w-[16px] h-[16px]"
      />
      <span className={styles.span}>Contacts</span>
    </a>
    <a href="#" className={styles.div11}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dadb8d93527459e1bd012ef41ac31a6bb50e9d60"
        alt=""
        className="w-[16px] h-[16px]"
      />
      <span className={styles.span}>Projects</span>
    </a>
  </nav>
);

const IntegrationsSection = () => (
  <section className={styles.div12}>
    <h2 className={styles.div13}>Integrations</h2>
    <nav className={styles.div14}>
      <a href="#" className={styles.div15}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/47a930baf8d096163020d05b6af7d3dedd478c2a"
          alt=""
          className="w-[15px] h-[15px]"
        />
        <span className={styles.span}>Google ID</span>
      </a>
      <a href="#" className={styles.div16}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af8b497f4117e063c90e45acfd48ab6e6c2aa7a2"
          alt=""
          className="w-[16px] h-[18px]"
        />
        <span className={styles.span}>Evernote</span>
      </a>
      <a href="#" className={styles.div17}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b20384aad2673262f962ab1ad9f1c2bbce9d076e"
          alt=""
          className="w-[16px] h-[16px]"
        />
        <span className={styles.span}>Slack</span>
      </a>
    </nav>
  </section>
);

const UserProfile = () => (
  <section className={styles.div18}>
    <div className={styles.div19}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae8a9b52e44dbf2e88c586e993b885803e17e5b6"
        alt="User avatar"
        className="w-[32px] h-[32px] rounded-full"
      />
      <div className={styles.div20}>
        <h3 className={styles.div21}>Susan Kim</h3>
        <p className={styles.div22}>CEO</p>
      </div>
    </div>
    <a href="#" className={styles.div23}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba82f133b34cb3fde7c97eb332643d5ce34c089"
        alt=""
        className="w-[16px] h-[15px]"
      />
      <span className={styles.span}>Settings</span>
    </a>
    <a href="#" className={styles.div24}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4182879b499b5527aed9d83ba01f5dc096dc238"
        alt=""
        className="w-[16px] h-[16px]"
      />
      <span className={styles.span}>Log out</span>
    </a>
  </section>
);

const Sidebar = () => (
  <aside className={styles.div2}>
    <SidebarHeader />
    <NavigationMenu />
    <IntegrationsSection />
    <UserProfile />
  </aside>
);

// Main content components
const MainHeader = () => (
  <header className={styles.div27}>
    <div className={styles.div28}>
      <h2 className={styles.div29}>Overview</h2>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a854fa1897573e37336e6d7dcb8bb3658149593"
        alt="Info"
        className="w-[18px] h-[18px]"
      />
    </div>
    <button className={styles.button}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/71c21fcd348287122ec8eb6da3da58091fdf3982"
        alt="Add"
        className="w-[11px] h-[11px]"
      />
      <span className={styles.span}>New deal</span>
    </button>
  </header>
);

const SearchAndFilters = () => (
  <section className={styles.div30}>
    <div className={styles.div31}>
      <label htmlFor="search" className={styles.div32}>
        Search
      </label>
      <input type="text" id="search" className={styles.input} />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44438a02e6ca5123da857491fb98a987d8f53d66"
        alt="Search"
        className="absolute right-[15px] top-1/2 transform -translate-y-1/2 w-[17px] h-[18px]"
      />
    </div>
    <div className={styles.div33}>
      <button className={styles.button2}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea7699657f2d11e47315f4b5fd4ae38fcad50f9a"
          alt=""
          className="w-[15px] h-[10px]"
        />
        <span className={styles.span}>Sort</span>
      </button>
      <button className={styles.button3}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b27f94cfeae75a97e4372a74a3625b518e2676"
          alt=""
          className="w-[18px] h-[16px]"
        />
        <span className={styles.span}>Filters</span>
      </button>
      <button className={styles.button4}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c876f34f6dc56b6fd70b2e351ebb0c7eaca77160"
          alt=""
          className="w-[16px] h-[16px]"
        />
        <span className={styles.span}>Download report</span>
      </button>
    </div>
  </section>
);

const StatCard = ({ icon, title, amount, className }) => (
  <article className={className}>
    <div className={styles.div36}>
      <img src={icon} alt="" className="w-[18px] h-[19px]" />
      <div>
        <h3 className={styles.div37}>{title}</h3>
        {amount && <p className={styles.div38}>{amount}</p>}
      </div>
    </div>
  </article>
);

const StatisticsCards = () => (
  <section className={styles.div34}>
    <StatCard
      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8c71d533eafd115fdcd0ce70e710664300627269"
      title="Pending"
      amount="$980.00"
      className={styles.div35}
    />
    <StatCard
      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cfa04a69128d0e3e5bf030bb0f0fc78f2672298a"
      title="In progress"
      amount="$25,017.00"
      className={styles.div39}
    />
    <StatCard
      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b13a62df3355c2d80ff9466819f327dea006a214"
      title="Successful"
      amount="$12,327.00"
      className={styles.div43}
    />
    <StatCard
      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4969a8b32ac5df13f83340400bfd69b262688"
      title="Declined"
      amount=""
      className={styles.div47}
    />
  </section>
);

const TransactionGrid = () => (
  <section className={styles.div50}>
    {/* Transaction cards would be implemented here */}
    {/* This section was marked as "[Rest of the transaction cards grid...]" in the original design */}
  </section>
);

const MainContent = () => (
  <main className={styles.div25}>
    <div className={styles.div26}>
      <MainHeader />
      <SearchAndFilters />
      <StatisticsCards />
      <TransactionGrid />
    </div>
  </main>
);

function InputDesign() {
  return (
    <div className={styles.div}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default InputDesign;
