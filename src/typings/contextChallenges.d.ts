export type TChallengesContext = {
  level: number;
  currentExp: number;
  completedChallenges: number;
  experienceToNextLevel: number;
  levelUp: () => void;
  compleatChallenge: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  activeChallenge: TChallenge;
};

export type TChallenge = {
  type: "body" | "eye";
  description: string;
  amount: number;
};

export type TCountDownContext = {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
};
