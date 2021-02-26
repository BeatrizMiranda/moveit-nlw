import { createContext, useState } from "react";
import challenges from "../../challenges.json";
import { TChallengesContext } from "../typings/contextChallenges";

export const ChallengesContext = createContext({} as TChallengesContext);

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const levelUp = () => setLevel(level + 1);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const startNewChallenge = () => {
    console.log("aaaaa");
    const randomChallenges = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallenges];

    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
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
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
