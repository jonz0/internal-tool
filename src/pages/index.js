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

export default function Home() {
  return (
    <div className="page-container">
      <div className={styles.toolbar}>
        <Image
          src="/serao-transparent.png"
          width="150"
          height="150"
          className={styles.serao}
        />
        <div className={styles.toolkit}>
          <p className={styles.tools}>Home</p>
          <p className={styles.tools}>Profile</p>
          <p className={styles.tools}>Sign Out</p>
        </div>
      </div>
      <div className="calendar-container">
        <div className="signup-container">
          <DaySet />
        </div>
        <div className={styles.vl}></div>
        <div className={styles.details}>
          <p className={styles.detailsHeader}>Details</p>
          <Details />
          {/* <Button
            onClick={() => {
              console.log("STUDENTS");
              console.log(students);
            }}
          >
            STUDENTS
          </Button> */}
        </div>
      </div>
    </div>
  );
}
