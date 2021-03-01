import React, { useContext } from "react";
import { CountDownContext } from "../contexts/CountDownContext";

import styles from "../styles/components/CountDown.module.css";

function CountDown() {
  const { minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown } = useContext(
    CountDownContext
  );

  const [minutesDecimals, minutesUnit] = String(minutes).padStart(2, "0").split("");
  const [secondsDecimals, secondsUnit] = String(seconds).padStart(2, "0").split("");

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
