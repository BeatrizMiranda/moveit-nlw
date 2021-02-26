export type TChallengesContext = {
  level: number;
  currentExp: number;
  completedChallenges: number;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  activeChallenge: TChallenge;
};

export type TChallenge = {
  type: "body" | "eye";
  description: string;
  amount: number;
};
