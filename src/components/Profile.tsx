import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/28959326?s=400&u=070b67af18508d9cb49cdffb8712c184892468ab&v=4"
        alt="User photo"
      />
      <div>
        <strong>Beatriz Miranda</strong>
        <p>
          <img src="icons/level.svg" alt="level" /> Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
