import { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import styles from "../../styles/Admin.module.css";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState([]);
  const [inactive, setInactive] = useState([]);
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    let all = [];
    async function retrieveUsers() {
      const getUsers = await API.graphql({
        query: queries.listUsers,
      });

      getUsers.data.listUsers.items.forEach((item) => {
        all.push(item);
      });

      setUsers(all);
      setActive(
        all.filter((obj) => {
          return obj.active == true;
        })
      );
      setInactive(
        all.filter((obj) => {
          return obj.active == false;
        })
      );
      setNewUsers(
        all.filter((obj) => {
          return obj.enroll == null;
        })
      );
    }
    retrieveUsers();
  }, []);

  function debug() {
    console.log(active);
  }

  return (
    <div>
      <Button
        mt={4}
        colorScheme="teal"
        style={{ marginRight: "8px" }}
        onClick={debug}
        width="140px"
      >
        Debug
      </Button>
    </div>
  );
}
