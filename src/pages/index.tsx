import React, { useContext } from "react";
import { GetServerSideProps } from "next";

import CompletedChallenges from "../components/CompletedChallenges";
import CountDown from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import Head from "next/head";

import Switcher from "../components/Switcher";
import ChallengeBox from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import styles from "../styles/components/Home.module.css";
import Configurations from "../components/Configurations";

export default function Home({ level, currentExp, completedChallenges, theme, time }) {
  return (
    <ChallengesProvider
      level={level}
      currentExp={currentExp}
      completedChallenges={completedChallenges}
    >
      <ThemeProvider theme={theme}>
        <div className={styles.container}>
          <Head>
            <title>Inicio | MoveIt</title>
          </Head>
          <CountDownProvider time={time}>
            <header className={styles.headerContainer}>
              <Switcher />
              <Configurations />
            </header>
            <ExperienceBar />
            <div className={styles.session}>
              <div>
                <Profile />
                <CompletedChallenges />
                <CountDown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </div>
          </CountDownProvider>
        </div>
      </ThemeProvider>
    </ChallengesProvider>
  );
}

// Note: Data from backend end send to front end
// Note: API call here -> before building interface, do the request and then google has access to this data
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Note: this is Node server

  const {
    level = 1,
    currentExp = 0,
    completedChallenges = 0,
    time = 25 * 60,
    theme = "dark",
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      completedChallenges: Number(completedChallenges),
      time: Number(time),
      theme,
    },
  };
};
