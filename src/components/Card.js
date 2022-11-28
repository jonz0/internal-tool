import { useState, useEffect, useRef, useContext } from "react";
import { DetailsContext } from "./Class";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Leaderboard.module.css";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { API } from "aws-amplify";
import { setToRemove } from "../features/class/removeStaging";
import Image from "next/image";

export default function Card({ attendee }) {
  const details = useSelector((state) => state.removeStaging.value);
  const belts = ["⬜", "🟨", "🟧", "🟦", "🟪", "🟫", "⬛"];

  return (
    <div className={styles.card}>
      <Image
        src="/user-placeholder.jpeg"
        width="70"
        height="70"
        className={styles.serao}
      />
      <p>Jackie Chan</p>
      <p>Belts</p>
    </div>
  );
}
