import React from "react";

import styles from "../styles/components/CompletedChallenges.module.css";

function CompletedChallenges() {
  return (
    <div className={styles.completedContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  );
}

export default CompletedChallenges;