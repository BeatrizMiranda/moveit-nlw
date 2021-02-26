import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/CompletedChallenges.module.css";

function CompletedChallenges() {
  const { completedChallenges } = useContext(ChallengesContext);

  return (
    <div className={styles.completedContainer}>
      <span>Desafios Completos</span>
      <span>{completedChallenges}</span>
    </div>
  );
}

export default CompletedChallenges;
