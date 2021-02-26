import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

function ExperienceBar() {
  const { currentExp, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExp * 100) / experienceToNextLevel;
  const percentText = `${percentToNextLevel}%`;

  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
        <div style={{ width: percentText }}></div>
        <span className={styles.currentExp} style={{ left: percentText }}>
          {currentExp !== 0 && `${currentExp}xp`}
        </span>
      </div>
      <span>{experienceToNextLevel}xp</span>
    </header>
  );
}

export default ExperienceBar;
