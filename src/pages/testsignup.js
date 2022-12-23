import Signup from "../components/Signup";
import Login from "../components/Login";
import UserPool from "../UserPool";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import styles from "../../styles/Signup.module.css";
import Image from "next/image";

export default function TestSignup() {
  return (
    <div className={styles.signupContainer}>
      <Image
        src="/lucas-serao.jpeg"
        layout="fill"
        objectFit="contain"
        width="10000"
        height="10000"
        className={styles.coverImg}
      />
      <div className={styles.loginFace}>
        <Image
          src="/serao-transparent-white.png"
          width="10000"
          height="10000"
          className={styles.seraoLogo}
        />
        <div className={styles.vl}></div>
        <div className={styles.authBox}>
          <Tabs
            isFitted
            variant="enclosed"
            className={styles.tabs}
            color="white"
            colorScheme="white"
          >
            <TabList mb="1em">
              <Tab>Log In</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
