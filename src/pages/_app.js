import "../../styles/globals.css";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import { ChakraProvider } from "@chakra-ui/react";
import { Lustria } from "@next/font/google";
import { Provider } from "react-redux";
import store from "../app/store";
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useSelector, useDispatch } from "react-redux";

Amplify.configure(config);

export default withAuthenticator(function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <Provider store={store}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </AmplifyProvider>
  );
});
