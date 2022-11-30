import { useState, useEffect, useRef, useContext } from "react";
import { DetailsContext } from "./Class";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Menu.module.css";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { API } from "aws-amplify";
import { setToRemove } from "../features/class/removeStaging";
import Image from "next/image";
import { CircularProgressbar } from "react-circular-progressbar";

export default function Progress({ index }) {
  const progress = 12;
  const goal = 20;
  const percentage = (progress / goal) * 100;

  return (
    <div className={styles.progressCard}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      <p style={{ textAlign: "center" }}>Set a goal</p>
      <p style={{ textAlign: "center" }}>
        {progress} out of {goal} hours
      </p>
    </div>
  );
}
