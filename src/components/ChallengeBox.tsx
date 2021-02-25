import React from "react";
import styles from "../styles/components/ChallengeBox.module.css";

function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo Desafio</strong>
            <p>Alongue-se</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFails}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceeded}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de levels completando os desafios
          </p>
        </div>
      )}
    </div>
  );
}

export default ChallengeBox;
