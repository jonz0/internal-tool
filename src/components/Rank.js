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
  const belts = ["⬜", "🟨", "🟧", "🟦", "🟪", "🟫", "⬛"];

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
        <p className={styles.jjColor}>{belts[user.jjbelt]}</p>
        <p className={styles.llColor}>{belts[user.llbelt]}</p>
      </div>
      <p className={styles.classCount}>{user.classesTotal} Classes</p>
    </div>
  );
}
