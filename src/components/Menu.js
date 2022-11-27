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
        width="90"
        height="90"
        className={styles.serao}
      />
      <div className={styles.toolkit}>
        <p className={styles.tools}>Classes</p>
        <p className={styles.tools}>Profile</p>
        <p className={styles.tools}>Leaderboard</p>
        <a href="/admin" className={styles.tools}>
          Admin
        </a>
        <p className={styles.tools}>Sign Out</p>
      </div>
    </div>
  );
}
