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
  const [defaultTime, setDefaultTime] = useState(props.time);
  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const { startNewChallenge } = useContext(ChallengesContext);

  const changeTime = (newTime: number) => {
    Cookies.set("time", `${newTime}`);
    setDefaultTime(newTime);
    setTime(newTime);
  };

  const startCountDown = () => setIsActive(true);

  const resetCountDown = () => {
    clearTimeout(countDownTimeout);
    setHasFinished(false);
    setIsActive(false);
    console.log({ defaultTime });
    setTime(defaultTime);
  };

  useEffect(() => {
    Cookies.set("time", `${time}`);
  }, []);

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

  return (
    <CountDownContext.Provider
      value={{
        time,
        defaultTime,
        minutes,
        seconds,
        isActive,
        hasFinished,
        changeTime,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
};
