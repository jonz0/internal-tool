import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import styles from "../../styles/Leaderboard.module.css";
import * as queries from "../graphql/queries";

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

      if (index == 3) {
        sorted = getUsers.data.listUsers.items.sort((a, b) =>
          a.jjHours < b.jjHours ? 1 : -1
        );
        setClasses(sorted[0].jjhours);
        // console.log(sorted[0].firstName + " " + sorted[0].lastName);
      } else if (index == 4) {
        sorted = getUsers.data.listUsers.items.sort((a, b) =>
          a.llHours < b.llHours ? 1 : -1
        );
        setClasses(sorted[0].llhours);
      } else if (index == 5) {
        sorted = getUsers.data.listUsers.items.sort((a, b) =>
          a.kbHours < b.kbHours ? 1 : -1
        );
        setClasses(sorted[0].kbhours);
        // console.log(sorted[0]);
      }
      setName(sorted[0].firstName + " " + sorted[0].lastName);
    }
    if (index > 2) {
      getLeader();
    }
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
        <p className={styles.content}>
          {user != null ? user.firstName + " " + user.lastName : name}
        </p>
        <p className={styles.content}>
          {user != null ? user.llhours + user.jjhours : classes} Classes
        </p>
      </div>
    </div>
  );
}
