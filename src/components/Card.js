import styles from "../../styles/Leaderboard.module.css";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { useState, useEffect } from "react";

export default function Card({ index, user }) {
  const [name, setName] = useState("");
  const [classes, setClasses] = useState("");
  const awards = [
    ["/gold-cup.png", "1st Place"],
    ["/silver-cup.png", "2nd Place"],
    ["/bronze-cup.png", "3rd Place"],
    ["/karate.png", "Pajama Fans"],
    ["/choke.png", "Oil Checkers"],
    ["/kickboxing.png", "Van Damme"],
  ];

  useEffect(() => {
    async function getLeader() {
      const getUsers = await API.graphql({
        query: queries.listUsers,
      });

      let sorted = [];

      switch (index) {
        case 2:
          sorted = getUsers.data.listUsers.items.sort((a, b) =>
            a.jjHours < b.jjHours ? 1 : -1
          );
        case 3:
          sorted = getUsers.data.listUsers.items.sort((a, b) =>
            a.llHours < b.llHours ? 1 : -1
          );
        case 4:
          sorted = getUsers.data.listUsers.items.sort((a, b) =>
            a.kbHours < b.kbHours ? 1 : -1
          );
      }

      setName(sorted[0].firstName + " " + sorted[0].lastName);
    }

    getLeaders();
  }, []);

  return (
    <div className={styles.card}>
      <p className={styles.subHeader}>{awards[index][1]}</p>
      <div className={styles.awardImages}>
        <img src={awards[index][0]} className={styles.awardImage} />
        <div className={styles.imageCropper}>
          <img src="/user-placeholder.jpeg" className={styles.userImage} />
        </div>
      </div>

      <div className={styles.cardContents}>
        <p className={styles.content}>{user.firstName + " " + user.lastName}</p>
        <p className={styles.content}>{user.classesTotal} Classes</p>
      </div>
    </div>
  );
}
