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
import { ArrowsMoveVertical } from "tabler-icons-react";

export default function ManageClasses() {
  const [classes, setClasses] = useState([]);
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
  const [sortValue, setSortValue] = useState(["", false]);

  useEffect(() => {
    async function getClasses() {
      let tempClasses = [];

      const getClasses = await API.graphql({
        query: queries.listClasses,
      });

      let days = {
        sunday: "a",
        monday: "b",
        tuesday: "c",
        wednesday: "d",
        thursday: "e",
        friday: "f",
        saturday: "g",
      };

      getClasses.data.listClasses.items.sort((a, b) =>
        (days[a.dayClassesId] + a.type + a.age).localeCompare(
          days[b.dayClassesId] + b.type + b.age
        )
      );

      getClasses.data.listClasses.items.forEach((cla) => {
        tempClasses.push(cla);
      });

      setClasses(tempClasses);
    }
    if (!editing) {
      getClasses();
    }
  }, [editing]);

  useEffect(() => {
    setSortValue(["day", false]);
  }, []);

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
  }

  function editClass(cla) {
    if (editing) {
      setEditing(false);
    }
    setDay(cla.dayClassesId);
    setCurrent(cla);
    setAge(cla.age);
    setOpen(cla.classOpen);
    setType(cla.type);
    setStart(cla.start);
    setEnd(cla.end);
    setSpots(cla.maxSpots);
    setInstructor(cla.instructor);
    setMessage(cla.message);
  }

  async function sortList(category) {
    let tempClasses = [];

    let days = {
      sunday: "a",
      monday: "b",
      tuesday: "c",
      wednesday: "d",
      thursday: "e",
      friday: "f",
      saturday: "g",
    };

    let types = {
      jj: "a",
      ll: "b",
      kb: "c",
    };

    let ages = { adults: "a", kids: "b" };

    classes.forEach((cla) => {
      tempClasses.push(cla);
    });

    if (category == "day") {
      if (category == sortValue[0] && !sortValue[1]) {
        days = {
          sunday: "g",
          monday: "f",
          tuesday: "e",
          wednesday: "d",
          thursday: "c",
          friday: "b",
          saturday: "a",
        };
      }
      tempClasses.sort((a, b) =>
        (
          days[a.dayClassesId] + a.start.slice(0, 5).replace(":", "")
        ).localeCompare(
          days[b.dayClassesId] + b.start.slice(0, 5).replace(":", "")
        )
      );
    } else if (category == "type") {
      if (category == sortValue[0] && !sortValue[1]) {
        types = {
          jj: "c",
          ll: "b",
          kb: "a",
        };
      }
      tempClasses.sort((a, b) =>
        (types[a.type] + days[a.dayClassesId]).localeCompare(
          types[b.type] + days[b.dayClassesId]
        )
      );
    } else if (category == "time") {
      if (category == sortValue[0] && !sortValue[1]) {
        tempClasses.sort((a, b) =>
          (b.start.slice(0, 5).replace(":", "") + types[b.type]).localeCompare(
            a.start.slice(0, 5).replace(":", "") + types[a.type]
          )
        );
      } else {
        tempClasses.sort((a, b) =>
          (a.start.slice(0, 5).replace(":", "") + types[a.type]).localeCompare(
            b.start.slice(0, 5).replace(":", "") + types[b.type]
          )
        );
      }
    } else if (category == "age") {
      if (category == sortValue[0] && !sortValue[1]) {
        ages = {
          adults: "b",
          kids: "a",
        };
      }
      tempClasses.sort((a, b) =>
        (
          ages[a.age] +
          days[a.dayClassesId] +
          types[a.type] +
          a.start.slice(0, 5).replace(":", "")
        ).localeCompare(
          ages[b.age] +
            days[b.dayClassesId] +
            types[b.type] +
            b.start.slice(0, 5).replace(":", "")
        )
      );
    } else if (category == "status") {
      function getStart(open) {
        if (open) {
          return category == sortValue[0] && !sortValue[1] ? "b" : "a";
        } else {
          return category == sortValue[0] && !sortValue[1] ? "a" : "b";
        }
      }
      tempClasses.sort((a, b) =>
        (
          getStart(a.classOpen) +
          ages[a.age] +
          days[a.dayClassesId] +
          types[a.type] +
          a.start.slice(0, 5).replace(":", "")
        ).localeCompare(
          getStart(b.classOpen) +
            ages[b.age] +
            days[b.dayClassesId] +
            types[b.type] +
            b.start.slice(0, 5).replace(":", "")
        )
      );
    }

    if (category == sortValue[0]) {
      console.log("same category");
      setSortValue((prevState) => [prevState[0], !prevState[1]]);
    } else {
      console.log("diff category");
      console.log(category);
      console.log(sortValue[0]);
      setSortValue([category, false]);
    }

    setClasses(tempClasses);
  }

  return (
    <div className={styles.manageUsersContainer}>
      <div className={styles.manageUsersLeft}>
        <div className={styles.topRow}>
          <p className={styles.numberHeader} id={styles.top}>
            <b>No.</b>
          </p>
          <div className={styles.rankUser}>
            <p className={styles.dayHeader} id={styles.top}>
              <b>Day</b>
              <ArrowsMoveVertical
                size={13}
                strokeWidth={2}
                color={"white"}
                onClick={() => sortList("day")}
                className={styles.sortButton}
              />
            </p>
          </div>
          <p className={styles.typeHeader} id={styles.top}>
            <b>Type</b>
            <ArrowsMoveVertical
              size={13}
              strokeWidth={2}
              color={"white"}
              className={styles.sortButton}
              onClick={() => sortList("type")}
            />
          </p>
          <p className={styles.startHeader} id={styles.top}>
            <b>Time</b>
            <ArrowsMoveVertical
              size={13}
              strokeWidth={2}
              color={"white"}
              className={styles.sortButton}
              onClick={() => sortList("time")}
            />
          </p>
          <p className={styles.ageHeader} id={styles.top}>
            <b>Age</b>
            <ArrowsMoveVertical
              size={13}
              strokeWidth={2}
              color={"white"}
              className={styles.sortButton}
              onClick={() => sortList("age")}
            />
          </p>
          <p className={styles.statusHeader} id={styles.top}>
            <b>Status</b>
            <ArrowsMoveVertical
              size={13}
              strokeWidth={2}
              color={"white"}
              className={styles.sortButton}
              onClick={() => sortList("status")}
            />
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
                selected={false}
              />
            );
          })}
        </div>
      </div>
      {(current != null || editing) && (
        <div className={styles.manageUsersRight}>
          <p className={styles.header}>Edit Class</p>
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
            color="black"
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
            <FormLabel mb="0">Closed this week?</FormLabel>
            <Switch
              isChecked={!open}
              onChange={() => setOpen((prevState) => !prevState)}
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
