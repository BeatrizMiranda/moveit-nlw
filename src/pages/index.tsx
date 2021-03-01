import React from "react";
import CompletedChallenges from "../components/CompletedChallenges";
import CountDown from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import Head from "next/head";

import styles from "../styles/components/Home.module.css";
import ChallengeBox from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountDownContext";

export default function Home() {
  return (
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
  );
}
