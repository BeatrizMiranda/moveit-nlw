import React from "react";
import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/28959326?s=400&u=070b67af18508d9cb49cdffb8712c184892468ab&v=4"
        alt="Beatriz Miranda"
      />
      <div>
        <strong>Beatriz Miranda</strong>
        <p>
          <img src="icons/level.svg" alt="level" /> Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
