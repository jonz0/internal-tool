import styles from "../../styles/Leaderboard.module.css";

export default function Card({ index }) {
  const awards = [
    ["/gold-cup.png", "1st Place"],
    ["/silver-cup.png", "2nd Place"],
    ["/bronze-cup.png", "3rd Place"],
    ["/karate.png", "Pajama Fans"],
    ["/choke.png", "Oil Checkers"],
    ["/kickboxing.png", "Van Damme"],
  ];

  return (
    <div className={styles.card}>
      <p className={styles.subHeader}>{awards[index][1]}</p>
      <div className={styles.cardContainer}>
        <div className={styles.awardImages}>
          <img src={awards[index][0]} className={styles.awardImage} />
          <div className={styles.imageCropper}>
            <img src="/user-placeholder.jpeg" className={styles.userImage} />
          </div>
        </div>

        <div className={styles.cardContents}>
          <p className={styles.content}>Jackie Chan</p>
          <p className={styles.content}>900 Classes</p>
        </div>
      </div>
    </div>
  );
}
