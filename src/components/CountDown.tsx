import React, { useEffect, useState } from "react";

import styles from "../styles/components/CountDown.module.css";

function CountDown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesDecimals, minutesUnit] = String(minutes).padStart(2, "0").split("");
  const [secondsDecimals, secondsUnit] = String(seconds).padStart(2, "0").split("");

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  const startCountDown = () => {
    setActive(true);
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
      <button type="button" className={styles.startCountDown} onClick={startCountDown}>
        Iniciar um ciclo <img src="icons/play_arrow.svg" />
      </button>
    </div>
  );
}

export default CountDown;
