import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css";
import Belt from "../components/Belt";
import EditProfile from "../components/EditProfile";
import Menu from "../components/Menu";
import ProgressChart from "../components/ProgressChart";
import * as queries from "../graphql/queries";
import UserPool from "../UserPool";

export default function Profile() {
  const [belts, setBelts] = useState([0, 0]);

  useEffect(() => {
    async function getBelts(classType) {
      const queryBelt = await API.graphql({
        query: queries.getUser,
        variables: {
          id: UserPool.getCurrentUser().username,
        },
      });

      setBelts([queryBelt.data.getUser.jjbelt, queryBelt.data.getUser.llbelt]);
    }

    getBelts();
  }, []);

  return (
    <div className="page-container">
      <Menu selected="Profile" />
      <div className={styles.profileContainer}>
        <div className={styles.profileLeft}>
          <EditProfile />
          <div className={styles.statusCards}>
            <Belt index={belts[0]} classType={0} />
            <Belt index={belts[1]} classType={1} />
          </div>
        </div>
        <div className={styles.profileRight}>
          <p className={styles.header}>Monthly Progress</p>
          <ProgressChart />
        </div>
      </div>
    </div>
  );
}
