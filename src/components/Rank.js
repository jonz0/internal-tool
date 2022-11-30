import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Leaderboard.module.css";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import Day from "./Day";
import { resolve } from "styled-jsx/css";

export default function Rank({ rank, name }) {
  const [color, setColor] = useState("transparent");

  useEffect(() => {
    if (rank % 2 == 0) {
      setColor("rgb(237, 237, 237)");
    }
  }, []);

  return (
    <div className={styles.rankRow} style={{ backgroundColor: color }}>
      <p className={styles.rankHeader}>{rank}</p>
      <div className={styles.rankUser}>
        <div className={styles.imageCropperSmall}>
          <img src="/user-placeholder.jpeg" className={styles.rankImage} />
        </div>
        <p style={{ marginLeft: "5px" }} className={styles.rankHeader}>
          Jackie Chan
        </p>
      </div>
      <p className={styles.rankHeader}>🟪</p>
      <p className={styles.rankHeader}>900 Classes</p>
    </div>
  );
}
