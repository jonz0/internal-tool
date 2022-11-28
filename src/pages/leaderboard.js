import Head from "next/head";
import styles from "../../styles/Leaderboard.module.css";
import Day from "../components/Day";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import DaySet from "../components/DaySet";
import { useState, useEffect, useRef, useContext } from "react";
import Details from "../components/Details";
import Class from "../components/Class";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Menu from "../components/Menu";
import Card from "../components/Card";

export default function Leaderboard() {
  return (
    <div className="page-container">
      <Menu />

      <div className={styles.boardContainer}>
        <div className={styles.titlesContainer}>
          <div className={styles.adults}>
            <Card />
            <Card />
            <Card />
          </div>
          <div className={styles.kids}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className={styles.new}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.classLeaders}>
          <h1>Attendance Leaderboard</h1>
          <div className={styles.leader}>
            <p>Leader 1</p>
          </div>
          <div className={styles.leader}>
            <p>Leader 2</p>
          </div>
          <div className={styles.leader}>
            <p>Leader 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
