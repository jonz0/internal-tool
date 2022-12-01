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
import Rankings from "../components/Rankings";
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default withAuthenticator(function Leaderboard() {
  return (
    <AmplifyProvider>
      <div className="page-container">
        <Menu />

        <div className={styles.boardContainer}>
          <div className={styles.titlesContainer}>
            <p className={styles.header}>Ranking - Adults</p>
            <div className={styles.row}>
              <Card index="0" />
              <Card index="1" />
              <Card index="2" />
            </div>
            <p className={styles.header}>Ranking - Kids</p>
            <div className={styles.row}>
              <Card index="0" />
              <Card index="1" />
              <Card index="2" />
            </div>
            <p className={styles.header}>Yearly Titles</p>
            <div className={styles.row}>
              <Card index="3" />
              <Card index="4" />
              <Card index="5" />
            </div>
          </div>

          <div className={styles.classLeaders}>
            <p className={styles.header} style={{ marginBottom: "20px" }}>
              Attendance Leaderboard
            </p>
            <Rankings className={styles.rankings} />
          </div>
        </div>
      </div>
    </AmplifyProvider>
  );
});
