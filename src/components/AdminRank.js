import styles from "../../styles/Admin.module.css";
import { Button } from "@chakra-ui/react";

export default function AdminRank({ rank, user, editUser, img }) {
  return (
    <div
      className={rank % 2 == 0 ? styles.rankRow : styles.rankRowDark}
      onClick={() => {
        editUser(user);
      }}
    >
      <p className={styles.rankHeader}>{rank}</p>
      <div className={styles.rankUser}>
        <div className={styles.imageCropperSmall}>
          <img src={img} className={styles.rankImage} />
        </div>
        <p style={{ marginLeft: "5px" }} className={styles.nameHeader}>
          {user.firstName + " " + user.lastName}
        </p>
      </div>
      <p className={styles.ageHeader}>{user.adult ? "Adult" : "Kid"}</p>
      <p className={styles.enrollDate}>
        {user.enroll.slice(5, 7) +
          "/" +
          user.enroll.slice(8) +
          "/" +
          user.enroll.slice(2, 4)}
      </p>
      <p className={styles.status}>{user.active ? "Active" : "Inactive"}</p>
    </div>
  );
}
