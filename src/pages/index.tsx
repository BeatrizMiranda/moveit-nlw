import React from "react";
import { GetServerSideProps } from "next";

import CompletedChallenges from "../components/CompletedChallenges";
import CountDown from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import Head from "next/head";

import styles from "../styles/components/Home.module.css";
import ChallengeBox from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

export default function Home({ level, currentExp, completedChallenges }) {
  return (
    <ChallengesProvider
      level={level}
      currentExp={currentExp}
      completedChallenges={completedChallenges}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | MoveIt</title>
        </Head>
        <ExperienceBar />
        <CountDownProvider>
          <session>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </session>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

// Note: Data from backend end send to front end
// Note: API call here -> before building interface, do the request and then google has access to this data
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Note: this is Node server

  const { level = 1, currentExp = 0, completedChallenges = 0 } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      completedChallenges: Number(completedChallenges),
    },
  };
};
