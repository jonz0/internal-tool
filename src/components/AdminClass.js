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
      <p className={styles.rankHeader}>{rank}</p>
      <div className={styles.rankUser}>
        <div className={styles.imageCropperSmall}>
          <img src="/user-placeholder.jpeg" className={styles.rankImage} />
        </div>
        <p style={{ marginLeft: "5px" }} className={styles.nameHeader}>
          {user.firstName + " " + user.lastName}
        </p>
      </div>
      {/* <img src={getBelt()} className={styles.beltImg} /> */}
      <p className={styles.age}>{user.adult ? "Adult" : "Kid"}</p>
      <p className={styles.enrollDate}>
        {user.enroll.slice(5, 7) +
          "/" +
          user.enroll.slice(8) +
          "/" +
          user.enroll.slice(2, 4)}
      </p>
      <p className={styles.status}>{user.active ? "Active" : "Inactive"}</p>
      <Button
        colorScheme="blue"
        size="xs"
        onClick={() => {
          editUser(user);
        }}
      >
        Select
      </Button>
    </div>
  );
}
