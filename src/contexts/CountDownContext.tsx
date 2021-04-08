import { createContext, useContext, useEffect, useState } from "react";
import { TCountDownContext } from "../typings/contextChallenges";
import { ChallengesContext } from "./ChallengesContext";
import Cookies from "js-cookie";

export const CountDownContext = createContext({} as TCountDownContext);

let countDownTimeout: NodeJS.Timeout;

type TCountDownProvider = {
  time: number;
};

export const CountDownProvider: React.FC<TCountDownProvider> = ({ children, ...props }) => {
  const defaultTime = props.time ?? 25 * 60;
  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallenge } = useContext(ChallengesContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const changeTime = (newTime: number) => setTime(newTime);

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

  useEffect(() => {
    Cookies.set("time", `${time}`);
  }, [time]);

  const resetCountDown = () => {
    clearTimeout(countDownTimeout);
    setHasFinished(false);
    setIsActive(false);
    setTime(defaultTime);
  };

  const startCountDown = () => setIsActive(true);

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        time,
        changeTime,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
};
