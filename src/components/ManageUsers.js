import { useEffect, useRef, useState, useContext } from "react";
import styles from "../../styles/Admin.module.css";
import { API, graphqlOperation } from "aws-amplify";
import {
  Button,
  Avatar,
  Input,
  Alert,
  AlertIcon,
  Select,
} from "@chakra-ui/react";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import AdminRank from "./AdminRank";
import { v4 as uuidv4 } from "uuid";
import { ArrowsMoveVertical } from "tabler-icons-react";
import _ from "lodash";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [jj, setJj] = useState("");
  const [ll, setLl] = useState("");
  const [enroll, setEnroll] = useState("");
  const [renew, setRenew] = useState("");
  const [freezeStart, setFreezeStart] = useState("");
  const [freezeEnd, setFreezeEnd] = useState("");
  const [editing, setEditing] = useState(false);
  const [current, setCurrent] = useState();
  const [alert, setAlert] = useState("");

  useEffect(() => {
    async function getUsers() {
      let tempUsers = [];
      let tempKids = [];
      let tempAdults = [];
      let tempActive = [];
      let tempInactive = [];

      const getUsers = await API.graphql({
        query: queries.listUsers,
      });

      getUsers.data.listUsers.items.sort((a, b) =>
        (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName)
      );

      getUsers.data.listUsers.items.forEach((user) => {
        tempUsers.push(user);

        if (user.adult == true) {
          tempAdults.push(user);
        } else {
          tempKids.push(user);
        }

        if (user.active == true) {
          tempActive.push(user);
        } else {
          tempInactive.push(user);
        }
      });

      setUsers(tempUsers);
    }

    getUsers();
  }, [editing]);

  async function saveChanges() {
    if (first.length < 1) {
      setFirst(current.firstName);
    } else if (last.length < 1) {
      setLast(current.lastName);
    } else if (jj == null) {
      setJj(current.jjbelt);
    } else if (ll == null) {
      setLl(current.llbelt);
    } else if (enroll == null) {
      setEnroll(current.enroll);
    } else if (renew == null) {
      setEnroll(current.renew);
    } else if (freezeStart == null) {
      if (freezeEnd != null) {
        return setAlert("User is missing a Freeze Start date.");
      }
    } else if (freezeEnd == null) {
      if (freezeStart != null) {
        return setAlert("User is missing a Freeze End date.");
      }
    }

    const updateUser = await API.graphql({
      query: mutations.updateUser,
      variables: {
        input: {
          id: current.username,
          firstName: first,
          lastName: last,
          jjbelt: jj,
          llbelt: ll,
          enroll: enroll,
          renew: renew,
          freezeStart: freezeStart,
          freezeEnd: freezeEnd,
        },
      },
    });

    setEditing(false);
    setCurrent();
  }

  function editUser(user) {
    setCurrent(user);
    setUsername(user.username);
    setFirst(user.firstName);
    setLast(user.lastName);
    setJj(user.jjbelt);
    setLl(user.llbelt);
    setFreezeStart(user.freezeStart);
    setFreezeEnd(user.freezeEnd);
    setEnroll(user.enroll);
    setRenew(user.renew);
  }

  return (
    <div>
      <p className={styles.header}>Manage Users</p>
      <div className={styles.manageUsersContainer}>
        <div className={styles.manageUsersLeft}>
          <div className={styles.topRow}>
            <p className={styles.rankHeader} id={styles.top}>
              <b>Rank</b>
            </p>
            <div className={styles.rankUser}>
              <p className={styles.studentHeader} id={styles.top}>
                <b>Student</b>
                <ArrowsMoveVertical
                  size={13}
                  strokeWidth={2}
                  color={"white"}
                  onClick={() => sortList("day")}
                  className={styles.sortButton}
                />
              </p>
            </div>
            <p className={styles.ageHeader} id={styles.top}>
              <b>Age</b>
              <ArrowsMoveVertical
                size={13}
                strokeWidth={2}
                color={"white"}
                className={styles.sortButton}
                onClick={() => sortList("type")}
              />
            </p>
            <p className={styles.enrollDate} id={styles.top}>
              <b>Enrolled</b>
              <ArrowsMoveVertical
                size={13}
                strokeWidth={2}
                color={"white"}
                className={styles.sortButton}
                onClick={() => sortList("time")}
              />
            </p>
            <p className={styles.statusHeader} id={styles.top}>
              <b>Status</b>
              <ArrowsMoveVertical
                size={13}
                strokeWidth={2}
                color={"white"}
                className={styles.sortButton}
                onClick={() => sortList("age")}
              />
            </p>
          </div>
          <div className={styles.list}>
            {users.map((c, index) => {
              return (
                <AdminRank
                  rank={index + 1}
                  user={c}
                  img={
                    "https://amplify-calendarsignup-dev-20052-deployment.s3.us-west-1.amazonaws.com/photos/" +
                    c.username +
                    "-profile-image.png"
                  }
                  key={uuidv4()}
                  editUser={editUser}
                />
              );
            })}
          </div>
        </div>
        {(current != null || editing) && (
          <div className={styles.manageUsersRight}>
            <div className={styles.editClassBar}>
              <p className={styles.editClassHeader}>Edit User</p>
            </div>
            <div className={styles.avatarContainer}>
              <Avatar
                size="xl"
                src={
                  "https://amplify-calendarsignup-dev-20052-deployment.s3.us-west-1.amazonaws.com/photos/" +
                  username +
                  "-profile-image.png"
                }
              />
              <div className={styles.avatarRight}>
                <p className={styles.subHeader}>{first + " " + last}</p>
                <p className={styles.joined}>
                  {"Enrolled " +
                    new Date(
                      new Date(
                        enroll.slice(0, 4),
                        enroll.slice(5, 7),
                        enroll.slice(8) - 1
                      )
                    ).toLocaleString("default", {
                      month: "long",
                    }) +
                    " " +
                    enroll.slice(0, 4)}
                </p>
                <p className={styles.joined}>
                  {current.active ? "Status: Active" : "Status: Inactive"}
                </p>
                <p className={styles.joined}>
                  {current.enroll == null ? "Awaiting Approval" : ""}
                </p>
              </div>
            </div>
            <div className={styles.namesContainer}>
              <div>
                <label className={styles.label}>First Name</label>
                <Input
                  id="firstname"
                  type="text"
                  value={first}
                  onChange={(event) => {
                    setFirst(event.target.value);
                  }}
                  className={styles.input}
                  color="black"
                  _placeholder={{ color: "inherit" }}
                  autoComplete="off"
                  size="sm"
                  disabled={!editing}
                />
              </div>
              <div>
                <label className={styles.label}>Last Name</label>
                <Input
                  id="lastname"
                  type="text"
                  value={last}
                  onChange={(event) => {
                    setLast(event.target.value);
                  }}
                  className={styles.input}
                  color="black"
                  _placeholder={{ color: "inherit" }}
                  autoComplete="off"
                  size="sm"
                  disabled={!editing}
                />
              </div>
            </div>
            <div className={styles.sideBySide}>
              <div className={styles.selectInput}>
                <label className={styles.label}>Jiu-Jitsu Belt</label>
                <Select
                  placeholder="Select"
                  size="sm"
                  disabled={!editing}
                  value={jj}
                  onChange={(event) => {
                    setJj(event.target.value);
                  }}
                >
                  <option value="0">White</option>
                  <option value="1">Yellow</option>
                  <option value="2">Orange</option>
                  <option value="3">Blue</option>
                  <option value="4">Purple</option>
                  <option value="5">Brown</option>
                  <option value="6">Black</option>
                </Select>
              </div>
              <div className={styles.selectInput}>
                <label className={styles.label}>Luta Livre Belt</label>
                <Select
                  placeholder="Select"
                  size="sm"
                  disabled={!editing}
                  value={ll}
                  onChange={(event) => {
                    setLl(event.target.value);
                  }}
                  className={styles.input}
                >
                  <option value="0">White</option>
                  <option value="1">Yellow</option>
                  <option value="2">Orange</option>
                  <option value="3">Blue</option>
                  <option value="4">Purple</option>
                  <option value="5">Brown</option>
                  <option value="6">Black</option>
                </Select>
              </div>
            </div>
            <div className={styles.sideBySide}>
              <div className={styles.selectInput}>
                <label className={styles.label}>Enroll Date</label>
                <input
                  type="date"
                  className={editing ? styles.input : styles.inputGray}
                  disabled={!editing}
                  value={enroll}
                  onChange={(event) => {
                    setEnroll(event.target.value);
                  }}
                />
              </div>
              <div className={styles.selectInput}>
                <label className={styles.label}>Renew Date</label>
                <input
                  type="date"
                  className={editing ? styles.input : styles.inputGray}
                  disabled={!editing}
                  value={renew}
                  onChange={(event) => {
                    setRenew(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className={styles.sideBySide}>
              <div className={styles.selectInput}>
                <label className={styles.label}>Freeze Start</label>
                <input
                  type="date"
                  className={editing ? styles.input : styles.inputGray}
                  disabled={!editing}
                  value={freezeStart}
                  onChange={(event) => {
                    setFreezeStart(event.target.value);
                  }}
                />
              </div>
              <div className={styles.selectInput}>
                <label className={styles.label}>Freeze End</label>
                <input
                  type="date"
                  className={editing ? styles.input : styles.inputGray}
                  disabled={!editing}
                  value={freezeEnd}
                  onChange={(event) => {
                    setFreezeEnd(event.target.value);
                  }}
                />
              </div>
            </div>
            {!editing && (
              <Button
                mt={4}
                colorScheme="blue"
                className={styles.submitButtons}
                size="sm"
                onClick={() => setEditing(true)}
                style={{ width: "120px" }}
              >
                Start Editing
              </Button>
            )}
            {editing && (
              <div className={styles.sideBySide}>
                <Button
                  mt={4}
                  colorScheme="teal"
                  className={styles.submitButtons}
                  size="sm"
                  onClick={saveChanges}
                  style={{ width: "120px" }}
                >
                  Save Changes
                </Button>
                <Button
                  mt={4}
                  colorScheme="red"
                  className={styles.submitButtons}
                  size="sm"
                  onClick={() => {
                    setEditing(false);
                    editUser(current);
                  }}
                  style={{ width: "70px" }}
                >
                  Cancel
                </Button>
              </div>
            )}
            <div className={styles.statusAlerts}>
              {alert.length > 0 && (
                <Alert status="error" height="40px" fontSize="sm">
                  <AlertIcon />
                  {alert}
                </Alert>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
