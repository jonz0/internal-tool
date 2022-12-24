import "../../styles/globals.css";
import { API, Amplify, Auth } from "aws-amplify";
import config from "../aws-exports";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import * as mutations from "../graphql/mutations";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import AuthWrapper from "../components/AuthWrapper";

Amplify.configure(config);

export default function MyApp({ Component, pageProps }) {
  // async handleConfirmSignUp(formData) {
  //   let { username, code } = formData;
  //   // custom username
  //   // username = username.toLowerCase();
  //   // attributes.email = attributes.email.toLowerCase();
  //   try {
  //     console.log("trying...");
  //     await Auth.confirmSignUp(username, code);

  //     const userDetails = {
  //       id: username,
  //       username: username,
  //       email: userEmail,
  //       jjBelt: 0,
  //       llBelt: 0,
  //     };

  //     const newUser = await API.graphql({
  //       query: mutations.createUser,
  //       variables: { input: userDetails },
  //     });
  //   } catch (error) {
  //     console.log("FAILURE!");
  //     return Auth.confirmSignUp(username, code);
  //   }
  // },

  return (
    <ChakraProvider>
      <AuthWrapper>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthWrapper>
    </ChakraProvider>
  );
}
