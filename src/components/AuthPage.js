import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import styles from "../../styles/Signup.module.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthPage() {
  return (
    <div className={styles.signupContainer}>
      <div layout="fill" className={styles.coverImg} />
      <div className={styles.loginFace}>
        <img src="/serao-transparent-white.png" className={styles.seraoLogo} />
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
                <LoginForm />
              </TabPanel>
              <TabPanel>
                <SignupForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
