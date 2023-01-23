import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";
import "../../styles/globals.css";
import store from "../app/store";
import config from "../aws-exports";
import AuthWrapper from "../components/AuthWrapper";

Amplify.configure(config);

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <AuthWrapper>
          <Component {...pageProps} />
        </AuthWrapper>
      </Provider>
    </ChakraProvider>
  );
}
