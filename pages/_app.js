import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
