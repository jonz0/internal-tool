import Menu from "../components/Menu";
import styles from "../../styles/Profile.module.css";
import EditProfile from "../components/EditProfile";
import ProgressChart from "../components/ProgressChart";
import Card from "../components/Card";
import Belt from "../components/Belt";

export default function Profile() {
  return (
    <div className="page-container">
      <Menu />
      <div className={styles.profileContainer}>
        <div className={styles.profileLeft}>
          <EditProfile />
        </div>
        <div className={styles.profileRight}>
          <p className={styles.rightHeader}>Achievements</p>
          <div className={styles.statusCards}>
            <Belt index="0" />
            <Belt index="0" />
            <div className={styles.tableDisplay}>
              <Card index="0" />
            </div>
          </div>
          <p className={styles.rightHeader}>Monthly Progress</p>
          <div className={styles.progressChart}>
            <ProgressChart />
          </div>
        </div>
      </div>
    </div>
  );
}
