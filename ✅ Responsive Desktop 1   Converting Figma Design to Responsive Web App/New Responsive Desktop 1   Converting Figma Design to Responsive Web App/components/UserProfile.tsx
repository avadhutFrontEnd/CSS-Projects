import React from "react";
import styles from "./FinFlowDashboard.module.css";

interface UserProfileProps {
  avatar: string;
  name: string;
  role: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ avatar, name, role }) => {
  return (
    <div className={styles.userProfile}>
      <img src={avatar} alt="Profile" className={styles.profileImg} />
      <div className={styles.userInfo}>
        <div className={styles.userName}>{name}</div>
        <div className={styles.userRole}>{role}</div>
      </div>
    </div>
  );
};

export default UserProfile;
