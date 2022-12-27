import Menu from "../components/Menu";
import styles from "../../styles/Profile.module.css";
import EditProfile from "../components/EditProfile";
import ProgressChart from "../components/ProgressChart";
import Card from "../components/Card";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <Menu />
      <div className={styles.profileLeft}>
        <EditProfile />
      </div>
      <div className={styles.profileRight}>
        <div className={styles.statusCards}>
          <Card index="0" />
          <Card index="1" />
        </div>
        <div className={styles.progressChart}>
          <ProgressChart />
        </div>
      </div>
    </div>
  );
}
