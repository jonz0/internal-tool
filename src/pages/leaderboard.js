import { a, API } from "aws-amplify";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Leaderboard.module.css";
import Card from "../components/Card";
import Menu from "../components/Menu";
import Rank from "../components/Rank";
import * as queries from "../graphql/queries";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [kids, setKids] = useState([]);
  const [adults, setAdults] = useState([]);

  useEffect(() => {
    async function getLeaders() {
      const getUsers = await API.graphql({
        query: queries.listUsers,
      });

      let sorted = getUsers.data.listUsers.items.sort((a, b) =>
        a.jjhours + a.llhours + a.kbhours < b.jjhours + b.llhours + b.kbhours
          ? 1
          : -1
      );

      setLeaders(sorted);

      let sortedAdults = [];
      let sortedKids = [];

      sorted.forEach((item) => {
        if (item.adult == true) {
          sortedAdults.push(item);
        } else {
          sortedKids.push(item);
        }
      });

      setAdults(sortedAdults);
      setKids(sortedKids);
    }

    getLeaders();
  }, []);

  return (
    <div className="page-container">
      <Menu selected="Leaderboard" />

      <div className={styles.boardContainer}>
        <div className={styles.titlesContainer}>
          <div>
            <p className={styles.header}>Ranking - Adults</p>
            <div className={styles.row}>
              <Card index="0" user={adults[0]} />
              <Card index="1" user={adults[1]} />
              <Card index="2" user={adults[2]} />
            </div>
          </div>
          <div>
            <p className={styles.header}>Ranking - Kids</p>
            <div className={styles.row}>
              <Card index="0" user={kids[0]} />
              <Card index="1" user={kids[1]} />
              <Card index="2" user={kids[2]} />
            </div>
          </div>
          <div>
            <p className={styles.header}>Yearly Titles</p>
            <div className={styles.row}>
              <Card index={3} />
              <Card index={4} />
              <Card index={5} />
            </div>
          </div>
        </div>

        <div className={styles.classLeaders}>
          <p className={styles.leaderboardHeader}>Leaderboard</p>
          <div className={styles.topRow}>
            <p className={styles.rankHeader} id={styles.top}>
              <b>Rank</b>
            </p>
            <p className={styles.studentHeader} id={styles.top}>
              <b>Student</b>
            </p>
            <p className={styles.beltHeader} id={styles.top}>
              <b>Belt</b>
            </p>
            <p className={styles.classHeader} id={styles.top}>
              <b>Classes</b>
            </p>
          </div>
          <div className={styles.list}>
            {leaders.map((c, index) => {
              return <Rank rank={index + 1} user={c} key={uuidv4()} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
