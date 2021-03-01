import { createContext, useContext, useEffect, useState } from "react";
import { TCountDownContext } from "../typings/contextChallenges";
import { ChallengesContext } from "./ChallengesContext";

export const CountDownContext = createContext({} as TCountDownContext);

let countDownTimeout: NodeJS.Timeout;

export const CountDownProvider: React.FC = ({ children }) => {
  const defaultTime = 0.1 * 60;
  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallenge } = useContext(ChallengesContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

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
    setHasFinished(false);
    setIsActive(false);
    setTime(defaultTime);
  };

  const startCountDown = () => setIsActive(true);

  console.log("Context", { minutes, seconds });

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
};
