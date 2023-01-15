import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Admin.module.css";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import Day from "./Day";
import { resolve } from "styled-jsx/css";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function AdminClass({ rank, cla, editClass }) {
  return (
    <div className={rank % 2 == 0 ? styles.rankRow : styles.rankRowDark}>
      <p className={styles.numberHeader}>{rank}</p>
      <p className={styles.day}>
        {cla.dayClassesId.charAt(0).toUpperCase() + cla.dayClassesId.slice(1)}
      </p>
      <p className={styles.typeHeader}>
        {cla.type == "jj"
          ? "Jiu-Jitsu"
          : cla.type == "ll"
          ? "Luta Livre"
          : "Kickboxing"}
      </p>
      <p className={styles.ageHeader}>
        {cla.age == "adults" ? "Adults" : "Kids"}
      </p>
      <p className={styles.statusHeader}>{cla.classOpen ? "Open" : "Closed"}</p>
      <Button
        colorScheme="blue"
        size="xs"
        onClick={() => {
          editClass(cla);
        }}
      >
        Select
      </Button>
    </div>
  );
}
