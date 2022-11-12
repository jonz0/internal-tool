import "../../styles/globals.css";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import { ChakraProvider } from "@chakra-ui/react";
import { Lustria } from "@next/font/google";
import { Provider } from "react-redux";
import store from "../app/store";

Amplify.configure(config);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
