import React, { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/CountDown.module.css";

let countDownTimeout: NodeJS.Timeout;

function CountDown() {
  const defaultTime = 0.1 * 60;
  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallenge } = useContext(ChallengesContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesDecimals, minutesUnit] = String(minutes).padStart(2, "0").split("");
  const [secondsDecimals, secondsUnit] = String(seconds).padStart(2, "0").split("");

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  const resetCountDown = () => {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(defaultTime);
  };

  const startCountDown = () => setIsActive(true);

  const renderBtn = () => {
    if (hasFinished) {
      return (
        <button disabled className={`${styles.countDownBtn}`}>
          Ciclo Encerrado <img src="icons/check_circle.svg" />
        </button>
      );
    }

    return isActive ? (
      <button
        type="button"
        className={`${styles.countDownBtn} ${styles.stopCountDownBtn}`}
        onClick={resetCountDown}
      >
        Abandonar o Ciclo <img src="icons/close.svg" />
      </button>
    ) : (
      <button type="button" className={styles.countDownBtn} onClick={startCountDown}>
        Iniciar um ciclo <img src="icons/play_arrow.svg" />
      </button>
    );
  };

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minutesDecimals}</span>
          <span>{minutesUnit}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsDecimals}</span>
          <span>{secondsUnit}</span>
        </div>
      </div>
      {renderBtn()}
    </div>
  );
}

export default CountDown;
