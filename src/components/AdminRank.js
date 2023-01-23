import styles from "../../styles/Admin.module.css";
import { Button } from "@chakra-ui/react";

export default function AdminRank({ rank, user, editUser }) {
  const belts = [
    "/white-belt-icon.png",
    "/yellow-belt-icon.png",
    "/orange-belt-icon.png",
    "/blue-belt-icon.png",
    "/purple-belt-icon.png",
    "/brown-belt-icon.png",
    "/black-belt-icon.png",
  ];

  function getBelt() {
    if (user.llbelt > user.jjbelt) {
      return belts[user.llbelt];
    }
    if (user.jjbelt == 0 && rank % 2 > 0) {
      return "/white-belt-icon-2.png";
    }
    return belts[user.jjbelt];
  }

  return (
    <div className={rank % 2 == 0 ? styles.rankRow : styles.rankRowDark}>
      <p className={styles.rankHeader}>{rank}</p>
      <div className={styles.rankUser}>
        <div className={styles.imageCropperSmall}>
          <img src="/user-placeholder.jpeg" className={styles.rankImage} />
        </div>
        <p style={{ marginLeft: "5px" }} className={styles.nameHeader}>
          {user.firstName + " " + user.lastName}
        </p>
      </div>
      {/* <img src={getBelt()} className={styles.beltImg} /> */}
      <p className={styles.age}>{user.adult ? "Adult" : "Kid"}</p>
      <p className={styles.enrollDate}>
        {user.enroll.slice(5, 7) +
          "/" +
          user.enroll.slice(8) +
          "/" +
          user.enroll.slice(2, 4)}
      </p>
      <p className={styles.status}>{user.active ? "Active" : "Inactive"}</p>
      <Button
        colorScheme="blue"
        size="xs"
        onClick={() => {
          editUser(user);
        }}
      >
        Select
      </Button>
    </div>
  );
}
