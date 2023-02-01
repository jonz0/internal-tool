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

  const bg = ["#fff3bd", "#e4eff5", "#ffebd6"];

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
    <div
      className={rank % 2 == 0 ? styles.rankRow : styles.rankRowDark}
      style={rank < 4 ? { backgroundColor: bg[rank - 1] } : {}}
    >
      <p className={styles.rankHeader}>{rank}</p>
      <div className={styles.studentDiv}>
        <div className={styles.imageCropperSmall}>
          <img
            src={
              "https://amplify-calendarsignup-dev-20052-deployment.s3.us-west-1.amazonaws.com/photos/" +
              user.username +
              "-profile-image.png"
            }
            className={styles.rankImage}
          />
        </div>
        <p style={{ marginLeft: "5px" }} className={styles.nameHeader}>
          {user.firstName + " " + user.lastName}
        </p>
      </div>
      <img src={getBelt()} className={styles.beltImg} />
      <p className={styles.classHeader}>
        {user.llhours + user.jjhours + user.kbhours}
      </p>
    </div>
  );
}
