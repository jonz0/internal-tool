import { useEffect, useRef, useState, useContext } from "react";
import styles from "../../styles/Admin.module.css";
import { API, graphqlOperation } from "aws-amplify";
import DaySet from "../components/DaySet";
import { Button, Avatar, Input, Alert, AlertIcon } from "@chakra-ui/react";
import Menu from "../components/Menu";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import FileUpload from "./FileUpload";
import { useForm } from "react-hook-form";
import Rankings from "./Rankings";

export default function ManageUsers() {
  const {
    handleSubmit,
    register,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

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
          <div className={styles.sideBySide}>
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
        <div className={styles.sideBySide}>
          <div>
            <label className={styles.label}>Jiu-Jitsu Belt</label>
            <Input
              id="firstname"
              type="text"
              // value={first}
              // onChange={(event) => {
              //   setFirst(event.target.value);
              // }}
              className={styles.input}
              color="grey"
              placeholder="Start"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              size="sm"
            />
          </div>
          <div>
            <label className={styles.label}>Luta Livre Belt</label>
            <Input
              id="lastname"
              type="text"
              // value={last}
              // onChange={(event) => {
              //   setLast(event.target.value);
              // }}
              className={styles.input}
              color="grey"
              placeholder="End"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              size="sm"
            />
          </div>
        </div>
        <div className={styles.sideBySide}>
          <div>
            <label className={styles.label}>Freeze Start</label>
            <Input
              id="firstname"
              type="text"
              // value={first}
              // onChange={(event) => {
              //   setFirst(event.target.value);
              // }}
              className={styles.input}
              color="grey"
              placeholder="Start"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              size="sm"
            />
          </div>
          <div>
            <label className={styles.label}>Freeze End</label>
            <Input
              id="lastname"
              type="text"
              // value={last}
              // onChange={(event) => {
              //   setLast(event.target.value);
              // }}
              className={styles.input}
              color="grey"
              placeholder="End"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              size="sm"
            />
          </div>
        </div>
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
            Users must have a last name.
          </Alert>
        </div>
      </div>
      <div className={styles.manageUsersRight}>
        {/* <Rankings className={styles.rankings} /> */}
      </div>
    </div>
  );
}
