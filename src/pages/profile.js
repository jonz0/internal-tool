import Menu from "../components/Menu";
import styles from "../../styles/Profile.module.css";
import EditProfile from "../components/EditProfile";
import ProgressChart from "../components/ProgressChart";
import Card from "../components/Card";
import Belt from "../components/Belt";
import UserPool from "../UserPool";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { useState, useEffect } from "react";

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
        </div>
        <div className={styles.profileRight}>
          <p className={styles.rightHeader}>Achievements</p>
          <div className={styles.statusCards}>
            <Belt index={belts[0]} classType={0} />
            <Belt index={belts[1]} classType={1} />
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
