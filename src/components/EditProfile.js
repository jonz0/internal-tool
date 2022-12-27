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
      <Avatar name="Dan Abrahmov" src="/user-placeholder.jpeg" />
      <FileUpload
        name="avatar"
        acceptedFileTypes="image/*"
        isRequired={true}
        placeholder="Your avatar"
        control={control}
      >
        Upload Profile Picture
      </FileUpload>
      <FormControl>
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
        <div className={styles.namesContainer}>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
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
        <Button
          mt={4}
          colorScheme="blue"
          className={styles.submitButtons}
          size="sm"
          style={{ marginRight: "6px" }}
        >
          Sign up
        </Button>
        <Button
          mt={4}
          colorScheme="red"
          className={styles.submitButtons}
          size="sm"
          style={{ marginLeft: "6px" }}
        >
          Reset Password
        </Button>
      </FormControl>
    </div>
  );
}
