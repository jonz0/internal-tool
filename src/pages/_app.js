import "../../styles/globals.css";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import { ChakraProvider } from "@chakra-ui/react";
Amplify.configure(config);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
