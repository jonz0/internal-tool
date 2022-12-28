import styles from "../../styles/Menu.module.css";
import Image from "next/image";
import ProgressCircle from "./ProgressCircle";
import "@aws-amplify/ui-react/styles.css";
import UserPool from "../UserPool";
import { Button } from "@chakra-ui/react";
import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export default function Menu() {
  const currentUser = UserPool.getCurrentUser();

  async function debug() {
    console.log("debugging...");
  }

  return (
    <div className={styles.toolbar}>
      <Image
        src="/serao-transparent-black.png"
        width="120"
        height="120"
        className={styles.serao}
      />
      <div className={styles.toolkit}>
        <div className={styles.tool}>
          <img src="/icons/HOME.svg" className={styles.toolIcon} />
          <a href="/" className={styles.tools}>
            Classes
          </a>
        </div>
        <div className={styles.tool}>
          <img src="/icons/STATISTICS.svg" className={styles.toolIcon} />
          <a href="/profile" className={styles.tools}>
            Profile
          </a>
        </div>
        <div className={styles.tool}>
          <img src="/icons/GRID.svg" className={styles.toolIcon} />
          <a href="/leaderboard" className={styles.tools}>
            Leaderboard
          </a>
        </div>

        <hr className={styles.hl} />

        <div className={styles.tool}>
          <img src="/icons/LOCK CLOSED.svg" className={styles.toolIcon} />
          <a href="/admin" className={styles.tools}>
            Admin
          </a>
        </div>
        <div className={styles.tool}>
          <img src="/icons/CLOSE.svg" className={styles.toolIcon} />
          <p
            className={styles.tools}
            onClick={() => {
              const currentUser = UserPool.getCurrentUser();

              if (currentUser != null) {
                currentUser.signOut();
              }

              window.location.reload();
            }}
          >
            Sign Out
          </p>
        </div>
        {/* <Button
          mt={4}
          colorScheme="teal"
          style={{ marginRight: "8px" }}
          onClick={debug}
          width="140px"
        >
          Debug
        </Button> */}
      </div>
      <ProgressCircle />
    </div>
  );
}
