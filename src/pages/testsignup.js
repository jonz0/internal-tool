import Signup from "../components/Signup";
import Login from "../components/Login";
import UserPool from "../UserPool";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function TestSignup() {
  return (
    <div className="page-container">
      <Tabs isFitted variant="enclosed">
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
  );
}
