import { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  Input,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import styles from "../../styles/Profile.module.css";
import { useForm } from "react-hook-form";
import FileUpload from "./FileUpload";

export default function UserData() {
  const [hour, setHours] = useState({
    jj: null,
    ll: null,
    kb: null,
  });

  const [belts, setBelts] = useState({
    jj: null,
    ll: null,
  });

  const [attributes, setAttributes] = useState({
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    freezeStart: null,
    freezeEnd: null,
    enroll: null,
    renew: null,
    active: null,
  });

  useEffect(() => {}, []);

  const {
    handleSubmit,
    register,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div>
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
            // value={first}
            // onChange={(event) => {
            //   setFirst(event.target.value);
            // }}
            className={styles.input}
            color="grey"
            placeholder="First Name"
            _placeholder={{ color: "inherit" }}
            autoComplete="off"
            size="sm"
          />
        </div>
        <div>
          <label className={styles.label}>Last Name</label>
          <Input
            id="lastname"
            type="text"
            // value={last}
            // onChange={(event) => {
            //   setLast(event.target.value);
            // }}
            className={styles.input}
            color="grey"
            placeholder="Last Name"
            _placeholder={{ color: "inherit" }}
            autoComplete="off"
            size="sm"
          />
        </div>
      </div>
      <label className={styles.label}>Email address</label>
      <Input
        id="email"
        type="text"
        // value={first}
        // onChange={(event) => {
        //   setFirst(event.target.value);
        // }}
        className={styles.input}
        color="grey"
        placeholder="Email address"
        _placeholder={{ color: "inherit" }}
        autoComplete="off"
        size="sm"
      />
      <label className={styles.label}>Phone</label>
      <Input
        id="phone"
        type="text"
        // value={last}
        // onChange={(event) => {
        //   setLast(event.target.value);
        // }}
        className={styles.input}
        color="grey"
        placeholder="Phone"
        _placeholder={{ color: "inherit" }}
        autoComplete="off"
        size="sm"
      />
      <label className={styles.label}>Instagram</label>
      <Input
        id="instagram"
        type="text"
        // value={password}
        // onChange={(event) => {
        //   setPassword(event.target.value);
        // }}
        className={styles.input}
        color="grey"
        placeholder="Instagram"
        _placeholder={{ color: "inherit" }}
        autoComplete="off"
        size="sm"
      />
      <label className={styles.label}>Password</label>
      <Input
        id="password"
        type="password"
        // value={password}
        // onChange={(event) => {
        //   setPassword(event.target.value);
        // }}
        className={styles.input}
        color="grey"
        placeholder="Current Password"
        _placeholder={{ color: "inherit" }}
        autoComplete="off"
        size="sm"
      />
      <Input
        id="password"
        type="password"
        // value={password}
        // onChange={(event) => {
        //   setPassword(event.target.value);
        // }}
        className={styles.input}
        color="grey"
        placeholder="New Password"
        _placeholder={{ color: "inherit" }}
        autoComplete="off"
        size="sm"
        style={{ marginTop: "-2px" }}
      />
      <Button
        mt={4}
        colorScheme="blue"
        className={styles.submitButtons}
        size="sm"
        style={{ marginRight: "6px" }}
      >
        Edit Profile
      </Button>
      <Button
        mt={4}
        colorScheme="teal"
        className={styles.submitButtons}
        size="sm"
        style={{ marginLeft: "6px" }}
      >
        Save Changes
      </Button>
      <div className={styles.statusAlerts}>
        <Alert status="error" height="40px" fontSize="sm">
          <AlertIcon />
          This account is currently inactive.
        </Alert>
        <Alert status="info" height="40px" fontSize="sm">
          <AlertIcon />
          This account is frozen until 12/31/2023.
        </Alert>
      </div>
    </div>
  );
}
