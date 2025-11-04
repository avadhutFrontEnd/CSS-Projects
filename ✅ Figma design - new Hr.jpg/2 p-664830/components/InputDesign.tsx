"use client";
import * as React from "react";
import { useState } from "react";
import styles from "./InputDesign.module.css";

// Sidebar component with logo and navigation icons
const Sidebar: React.FC = () => {
  return (
    <aside className={styles.div2}>
      <div className={styles.div3}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/54d67f7cde8ce46d0372b066f94533cdd25aef26"
          alt="Logo"
          className={styles.logoImg}
        />
      </div>
      <nav className={styles.div4}>
        <button className={styles.div5}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6365f997f80a1538c1d6a2348f547cdab5ec5120"
            alt="Home"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.div6}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a525189388ffc0a9f27cf77094c5ba3ed31d0b16"
            alt="Projects"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.div7}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed8d79f472d4e76e33e930fb8acac9628b7d125b"
            alt="Documents"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.div8}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f7b4e1a343fc26e17f0592d769abba56be52610"
            alt="Reports"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.div9}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0ab7834865fffef925bec1841e8300ff44117b8"
            alt="Analytics"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.div10}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40955235b71d6a38f721c590c89e1fc779dea4fe"
            alt="Settings"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.div11}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ac63ad001a1e82892c68ee34e50e67fb77003e5"
            alt="Help"
            className={styles.navIcon}
          />
        </button>
      </nav>
    </aside>
  );
};

