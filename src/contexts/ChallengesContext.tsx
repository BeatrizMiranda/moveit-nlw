import { createContext, useEffect, useState } from "react";
import challenges from "../../challenges.json";
import { TChallengesContext } from "../typings/contextChallenges";

export const ChallengesContext = createContext({} as TChallengesContext);

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const levelUp = () => setLevel(level + 1);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const createNotification = ({ amount }) => {
    if (Notification.permission === "granted") {
      new Notification("New Challenge 🎉", {
        body: `Valendo ${amount}xp`,
      });
    }

    new Audio("/notification.mp3").play();
  };

  const startNewChallenge = () => {
    const randomChallenges = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallenges];

    setActiveChallenge(challenge);

    createNotification(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const compleatChallenge = () => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;
    let finalExp = currentExp + amount;

    if (finalExp >= experienceToNextLevel) {
      finalExp = finalExp - experienceToNextLevel;
      levelUp();
    }

    setCurrentExp(finalExp);
    setActiveChallenge(null);
    setCompletedChallenges(completedChallenges + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExp,
        completedChallenges,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        compleatChallenge,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
