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

export default function Card({ index }) {
  const awards = [
    ["/gold-cup.png", "1st Place"],
    ["/silver-cup.png", "2nd Place"],
    ["/bronze-cup.png", "3rd Place"],
    ["/karate.png", "Pajama Fans"],
    ["/choke.png", "Oil Checkers"],
    ["/kickboxing.png", "Van Damme"],
  ];

  return (
    <div className={styles.card}>
      <p className={styles.subHeader}>{awards[index][1]}</p>
      <div className={styles.cardContainer}>
        <div className={styles.awardImages}>
          <img src={awards[index][0]} className={styles.awardImage} />
          <div className={styles.imageCropper}>
            <img src="/user-placeholder.jpeg" className={styles.userImage} />
          </div>
        </div>

        <div className={styles.cardContents}>
          <p className={styles.content}>Jackie Chan</p>
          <p className={styles.content}>900 Classes</p>
        </div>
      </div>
    </div>
  );
}
