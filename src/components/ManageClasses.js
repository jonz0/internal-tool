import { useEffect, useRef, useState, useContext } from "react";
import styles from "../../styles/Admin.module.css";
import { API, graphqlOperation } from "aws-amplify";
import DaySet from "../components/DaySet";
import {
  Button,
  Avatar,
  Input,
  Alert,
  AlertIcon,
  Select,
} from "@chakra-ui/react";
import Menu from "../components/Menu";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { useForm } from "react-hook-form";
import AdminRank from "./AdminRank";
import { v4 as uuidv4 } from "uuid";
import AdminClass from "./AdminClass";

export default function ManageClasses() {
  const [classes, setClasses] = useState([]);
  const [sort, setSort] = useState({
    jj: [],
    ll: [],
    kb: [],
    kids: [],
    adults: [],
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: [],
  });
  const [editing, setEditing] = useState(false);
  const [current, setCurrent] = useState();
  const [alert, setAlert] = useState("");

  useEffect(() => {
    async function getUsers() {
      let tempClasses = [];
      let tempJj,
        tempLl,
        tempKb,
        tempKids,
        tempAdults,
        tempMon,
        tempTue,
        tempWed,
        tempThu,
        tempFri,
        tempSat,
        tempSun = [];

      let days = {
        sunday: 1,
        monday: 2,
        tuesday: 3,
        wednesday: 4,
        thursday: 5,
        friday: 6,
        saturday: 7,
      };

      const getclasses = await API.graphql({
        query: queries.listClasses,
      });

      getClasses.data.listClasses.items.sort((a, b) =>
        (days[a.dayClassesId] + a.type + a.age).localeCompare(
          days[a.dayClassesId] + b.type + b.age
        )
      );

      getClasses.data.listClasses.items.forEach((cla) => {
        tempClasses.push(cla);

        if (cla.age == "adults") {
          tempAdults.push(cla);
          if (cla.type == "jj") {
            tempJj.push(cla);
          } else if (cla.type == "ll") {
            tempLl.push(cla);
          } else {
            tempKb.push(cla);
          }
          if (cla.dayClassesId == "monday") {
            tempMon.push(cla);
          } else if (cla.dayClassesId == "tuesday") {
            tempTue.push(cla);
          } else if (cla.dayClassesId == "wednesday") {
            tempWed.push(cla);
          } else if (cla.dayClassesId == "thursday") {
            tempThu.push(cla);
          } else if (cla.dayClassesId == "friday") {
            tempFri.push(cla);
          } else if (cla.dayClassesId == "saturday") {
            tempSat.push(cla);
          } else if (cla.dayClassesId == "sunday") {
            tempSun.push(cla);
          }
        } else {
          tempKids.push(cla);
          if (cla.type == "jj") {
            tempJj.push(cla);
          } else if (cla.type == "ll") {
            tempLl.push(cla);
          } else {
            tempKb.push(cla);
          }

          if (cla.dayClassesId == "monday") {
            tempMon.push(cla);
          } else if (cla.dayClassesId == "tuesday") {
            tempTue.push(cla);
          } else if (cla.dayClassesId == "wednesday") {
            tempWed.push(cla);
          } else if (cla.dayClassesId == "thursday") {
            tempThu.push(cla);
          } else if (cla.dayClassesId == "friday") {
            tempFri.push(cla);
          } else if (cla.dayClassesId == "saturday") {
            tempSat.push(cla);
          } else if (cla.dayClassesId == "sunday") {
            tempSun.push(cla);
          }
        }

        setClasses(tempClasses);
        setSort({
          jj: tempJj,
          ll: tempLl,
          kb: tempLl,
          kids: tempKids,
          adults: tempAdults,
          mon: tempMon,
          tue: tempTue,
          wed: tempWed,
          thu: tempThu,
          fri: tempFri,
          sat: tempSat,
          sun: tempSun,
        });
      });
    }
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

  function editUser(cla) {
    console.log("changing to class", cla.id);
    setCurrent(cla);
  }

  return (
    <div className={styles.manageUsersContainer}>
      <div className={styles.manageUsersLeft}>
        <div className={styles.rankRow}>
          <p className={styles.rankHeader}>
            <b>Rank</b>
          </p>
          <div className={styles.rankUser}>
            <p className={styles.studentHeader}>
              <b>Student</b>
            </p>
          </div>
          <p className={styles.age}>
            <b>Group</b>
          </p>
          <p className={styles.enrollDate}>
            <b>Enroll Date</b>
          </p>
          <p className={styles.status}>
            <b>Status</b>
          </p>
        </div>
        <div className={styles.list}>
          {classes.map((c, index) => {
            return (
              <AdminClass
                rank={index + 1}
                class={c}
                key={uuidv4()}
                editClass={editClass}
              />
            );
          })}
        </div>
      </div>
      {(current != null || editing) && (
        <div className={styles.manageUsersRight}>
          <p className={styles.header}>My Profile</p>
          <div className={styles.avatarContainer}>
            <Avatar size="xl" src="/user-placeholder.jpeg" />
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
                color="grey"
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
                color="grey"
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
  );
}
