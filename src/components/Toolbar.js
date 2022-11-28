import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
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
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <Image
        src="/serao-transparent.png"
        width="170"
        height="170"
        className={styles.serao}
      />
      <div className={styles.toolkit}>
        <a href="/admin" className={styles.tools}>
          Admin
        </a>
        <img src="../../public/icons/HOME.svg" />
        <p className={styles.tools}>Home</p>
        <p className={styles.tools}>Profile</p>
        <p className={styles.tools}>Sign Out</p>
      </div>
    </div>
  );
}
