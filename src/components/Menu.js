import React from "react";
import styles from "../../styles/Menu.module.css";
import Image from "next/image";
import Progress from "./Progress";
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Amplify, { Auth } from "aws-amplify";
import UserPool from "../UserPool";
import { Button } from "@chakra-ui/react";
export default function Menu() {
  const currentUser = UserPool.getCurrentUser();

  function debug() {
    console.log("debugging...");

    if (currentUser != null) {
      currentUser.getSession(function (err, session) {
        if (err) {
          console.log(err.message || JSON.stringify(err));
          return;
        }
        console.log("session validity: " + session.isValid());

        // NOTE: getSession must be called to authenticate user before calling getUserAttributes
        currentUser.getUserAttributes(function (err, attributes) {
          if (err) {
            // Handle error
          } else {
            // Do something with attributes
          }
        });

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "us-west-1:cd6ae6a6-edde-450e-90b2-c54f0be36980", // your identity pool id here
          Logins: {
            // Change the key below according to the specific region your user pool is in.
            "cognito-idp.us-west-1.amazonaws.com/us-west-1_490MiqgjE": session
              .getIdToken()
              .getJwtToken(),
          },
        });

        // Instantiate aws sdk service objects now that the credentials have been updated.
        // example: var s3 = new AWS.S3();
      });
    }
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
          {/* <Button
            mt={4}
            colorScheme="teal"
            style={{ marginRight: "8px" }}
            onClick={debug}
          >
            Debug
          </Button> */}
        </div>
      </div>
      <Progress />
    </div>
  );
}
