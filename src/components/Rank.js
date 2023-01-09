import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Leaderboard.module.css";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import Day from "./Day";
import { resolve } from "styled-jsx/css";

export default function Rank({ rank, user }) {
  const belts = [
    "/white-belt-icon.png",
    "/yellow-belt-icon.png",
    "/orange-belt-icon.png",
    "/blue-belt-icon.png",
    "/purple-belt-icon.png",
    "/brown-belt-icon.png",
    "/black-belt-icon.png",
  ];

  function getBelt() {
    if (user.llbelt > user.jjbelt) {
      return belts[user.llbelt];
    }
    if (user.jjbelt == 0 && rank % 2 > 0) {
      return "/white-belt-icon-2.png";
    }
    return belts[user.jjbelt];
  }

  return (
    <div className={rank % 2 == 0 ? styles.rankRow : styles.rankRowDark}>
      <p className={styles.rankHeader}>{rank}</p>
      <div className={styles.rankUser}>
        <div className={styles.imageCropperSmall}>
          <img src="/user-placeholder.jpeg" className={styles.rankImage} />
        </div>
        <p style={{ marginLeft: "5px" }} className={styles.nameHeader}>
          {user.firstName + " " + user.lastName}
        </p>
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <img src={getBelt()} className={styles.beltImg} />
      </div>
      <p className={styles.classCount}>
        {user.llhours + user.jjhours + user.kbhours} Classes
      </p>
    </div>
  );
}
