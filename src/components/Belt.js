import styles from "../../styles/Profile.module.css";

export default function Belt({ index }) {
  const belts = [
    ["/white_belt.png", "White Belt"],
    ["/yellow_belt.png", "Yellow Belt"],
    ["/orange_belt.png", "Orange Belt"],
    ["/blue_belt.png", "Blue Belt"],
    ["/purple_belt.png", "Purple Belt"],
    ["/brown_belt.png", "Brown Belt"],
    ["/black_belt.png", "Black Belt"],
  ];

  return (
    <div className={styles.beltCard}>
      <p className={styles.classType}>Jiu-Jitsu</p>
      <p className={styles.promoteDate}>Promoted July 2021</p>
      <div className={styles.beltImageCropper}>
        <img src={belts[index][0]} className={styles.beltImage} />
      </div>
    </div>
  );
}
