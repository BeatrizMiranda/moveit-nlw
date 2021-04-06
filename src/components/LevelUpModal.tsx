import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal({ setIsLevelUpModalOpen }) {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={() => setIsLevelUpModalOpen(false)}>
          <img src="/icons/close.svg" alt="close modal" />
        </button>
      </div>
    </div>
  );
}
