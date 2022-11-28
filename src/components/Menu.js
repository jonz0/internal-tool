import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Day from "./Day";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import DaySet from "./DaySet";
import { useState, useEffect, useRef, useContext } from "react";
import Details from "./Details";
import Class from "./Class";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function Menu() {
  return (
    <div className={styles.toolbar}>
      <Image
        src="/serao-transparent-black.png"
        width="120"
        height="120"
        className={styles.serao}
      />
      <div className={styles.toolkit}>
        <div className={styles.tool}>
          <img src="/icons/HOME.svg" className={styles.toolIcon} />
          <p className={styles.tools}>Classes</p>
        </div>
        <div className={styles.tool}>
          <img src="/icons/STATISTICS.svg" className={styles.toolIcon} />
          <p className={styles.tools}>Profile</p>
        </div>
        <div className={styles.tool}>
          <img src="/icons/GRID.svg" className={styles.toolIcon} />
          <p className={styles.tools}>Leaderboard</p>
        </div>
        <div className={styles.tool}>
          <img src="/icons/LOCK CLOSED.svg" className={styles.toolIcon} />
          <a href="/admin" className={styles.tools}>
            Admin
          </a>
        </div>
        <div className={styles.tool}>
          <img src="/icons/CLOSE.svg" className={styles.toolIcon} />
          <p className={styles.tools}>Sign Out</p>
        </div>
      </div>
    </div>
  );
}
3;
