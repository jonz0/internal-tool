import { useState, useEffect } from "react";
import AuthPage from "./AuthPage";
import { useRouter } from "next/router";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
import UserPool from "../UserPool";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/class/userSlice";
import {
  setConfirmed,
  removeConfirmed,
  addConfirmed,
} from "../features/class/confirmedSlice";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

// ES Modules, e.g. transpiling with Babel
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";

export default function AuthWrapper(props) {
  // const [session, setSession] = useState(false);
  // const session = useSelector((state) => state.user.value);
  const router = useRouter();
  const [session, setSession] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = UserPool.getCurrentUser();
    if (currentUser != null) {
      currentUser.getSession(async function (err, session) {
        if (err) {
          setSession(false);
          return;
        }
        // console.log("session validity: " + session.isValid());

        if (session.isValid) {
          setSession(true);
          const queryUser = await API.graphql({
            query: queries.getUser,
            variables: {
              id: currentUser.getUsername(),
            },
          });

          const queryClasses = await API.graphql({
            query: queries.listAttendees,
            variables: {
              filter: {
                username: {
                  eq: currentUser.getUsername(),
                },
                id: {
                  contains: currentUser.getUsername(),
                },
              },
            },
          });

          dispatch(setUser(queryUser.data.getUser));
          dispatch(
            setConfirmed(
              queryClasses.data.listAttendees.items.map(
                (c) => c.classAttendeesId
              )
            )
          );
        }

        setLoading(false);

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "us-west-1:cd6ae6a6-edde-450e-90b2-c54f0be36980", // your identity pool id here
          Logins: {
            // Change the key below according to the specific region your user pool is in.
            "cognito-idp.us-west-1.amazonaws.com/us-west-1_490MiqgjE": session
              .getIdToken()
              .getJwtToken(),
          },
        });

        // Instantiate aws sdk service objects now that the credentials have been updated.
        // example: var s3 = new AWS.S3();
      });
    } else {
      setSession(false);
      router.push("/");
    }
  }, []);

  if (session) {
    return <div>{!loading && props.children}</div>;
  }

  return <div>{!loading && <AuthPage />}</div>;
}
