import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import styles from "../../styles/Leaderboard.module.css";
import * as queries from "../graphql/queries";

export default function Card({ index, user }) {
  const [userData, setUserData] = useState("");
  const [classes, setClasses] = useState(0);
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
        sorted = getUsers.data.listUsers.items.sort(function (a, b) {
          return b.jjhours - a.jjhours;
        });
        setClasses(sorted[0].jjhours);
      } else if (index == 4) {
        sorted = getUsers.data.listUsers.items.sort(function (a, b) {
          return b.llhours - a.llhours;
        });
        setClasses(sorted[0].llhours);
      } else if (index == 5) {
        sorted = getUsers.data.listUsers.items.sort(function (a, b) {
          return b.kbhours - a.kbhours;
        });
        setClasses(sorted[0].kbhours);
      }
      setUserData(sorted[0]);
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
          <img
            src={
              user != null
                ? "https://amplify-calendarsignup-dev-20052-deployment.s3.us-west-1.amazonaws.com/photos/" +
                  user.username +
                  "-profile-image.png?" +
                  Date.now()
                : "https://amplify-calendarsignup-dev-20052-deployment.s3.us-west-1.amazonaws.com/photos/" +
                  userData.username +
                  "-profile-image.png?" +
                  Date.now()
            }
            className={styles.userImage}
          />
        </div>
      </div>

      <div className={styles.cardContents}>
        <p className={styles.content}>
          {user != null
            ? user.firstName + " " + user.lastName
            : userData.firstName + " " + userData.lastName}
        </p>
        <p className={styles.content}>
          {user != null ? user.llhours + user.jjhours : classes} Classes
        </p>
      </div>
    </div>
  );
}
