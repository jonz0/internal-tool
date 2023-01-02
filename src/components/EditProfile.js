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
import UserPool from "../UserPool";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export default function UserData() {
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [insta, setInsta] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [pwCode, setPwCode] = useState("");
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPw, setEditingPw] = useState(false);
  const [alert, setAlert] = useState("");
  const [info, setInfo] = useState(false);
  const [verifyPw, setVerifyPw] = useState("");
  const [verifying, setVerifying] = useState(false);
  let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: UserPool.getCurrentUser().username,
    Pool: UserPool,
  });

  function resetAlerts() {
    setAlert("");
    setInfo(false);
  }

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

  function saveChanges() {
    setEditing(false);
  }

  async function updateFirst() {
    const updateUser = await API.graphql({
      query: mutations.updateUser,
      variables: {
        input: {
          id: UserPool.getCurrentUser().username,
          firstName: first,
        },
      },
    });
  }

  async function updateLast() {
    const updateUser = await API.graphql({
      query: mutations.updateUser,
      variables: {
        input: {
          id: UserPool.getCurrentUser().username,
          lastName: last,
        },
      },
    });
  }

  async function updatePhone() {
    const updateUser = await API.graphql({
      query: mutations.updateUser,
      variables: {
        input: {
          id: UserPool.getCurrentUser().username,
          phone: phone,
        },
      },
    });
  }

  function sendPwCode() {
    cognitoUser.forgotPassword({
      onSuccess: function (result) {
        setEditingPw(true);
        setInfo(true);
      },
      onFailure: function (err) {
        if (err.message.includes("Attempt limit exceeded")) {
          setAlert("Attempt limit exceeded. Please try later.");
        } else {
          setAlert(
            "Error sending a verification code. Please try after some time."
          );
        }
        resetAlerts();
      },
    });
  }

  function resetPw() {
    if (pwCode.length < 1) {
      setAlert("Please enter a verification code.");
      return;
    } else if (password.length < 1) {
      setAlert("Please enter a new password.");
      return;
    }

    cognitoUser.confirmPassword(pwCode, password, {
      onFailure(err) {
        if (err.message.includes("Attempt limit exceeded")) {
          setAlert("Attempt limit exceeded. Please try after some time.");
          setEditingPw(false);
          setPassword();
        } else if (err.message.includes("Invalid verification code")) {
          setAlert("Invalid verification code provided.");
        } else if (err.message.includes("'password' failed to satisfy")) {
          setAlert(
            "Passwords must contain at least 8 characters with one letter and number."
          );
        } else {
          console.log(err.message);
          setAlert(
            "Error resetting your password. Please try again or call us!"
          );
          setEditingPw(false);
          setPassword();
        }
        // console.log(err);
        return;
      },
      onSuccess() {
        resetAlerts();
        setPassword();
      },
    });
  }

  function sendEmailCode(attributeList) {
    cognitoUser.getAttributeVerificationCode(email, {
      onSuccess: function (result) {
        console.log("call result: " + result);
        cognitoUser.updateAttributes(attributeList, function (err, result) {
          if (err) {
            console.log("error: ", err.message || JSON.stringify(err));
            return;
          }
          console.log("call result: " + result);
        });
      },
      onFailure: function (err) {
        console.log(err.message || JSON.stringify(err));
      },
      inputVerificationCode: function () {
        var verificationCode = emailCode;
      },
    });
  }

  function validatePw() {
    setEditingEmail(true);

    var attributeList = [];
    var attribute = {
      Name: "email",
      Value: email,
    };

    var attribute = new AmazonCognitoIdentity.CognitoUserAttribute(attribute);
    attributeList.push(attribute);

    let Username = "ijonluu";
    let Password = verifyPw;

    const authUser = () => {
      const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username,
        Password,
      });
      cognitoUser.authenticateUser(authDetails, {
        onSuccess: () => {
          console.log("User authenticated");
          setVerifying(true);
          sendEmailCode(attributeList);
        },
        onFailure: (error) => {
          console.log("An error happened");
        },
      });
    };

    authUser();
  }

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
      <form className={styles.form}>
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
        <label className={styles.label}>Phone</label>
        <Input
          id="phone"
          type="text"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          className={styles.input}
          color="grey"
          placeholder="Phone"
          _placeholder={{ color: "inherit" }}
          autoComplete="off"
          size="sm"
          disabled={!editing}
        />
        <label className={styles.label}>Instagram</label>
        <Input
          id="instagram"
          type="text"
          value={insta}
          onChange={(event) => {
            setInsta(event.target.value);
          }}
          className={styles.input}
          color="grey"
          placeholder="Instagram"
          _placeholder={{ color: "inherit" }}
          autoComplete="off"
          size="sm"
          disabled={!editing}
        />
        {!editing && (
          <Button
            mt={4}
            colorScheme="blue"
            className={styles.submitButtons}
            size="sm"
            style={{
              marginRight: "12px",
              marginBottom: "20px",
              marginTop: "8px",
            }}
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </Button>
        )}
        {editing && (
          <div>
            <Button
              mt={4}
              colorScheme="teal"
              className={styles.submitButtons}
              size="sm"
              style={{
                marginRight: "12px",
                marginBottom: "20px",
                marginTop: "8px",
              }}
              onClick={() => saveChanges()}
            >
              Save Changes
            </Button>
            <Button
              mt={4}
              colorScheme="red"
              className={styles.submitButtons}
              size="sm"
              style={{
                marginRight: "12px",
                marginBottom: "20px",
                marginTop: "8px",
              }}
              onClick={() => setEditing(false)}
            >
              Cancel
            </Button>
          </div>
        )}
      </form>

      <label className={styles.label}>Email address</label>
      <div className={styles.changeInline}>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          color="grey"
          placeholder="Email address"
          _placeholder={{ color: "inherit" }}
          autoComplete="off"
          size="sm"
          // disabled={!editing}
        />
        <Button
          colorScheme="blue"
          className={styles.editEmail}
          size="sm"
          onClick={() => {
            setEditingEmail(true);
            setEditingPw(false);
          }}
          disabled={editingEmail}
        >
          Edit
        </Button>
      </div>
      {editingEmail && (
        <div>
          <label className={styles.label}>Password</label>
          <div className={styles.changeInline}>
            <Input
              id="password"
              type="password"
              value={verifyPw}
              onChange={(event) => {
                setVerifyPw(event.target.value);
              }}
              color="grey"
              placeholder="Password"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              size="sm"
              style={{ marginTop: "-2px" }}
            />
            <Button
              colorScheme="teal"
              className={styles.confirmChanges}
              size="sm"
              onClick={() => {
                validatePw();
              }}
            >
              Enter Password
            </Button>
          </div>
          {verifying && (
            <div>
              <label className={styles.label}>Verification Code</label>
              <div className={styles.changeInline}>
                <Input
                  id="email"
                  type="email"
                  value={emailCode}
                  onChange={(event) => {
                    setEmailCode(event.target.value);
                  }}
                  color="grey"
                  placeholder="Code"
                  _placeholder={{ color: "inherit" }}
                  autoComplete="off"
                  size="sm"
                  style={{ marginTop: "-2px" }}
                />
                <Button
                  colorScheme="teal"
                  className={styles.confirmChanges}
                  size="sm"
                  onClick={() => updateEmail()}
                >
                  Verify
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
      <label className={styles.label}>Password</label>
      <div className={styles.changeInline}>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          color="grey"
          placeholder="Current Password"
          _placeholder={{ color: "inherit" }}
          autoComplete="off"
          size="sm"
          // disabled={!editing}
        />
        <Button
          colorScheme="blue"
          className={styles.editPassword}
          size="sm"
          onClick={() => {
            setEditingEmail(false);
            sendPwCode();
          }}
          disabled={editingPw}
        >
          Edit
        </Button>
      </div>
      {editingPw && (
        <div>
          <label className={styles.label}>Verification Code</label>
          <div className={styles.changeInline}>
            <Input
              id="password"
              type="password"
              value={pwCode}
              onChange={(event) => {
                setPwCode(event.target.value);
              }}
              color="grey"
              placeholder="Code"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              size="sm"
              height="33px"
              style={{ marginTop: "-2px" }}
            />
            <Button
              colorScheme="teal"
              className={styles.confirmChanges}
              size="sm"
              height="33px"
              onClick={() => resetPw()}
            >
              Confirm Changes
            </Button>
          </div>
        </div>
      )}
      <div className={styles.statusAlerts}>
        {alert.length != 0 && (
          <Alert status="error" height="40px" fontSize="sm">
            <AlertIcon /> {alert}
          </Alert>
        )}
        {info && (
          <Alert status="warning" height="40px" fontSize="sm">
            <AlertIcon />A verification code has been sent to your email.
          </Alert>
        )}
        <Alert status="warning" height="40px" fontSize="sm">
          <AlertIcon />
          {/* This account is currently inactive. */}
          This account is frozen until 12/31/2023.
        </Alert>
      </div>
    </div>
  );
}
