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
  FormControl,
  FormLabel,
  Switch,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
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
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [open, setOpen] = useState("");
  const [day, setDay] = useState("");
  const [message, setMessage] = useState("");
  const [instructor, setInstructor] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [spots, setSpots] = useState("");

  useEffect(() => {
    async function getClasses() {
      let tempClasses = [];
      let tempJj = [];
      let tempLl = [];
      let tempKb = [];
      let tempKids = [];
      let tempAdults = [];
      let tempMon = [];
      let tempTue = [];
      let tempWed = [];
      let tempThu = [];
      let tempFri = [];
      let tempSat = [];
      let tempSun = [];

      let days = {
        sunday: 1,
        monday: 2,
        tuesday: 3,
        wednesday: 4,
        thursday: 5,
        friday: 6,
        saturday: 7,
      };

      const getClasses = await API.graphql({
        query: queries.listClasses,
      });

      getClasses.data.listClasses.items.sort((a, b) =>
        (days[a.dayClassesId] + a.type + a.age).localeCompare(
          days[a.dayClassesId] + b.type + b.age
        )
      );

      console.log("logging...");
      console.log(getClasses);

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

    getClasses();
  }, [editing]);

  async function saveChanges() {
    if (day.length < 1) {
      return setAlert("Class is missing an assigned day.");
    } else if (type.length < 1) {
      return setAlert("Class is missing an assigned type.");
    } else if (age.length < 1) {
      return setAlert("Class is missing an assigned age group.");
    } else if (start == null) {
      if (end != null) {
        return setAlert("Class is missing a start time.");
      } else {
        return setAlert("Class is missing start and end times.");
      }
    } else if (end == null) {
      if (start != null) {
        return setAlert("Class is missing an end time.");
      }
    }

    const updateclass = await API.graphql({
      query: mutations.updateClass,
      variables: {
        input: {
          id: current.id,
          type: type,
          age: age,
          start: start,
          end: end,
          message: message,
          maxSpots: spots,
          dayClassesId: day,
          classOpen: open,
          instructor: instructor,
        },
      },
    });

    setEditing(false);
    setCurrent();
  }

  function editClass(cla) {
    console.log("changing to class", cla.id);
    setDay(cla.dayClassesId);
    setCurrent(cla);
    setAge(cla.age);
    setOpen(cla.open);
    setType(cla.type);
    setStart(cla.start);
    setEnd(cla.end);
    setSpots(cla.maxSpots);
  }

  return (
    <div className={styles.manageUsersContainer}>
      <div className={styles.manageUsersLeft}>
        <div className={styles.rankRow}>
          <p className={styles.numberHeader}>
            <b>No.</b>
          </p>
          <div className={styles.rankUser}>
            <p className={styles.dayHeader}>
              <b>Day</b>
            </p>
          </div>
          <p className={styles.typeHeader}>
            <b>Type</b>
          </p>
          <p className={styles.ageHeader}>
            <b>Age</b>
          </p>
          <p className={styles.statusHeader}>
            <b>Status</b>
          </p>
        </div>
        <div className={styles.list}>
          {classes.map((c, index) => {
            return (
              <AdminClass
                rank={index + 1}
                cla={c}
                key={uuidv4()}
                editClass={editClass}
              />
            );
          })}
        </div>
      </div>
      {(current != null || editing) && (
        <div className={styles.manageUsersRight}>
          <p className={styles.header}>Edit Class</p>
          {/* <div className={styles.avatarContainer}>
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
          </div> */}
          <div className={styles.sideBySide}>
            <div className={styles.selectInput}>
              <label className={styles.label}>Day</label>
              <Select
                placeholder="Select"
                size="sm"
                disabled={!editing}
                value={day}
                onChange={(event) => {
                  setDay(event.target.value);
                }}
                className={styles.input}
              >
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
              </Select>
            </div>
            <div className={styles.selectInput}>
              <label className={styles.label}>Type</label>
              <Select
                placeholder="Select"
                size="sm"
                disabled={!editing}
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
                style={{ marginTop: "3px" }}
              >
                <option value="jj">Jiu-Jitsu</option>
                <option value="ll">Luta Livre</option>
                <option value="kb">Kickboxing</option>
              </Select>
            </div>
          </div>

          <div className={styles.sideBySide}>
            <div className={styles.selectInput}>
              <label className={styles.label}>Age Group</label>
              <Select
                placeholder="Select"
                size="sm"
                disabled={!editing}
                value={age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
                className={styles.input}
              >
                <option value="adults">Adults</option>
                <option value="kids">Kids</option>
              </Select>
            </div>
            <div className={styles.selectInput}>
              <label className={styles.label}>Availability</label>
              <NumberInput
                size="sm"
                defaultValue={spots}
                min={10}
                max={100}
                disabled={!editing}
                value={spots}
                onChange={(valueString) =>
                  setSpots(valueString.replace(/\D/g, ""))
                }
                style={{ marginTop: "3px" }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>
          </div>

          <label className={styles.label}>Instructor</label>
          <Select
            placeholder="Select"
            size="sm"
            disabled={!editing}
            value={instructor}
            onChange={(event) => {
              setInstructor(event.target.value);
            }}
            className={styles.input}
          >
            <option value="Leopoldo Serao">Leo</option>
            <option value="Gustavo Andrade">Gustavo</option>
            <option value="Eugene Robinson">Eugene</option>
            <option value="Martin Galinski">Martin</option>
          </Select>
          <div className={styles.sideBySide}>
            <div className={styles.selectInput}>
              <label className={styles.label}>Start Time</label>
              <input
                type="time"
                className={editing ? styles.input : styles.inputGray}
                disabled={!editing}
                value={start}
                onChange={(event) => {
                  setStart(event.target.value);
                }}
                style={{ width: "100%" }}
              />
            </div>
            <div className={styles.selectInput}>
              <label className={styles.label}>End Time</label>
              <input
                type="time"
                className={editing ? styles.input : styles.inputGray}
                disabled={!editing}
                value={end}
                onChange={(event) => {
                  setEnd(event.target.value);
                }}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <label className={styles.label}>Message</label>
          <Input
            type="text"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            className={styles.input}
            color="grey"
            _placeholder={{ color: "inherit" }}
            autoComplete="off"
            size="sm"
            disabled={!editing}
          />
          <FormControl
            display="flex"
            alignItems="center"
            className={styles.switchInput}
          >
            <FormLabel mb="0">Close this week?</FormLabel>
            <Switch
              isChecked={current == null ? false : current.open}
              disabled={!editing}
            />
          </FormControl>
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
                  editClass(current);
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
