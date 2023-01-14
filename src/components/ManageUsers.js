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
import FileUpload from "./FileUpload";
import { useForm } from "react-hook-form";
import AdminRank from "./AdminRank";
import { v4 as uuidv4 } from "uuid";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [kids, setKids] = useState([]);
  const [adults, setAdults] = useState([]);
  const [active, setActive] = useState([]);
  const [inactive, setInactive] = useState([]);
  const [editUser, setEditUser] = useState();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [editing, setEditing] = useState(false);

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
      setAdults(tempAdults);
      setKids(tempKids);
      setActive(tempActive);
      setInactive(tempInactive);
    }

    getUsers();
  }, []);

  const {
    handleSubmit,
    register,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  function saveChanges() {
    setEditing(false);
  }

  return (
    <div className={styles.manageUsersContainer}>
      <div className={styles.manageUsersLeft}>
        <p className={styles.header}>My Profile</p>
        <div className={styles.avatarContainer}>
          <Avatar size="xl" src="/user-placeholder.jpeg" />
          <div className={styles.avatarRight}>
            <p className={styles.subHeader}>Jackie Chan</p>
            <p className={styles.joined}>Joined June 2020</p>
            <FileUpload
              name="avatar"
              acceptedFileTypes="image/*"
              placeholder="Your avatar"
              control={control}
            />
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
              placeholder="First Name"
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
              placeholder="Last Name"
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
            <Select placeholder="Select" size="sm" disabled={!editing}>
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
            <Select placeholder="Select" size="sm" disabled={!editing}>
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
            <input type="date" className={styles.input} disabled={!editing} />
          </div>
          <div className={styles.selectInput}>
            <label className={styles.label}>Renew Date</label>
            <input type="date" className={styles.input} disabled={!editing} />
          </div>
        </div>
        <div className={styles.sideBySide}>
          <div className={styles.selectInput}>
            <label className={styles.label}>Freeze Start</label>
            <input type="date" className={styles.input} disabled={!editing} />
          </div>
          <div className={styles.selectInput}>
            <label className={styles.label}>Freeze End</label>
            <input type="date" className={styles.input} disabled={!editing} />
          </div>
        </div>
        <Button
          mt={4}
          colorScheme="blue"
          className={styles.submitButtons}
          size="sm"
          style={{ marginRight: "6px" }}
          onClick={() => setEditing(true)}
        >
          Edit Profile
        </Button>
        <Button
          mt={4}
          colorScheme="teal"
          className={styles.submitButtons}
          size="sm"
          style={{ marginLeft: "6px" }}
          onClick={saveChanges}
        >
          Save Changes
        </Button>
        <div className={styles.statusAlerts}>
          <Alert status="error" height="40px" fontSize="sm">
            <AlertIcon />
            Users must have a last name.
          </Alert>
        </div>
      </div>
      <div className={styles.manageUsersRight}>
        <div className={styles.rankRow}>
          <p className={styles.rankHeader}>Rank</p>
          <div className={styles.rankUser}>
            <p className={styles.studentHeader}>Student</p>
          </div>
          <p className={styles.age}>Group</p>
          <p className={styles.enrollDate}>Enroll Date</p>
          <p className={styles.status}>Status</p>
        </div>
        <div className={styles.list}>
          {users.map((c, index) => {
            return (
              <AdminRank
                rank={index + 1}
                user={c}
                key={uuidv4()}
                setEditUser={setEditUser}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
