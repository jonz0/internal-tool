import React, { useEffect, useRef, useState, useContext } from "react";

import Head from "next/head";
import styles from "../../styles/Admin.module.css";
import Day from "../components/Day";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import DaySet from "../components/DaySet";
import Details from "../components/Details";
import Class from "../components/Class";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Toolbar from "../components/Toolbar";

async function buildDefaultSchema() {
  const newTodo = await API.graphql(
    graphqlOperation(mutations.createDay, { input: { id: "flunday" } })
  ); // equivalent to above example
}

export default function admin() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className="calendar-container">
        <div className="admin-container">
          <p className={styles.detailsHeader}>Management Beta</p>
          <Button onClick={buildDefaultSchema}>Build Default Schema</Button>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.details}>
          <p className={styles.detailsHeader}>Details</p>
        </div>
      </div>
    </div>
  );
}
