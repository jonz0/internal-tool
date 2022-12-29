import { useEffect, useRef, useState, useContext } from "react";
import styles from "../../styles/Home.module.css";
import { API, graphqlOperation } from "aws-amplify";
import DaySet from "../components/DaySet";
import DetailsAdmin from "../components/DetailsAdmin";
import {
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Menu from "../components/Menu";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import ManageUsers from "../components/ManageUsers";
import ManageAttendees from "../components/ManageAttendees";
import ManageClasses from "../components/ManageClasses";
import { useSelector, useDispatch } from "react-redux";

function debug() {
  console.log(retrieveInactives());
}

async function retrieveInactives() {
  const getInactives = await API.graphql({
    query: queries.listUsers,
    variables: {
      filter: { enroll: { attributeExists: false } },
    },
  });

  return getInactives.data.listUsers.items.resolve;
}

async function buildDefaultSchema() {
  const newTodo = await API.graphql(
    graphqlOperation(mutations.createDay, { input: { id: "flunday" } })
  ); // equivalent to above example
}

export default function admin() {
  const adminState = useSelector((state) => state.admin.value);
  return (
    <div className="page-container">
      <Menu selected="Admin" />
      <div className={styles.pageRight}>
        {adminState == "Manage Attendees" && <ManageAttendees />}
        {adminState == "Manage Users" && <ManageUsers />}
        {adminState == "Manage Classes" && <ManageClasses />}
      </div>
    </div>
  );
}
