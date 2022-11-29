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
          <div classNAme={styles.headerTabs}>
            <p className={styles.header}>Attendance Leaderboard</p>
          </div>

          <div className={styles.leaderboard}>
            <Tabs variant="soft-rounded" colorScheme="blue">
              <div className={styles.leader}>
                <p>Leader 1</p>
              </div>
              <div className={styles.leader}>
                <p>Leader 2</p>
              </div>
              <div className={styles.leader}>
                <p>Leader 3</p>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
