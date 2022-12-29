import styles from "../../styles/Leaderboard.module.css";
import Menu from "../components/Menu";
import Card from "../components/Card";
import Rankings from "../components/Rankings";

export default function Leaderboard() {
  return (
    <div className="page-container">
      <Menu selected="Leaderboard" />

      <div className={styles.boardContainer}>
        <div className={styles.titlesContainer}>
          <p className={styles.header}>Ranking - Adults</p>
          <div className={styles.row}>
            <Card index="0" />
            <Card index="1" />
            <Card index="2" />
          </div>
          <p className={styles.header}>Ranking - Kids</p>
          <div className={styles.row}>
            <Card index="0" />
            <Card index="1" />
            <Card index="2" />
          </div>
          <p className={styles.header}>Yearly Titles</p>
          <div className={styles.row}>
            <Card index="3" />
            <Card index="4" />
            <Card index="5" />
          </div>
        </div>

        <div className={styles.classLeaders}>
          <p className={styles.header} style={{ marginBottom: "20px" }}>
            Attendance Leaderboard
          </p>
          <Rankings className={styles.rankings} />
        </div>
      </div>
    </div>
  );
}
