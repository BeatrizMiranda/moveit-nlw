import React, { createContext, useEffect, useState } from "react";
import { TChallengesContext } from "../typings/contextChallenges";
import challenges from "../../challenges.json";
import Cookies from "js-cookie";
import { LevelUpModal } from "../components/LevelUpModal";

export const ChallengesContext = createContext({} as TChallengesContext);

type TChallengesProvider = {
  level: number;
  currentExp: number;
  completedChallenges: number;
};

export const ChallengesProvider: React.FC<TChallengesProvider> = ({ children, ...props }) => {
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [level, setLevel] = useState(props.level ?? 1);
  const [currentExp, setCurrentExp] = useState(props.currentExp ?? 0);
  const [completedChallenges, setCompletedChallenges] = useState(props.completedChallenges ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  };

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", `${level}`);
    Cookies.set("currentExp", `${currentExp}`);
    Cookies.set("completedChallenges", `${completedChallenges}`);
  }, [level, currentExp, completedChallenges]);

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
      {isLevelUpModalOpen && <LevelUpModal setIsLevelUpModalOpen={setIsLevelUpModalOpen} />}
    </ChallengesContext.Provider>
  );
};