// Top navigation component with links, search, and profile
const TopNavigation: React.FC = () => {
  return (
    <header className={styles.div13}>
      <div className={styles.div14}>
        <nav className={styles.div15}>
          <button className={styles.div16}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/031725c7ae07097c5b92e863aae3caa9a3fdbfb5"
              alt="Organization"
              className={styles.navIcon}
            />
            <span>Organization chart</span>
          </button>
          <button className={styles.div17}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4dcee6d3fbedc44a4bf1c5300ea15d24239ab2d"
              alt="Calendar"
              className={styles.navIcon}
            />
            <span>Calendar</span>
          </button>
          <button className={styles.div18}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e0d386384e66fe3fc7aeef741ff11461e285b29"
              alt="Employees"
              className={styles.navIcon}
            />
            <span>Employees</span>
          </button>
          <button className={styles.div19}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c4ae88c43b08fbec0f2fb381d3635574a04918"
              alt="Absence"
              className={styles.navIcon}
            />
            <span>Absence &amp; Leave</span>
          </button>
        </nav>
        <div className={styles.div20}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d86163bdc12c358badbd03a194d58a45d27e2e2"
            alt="Search"
          />
          <input type="text" placeholder="Search" className={styles.input} />
          <div className={styles.div21}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e519ab53beae83d698fb104f650fc695131853b"
              alt="Search options"
            />
            <span>+</span>
            <span>/</span>
          </div>
        </div>
        <div className={styles.div22}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6471ce3b6301fbff00fb988a52641b6a2af9f577"
            alt="Notifications"
            className={styles.notificationIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aa9a309b0f18239843a9753ea40baee47bc559b"
            alt="User profile"
            className={styles.profileImg}
          />
        </div>
      </div>
      <nav className={styles.div23}>
        <button className={styles.div24}>My Absence</button>
        <button className={styles.div25}>Absences Calendar</button>
      </nav>
    </header>
  );
};

// Absence type card component
interface AbsenceCardProps {
  title: string;
  usage: string;
  bgColor: string;
  iconUrl: string;
}

const AbsenceCard: React.FC<AbsenceCardProps> = ({
  title,
  usage,
  bgColor,
  iconUrl,
}) => {
  return (
    <article className={styles.div31}>
      <header className={styles.div32} style={{ backgroundColor: bgColor }}>
        <h3 className={styles.div33}>{title}</h3>
        <img src={iconUrl} alt="More" className={styles.moreIcon} />
      </header>
      <p className={styles.div34}>{usage}</p>
    </article>
  );
};

// Grid of absence type cards
const AbsenceTypes: React.FC = () => {
  const absenceTypes = [
    {
      title: "Sick Leave",
      usage: "1/10 Days Used",
      bgColor: "#f9f5e1",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/453b97ca600f3ef6762ec0fd60374f76aec9b8cc",
    },
    {
      title: "Vacation",
      usage: "19/25 Days Used",
      bgColor: "#e5f3ea",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7af3265fc68c3f6302fd39cb1c89d3ffc885e076",
    },
    {
      title: "Education",
      usage: "0/2 Days Used",
      bgColor: "#f9ebe3",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cc3a02e92c9a09ba7b68257ca9336e4226ac8e84",
    },
    {
      title: "Relocation",
      usage: "0/2 Days Used",
      bgColor: "#e1f0ef",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bbb0baefcd81780733fba568de18a21d927402f9",
    },
    {
      title: "Sabbatical",
      usage: "5/5 Days Used",
      bgColor: "#ebe4fa",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/37d52ce6bc72de197205ecd0f033cf2a19bbec47",
    },
    {
      title: "Bereavement",
      usage: "0/2 Days Used",
      bgColor: "#fcfefd",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/62afa212d3baf4d3cf73efbf2eeb140f11f86828",
    },
  ];

  return (
    <section className={styles.div30}>
      {absenceTypes.map((type, index) => (
        <AbsenceCard
          key={index}
          title={type.title}
          usage={type.usage}
          bgColor={type.bgColor}
          iconUrl={type.iconUrl}
        />
      ))}
    </section>
  );
};

// Table row component for absence table
interface AbsenceRowProps {
  checked?: boolean;
  duration: string;
  days: string;
  type: string;
  typeColor: string;
  status: string;
  paid: string;
  hasActions?: boolean;
}

const AbsenceRow: React.FC<AbsenceRowProps> = ({
  checked = false,
  duration,
  days,
  type,
  typeColor,
  status,
  paid,
  hasActions = false,
}) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <tr>
      <td className={styles.td}>
        <input type="checkbox" defaultChecked={checked} />
      </td>
      <td className={styles.td}>{duration}</td>
      <td className={styles.td}>{days}</td>
      <td className={styles.td}>
        <div className={styles.div61} style={{ backgroundColor: typeColor }}>
          {type}
        </div>
      </td>
      <td className={styles.td2}>{status}</td>
      <td className={styles.td}>{paid}</td>
      <td className={styles.td7}>
        {hasActions && (
          <>
            <button
              className={styles.div66}
              onClick={() => setShowActions(!showActions)}
              aria-haspopup="true"
              aria-expanded={showActions}
            >
              See note
            </button>
            {showActions && (
              <div className={styles.div67} role="menu">
                <button className={styles.div68} role="menuitem">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d40ae24f600fbc820802f95b64999f8e4b84dcaa"
                    alt="View"
                  />
                  <span>View</span>
                </button>
                <button className={styles.div69} role="menuitem">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/de5d411cc330908740c0b01185d8116673c44f2e"
                    alt="Edit"
                  />
                  <span>Edit</span>
                </button>
                <button className={styles.div70} role="menuitem">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/49d2e8424b9c92490233966173945585e86f86e7"
                    alt="Delete"
                  />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </>
        )}
      </td>
    </tr>
  );
};

// Table of upcoming absences
const AbsenceTable: React.FC = () => {
  const absences = [
    {
      duration: "Jun 8—Jun 11, 2023",
      days: "4 Days",
      type: "Sick Leave",
      typeColor: "#f9f5e1",
      status: "Pending",
      paid: "60%",
    },
    {
      duration: "Sep 12—Jun 16, 2023",
      days: "5 Days",
      type: "Vacation",
      typeColor: "#e5f3ea",
      status: "Approved",
      paid: "Yes",
    },
    {
      duration: "Oct 2—Oct 3, 2023",
      days: "2 Days",
      type: "Vacation",
      typeColor: "#e5f3ea",
      status: "Requested",
      paid: "Yes",
    },
    {
      duration: "Nov 27, 2023",
      days: "1 Day",
      type: "Education",
      typeColor: "#f9ebe3",
      status: "Pending",
      paid: "Yes",
    },
    {
      duration: "Nov 28, 2023",
      days: "1 Day",
      type: "Education",
      typeColor: "#f9ebe3",
      status: "Requested",
      paid: "Yes",
      hasActions: true,
    },
    {
      duration: "Dec 21—Dec 22, 2023",
      days: "2 Days",
      type: "Vacation",
      typeColor: "#e5f3ea",
      status: "Approved",
      paid: "Yes",
    },
    {
      duration: "Dec 27—Dec 30, 2023",
      days: "4 Days",
      type: "Vacation",
      typeColor: "#e5f3ea",
      status: "Approved",
      paid: "Yes",
    },
    {
      duration: "Jan 2, 2024",
      days: "1 Day",
      type: "Vacation",
      typeColor: "#e5f3ea",
      status: "Requested",
      paid: "Yes",
    },
  ];

  return (
    <section className={styles.div55}>
      <header className={styles.div56}>
        <h2 className={styles.div57}>Upcoming Absence (8)</h2>
        <div className={styles.div58}>
          <button className={styles.div59}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f1607a45a41de52173af67ec472833f42d45344"
              alt="Filter"
            />
            <span>Add filter</span>
          </button>
          <button className={styles.div60}>
            <span>Bulk Actions</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/50cbe53fbed776098a40db9550e1f6478f28ef5c"
              alt="Dropdown"
            />
          </button>
        </div>
      </header>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>
              <input type="checkbox" />
            </th>
            <th className={styles.th}>DURATION</th>
            <th className={styles.th}># OF DAYS</th>
            <th className={styles.th}>TYPE</th>
            <th className={styles.th}>STATUS</th>
            <th className={styles.th}>PAID</th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          {absences.map((absence, index) => (
            <AbsenceRow
              key={index}
              duration={absence.duration}
              days={absence.days}
              type={absence.type}
              typeColor={absence.typeColor}
              status={absence.status}
              paid={absence.paid}
              hasActions={absence.hasActions}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

// Notification bar at the bottom
const NotificationBar: React.FC = () => {
  return (
    <footer className={styles.div74}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/073fd5dfcef68d64e7613f25cf8baa1ceb994e68"
        alt="Success"
      />
      <span className={styles.span}>Success</span>
      <span className={styles.span2}>—Your absence has been requested.</span>
      <div className={styles.div75}>
        <button className={styles.div76}>Undo action</button>
        <div className={styles.div77} aria-hidden="true"></div>
        <button className={styles.div78}>
          <span>Close</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/357dfb11cb266d46b56f03c13e97bc0872497e37"
            alt="Close"
          />
        </button>
      </div>
    </footer>
  );
};

// Main component that combines all the parts
const InputDesign: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <div className={styles.div}>
        <Sidebar />
        <main className={styles.div12}>
          <TopNavigation />
          <div className={styles.div26}>
            <p className={styles.div27}>
              Manage / Absence &amp; Leave / My Absence
            </p>
            <div className={styles.div28}>
              <h1 className={styles.div29}>My Absence</h1>
              <button className={styles.button}>Request Absence</button>
            </div>
            <AbsenceTypes />
            <AbsenceTable />
          </div>
        </main>
      </div>
      <NotificationBar />
    </>
  );
};

export default InputDesign;
