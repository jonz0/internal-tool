import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Switch,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { ArrowsMoveVertical } from "tabler-icons-react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Admin.module.css";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import AdminClass from "./AdminClass";

export default function ManageClasses() {
  const [classes, setClasses] = useState([]);
  const [current, setCurrent] = useState();
  const [alert, setAlert] = useState("");
  const [type, setType] = useState([]);
  const [age, setAge] = useState([]);
  const [open, setOpen] = useState([]);
  const [day, setDay] = useState([]);
  const [message, setMessage] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const [spots, setSpots] = useState([]);
  const [sortValue, setSortValue] = useState(["", false]);
  const [change, setChange] = useState(false);

  async function getClasses() {
    let tempClasses = [];

    const getClasses = await API.graphql({
      query: queries.listClasses,
    });

    if (classes.length == 0) {
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
    } else {
      sortList(sortValue[0]);
    }
  }

  useEffect(() => {
    getClasses();
    setSortValue(["day", false]);
  }, []);

  useEffect(() => {
    if (
      day[0] !== day[1] ||
      type[0] !== type[1] ||
      age[0] !== age[1] ||
      open[0] !== open[1] ||
      message[0] !== message[1] ||
      instructor[0] !== instructor[1] ||
      start[0] !== start[1] ||
      end[0] !== end[1] ||
      spots[0] !== spots[1]
    ) {
      return setChange(true);
    }
    setChange(false);
  }, [day, type, age, open, message, instructor, start, end, spots]);

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

    const updateClass = await API.graphql({
      query: mutations.updateClass,
      variables: {
        input: {
          id: current.id,
          type: type[1],
          age: age[1],
          start: start[1],
          end: end[1],
          message: message == null ? "" : message[1],
          maxSpots: spots[1],
          dayClassesId: day[1],
          classOpen: open[1],
          instructor: instructor[1],
        },
      },
    });

    setChange(false);
  }

  function editClass(cla) {
    setCurrent(cla);
    setDay([cla.dayClassesId, cla.dayClassesId]);
    setAge([cla.age, cla.age]);
    setOpen([cla.classOpen, cla.classOpen]);
    setType([cla.type, cla.type]);
    setStart([cla.start, cla.start]);
    setEnd([cla.end, cla.end]);
    setSpots([cla.maxSpots, cla.maxSpots]);
    setInstructor([cla.instructor, cla.instructor]);
    setMessage([cla.message, cla.message]);
    console.log(instructor);
  }

  function reset(cla) {
    setCurrent(cla);
    setDay((prevState) => [prevState[0], prevState[0]]);
    setAge((prevState) => [prevState[0], prevState[0]]);
    setOpen((prevState) => [prevState[0], prevState[0]]);
    setType((prevState) => [prevState[0], prevState[0]]);
    setStart((prevState) => [prevState[0], prevState[0]]);
    setEnd((prevState) => [prevState[0], prevState[0]]);
    setSpots((prevState) => [prevState[0], prevState[0]]);
    setInstructor((prevState) => [prevState[0], prevState[0]]);
    setMessage((prevState) => [prevState[0], prevState[0]]);
  }

  async function sortList(category) {
    console.log("sorting list by", category);
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
    } else if (category == "instructor") {
      if (category == sortValue[0] && !sortValue[1]) {
        tempClasses.sort((a, b) =>
          (
            b.instructor +
            days[b.dayClassesId] +
            b.start.slice(0, 5).replace(":", "")
          ).localeCompare(
            a.instructor +
              days[a.dayClassesId] +
              a.start.slice(0, 5).replace(":", "")
          )
        );
      } else {
        tempClasses.sort((a, b) =>
          (
            a.instructor +
            days[a.dayClassesId] +
            a.start.slice(0, 5).replace(":", "")
          ).localeCompare(
            b.instructor +
              days[b.dayClassesId] +
              b.start.slice(0, 5).replace(":", "")
          )
        );
      }
    }

    if (category == sortValue[0]) {
      setSortValue((prevState) => [prevState[0], !prevState[1]]);
    } else {
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
          <p className={styles.instructorHeader} id={styles.top}>
            <b>Instructor</b>
            <ArrowsMoveVertical
              size={13}
              strokeWidth={2}
              color={"white"}
              className={styles.sortButton}
              onClick={() => sortList("instructor")}
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
      {current != null && (
        <div className={styles.manageUsersRight}>
          <p className={styles.header}>Edit Class</p>
          <div className={styles.sideBySide}>
            <div className={styles.selectInput}>
              <label className={styles.label}>Day</label>
              <Select
                placeholder="Select"
                size="sm"
                value={day[1]}
                onChange={(event) => {
                  setDay((prevState) => [prevState[0], event.target.value]);
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
                value={type[1]}
                onChange={(event) => {
                  setType((prevState) => [prevState[0], event.target.value]);
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
                value={age[1]}
                onChange={(event) => {
                  setAge((prevState) => [prevState[0], event.target.value]);
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
                defaultValue={spots[1]}
                min={10}
                max={100}
                value={spots[1]}
                onChange={(valueString) => {
                  valueString.replace(/\D/g, "");
                  setSpots((prevState) => [prevState[0], valueString]);
                }}
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
            value={instructor[1]}
            onChange={(event) => {
              setInstructor((prevState) => [prevState[0], event.target.value]);
            }}
            className={styles.input}
          >
            <option value="Leo Serao">Leo</option>
            <option value="Gustavo Andrade">Gustavo</option>
            <option value="Eugene Robinson">Eugene</option>
            <option value="Martin Galinski">Martin</option>
            <option value="Paul Jarvis">Paul</option>
          </Select>
          <div className={styles.sideBySide}>
            <div className={styles.selectInput}>
              <label className={styles.label}>Start Time</label>
              <input
                type="time"
                className={styles.input}
                value={start[1]}
                onChange={(event) => {
                  setStart((prevState) => [prevState[0], event.target.value]);
                }}
                style={{ width: "100%" }}
              />
            </div>
            <div className={styles.selectInput}>
              <label className={styles.label}>End Time</label>
              <input
                type="time"
                className={styles.input}
                value={end[1]}
                onChange={(event) => {
                  setEnd((prevState) => [prevState[0], event.target.value]);
                }}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <label className={styles.label}>Message</label>
          <Input
            type="text"
            value={message == null ? "" : message[1]}
            onChange={(event) => {
              setMessage((prevState) => [prevState[0], event.target.value]);
            }}
            className={styles.input}
            color="black"
            _placeholder={{ color: "inherit" }}
            autoComplete="off"
            size="sm"
          />
          <FormControl
            display="flex"
            alignItems="center"
            className={styles.switchInput}
          >
            <FormLabel mb="0">Closed this week?</FormLabel>
            <Switch
              isChecked={!open[1]}
              onChange={() => {
                setOpen((prevState) => [prevState[0], !prevState[1]]);
              }}
            />
          </FormControl>
          {change && (
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
                  reset(current);
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
