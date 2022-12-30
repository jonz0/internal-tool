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
  return (
    <ChakraProvider>
      <Provider store={store}>
        {/* <AuthWrapper> */}
        <Component {...pageProps} />
        {/* </AuthWrapper> */}
      </Provider>
    </ChakraProvider>
  );
}
