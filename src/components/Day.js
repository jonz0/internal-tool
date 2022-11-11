import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import Class from "./Class";
import ClassSet from "./ClassSet";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Day({ increment, fetchDetails }) {
  const [sessions, setSessions] = useState([]);

  function getDay() {
    let date = new Date();
    date.setDate(date.getDate() + increment);

    return date.toLocaleDateString("default", { weekday: "long" });
  }

  return (
    <div className={styles.slot}>
      <p className={styles.day}>{getDay()}</p>
      <ClassSet
        day={getDay().toLowerCase()}
        fetchDetails={fetchDetails}
      ></ClassSet>
    </div>
  );
}
