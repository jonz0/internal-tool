import { Alert, AlertIcon, Avatar, Button, Input } from "@chakra-ui/react";
import { API } from "aws-amplify";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styles from "../../styles/Profile.module.css";
import * as mutations from "../graphql/mutations";
import UserPool from "../UserPool";
import FileUpload from "./FileUpload";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var AWS = require("aws-sdk");

export default function UserData() {
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [pwCode, setPwCode] = useState("");
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPw, setEditingPw] = useState(false);
  const [alert, setAlert] = useState("");
  const [info, setInfo] = useState(false);
  const [verifyPw, setVerifyPw] = useState("");
  const [verifying, setVerifying] = useState(false);
  const userState = useSelector((state) => state.user.value);

  var AWS = require("aws-sdk");
  AWS.config.update({
    accessKeyId: "AKIAZYYIRAJWQ7YS5E6E",
    secretAccessKey: "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",
  });

  function encode(data) {
    var str = data.reduce(function (a, b) {
      return a + String.fromCharCode(b);
    }, "");
    return Buffer.from(str, "base64");
  }

  function resetAlerts() {
    setAlert("");
    setInfo(false);
  }

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
    let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: userState.username,
      Pool: UserPool,
    });

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

    let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: userState.username,
      Pool: UserPool,
    });

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
        return;
      },
      onSuccess() {
        resetAlerts();
        setPassword();
      },
    });
  }

  function sendEmailCode(attributeList) {
    let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: userState.username,
      Pool: UserPool,
    });

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
    let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: userState.username,
      Pool: UserPool,
    });

    let attributeList = [];
    let emailAttribute = {
      Name: "email",
      Value: email,
    };

    let attribute = new AmazonCognitoIdentity.CognitoUserAttribute(
      emailAttribute
    );
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

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      {userState !== null && (
        <div>
          <p className={styles.header}>My Profile</p>
          <div className={styles.avatarContainer}>
            <Avatar
              size="xl"
              src={
                "https://amplify-calendarsignup-dev-20052-deployment.s3.us-west-1.amazonaws.com/photos/" +
                userState.username +
                "-profile-image.png?"
              }
            />
            <div className={styles.avatarRight}>
              <p className={styles.subHeader}>
                {userState.firstName + " " + userState.lastName}
              </p>
              <p className={styles.joined}>
                {"Joined" +
                  " " +
                  months[parseInt(userState.enroll.slice(5, 7)) - 1] +
                  " " +
                  userState.enroll.slice(0, 4)}
              </p>
              <FileUpload
                name="avatar"
                acceptedFileTypes="image/*"
                placeholder="Your avatar"
                control={control}
                // onUpload={handleUpload}
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
            {!editing && (
              <Button
                mt={4}
                colorScheme="blue"
                className={styles.submitButtons}
                size="sm"
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
                  onClick={() => saveChanges()}
                >
                  Save Changes
                </Button>
                <Button
                  mt={4}
                  colorScheme="red"
                  className={styles.submitButtons}
                  size="sm"
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
      )}
    </div>
  );
}
