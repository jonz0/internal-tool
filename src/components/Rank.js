import styles from "../../styles/Leaderboard.module.css";

export default function Rank({ rank, user }) {
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
      <img src={getBelt()} className={styles.beltImg} />
      <p className={styles.classCount}>
        {user.llhours + user.jjhours + user.kbhours}
      </p>
    </div>
  );
}
