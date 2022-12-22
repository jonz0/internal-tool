import "../../styles/globals.css";
import { API, Amplify, Auth } from "aws-amplify";
import config from "../aws-exports";
import { ChakraProvider } from "@chakra-ui/react";
import { Lustria } from "@next/font/google";
import { Provider } from "react-redux";
import store from "../app/store";
import {
  ThemeProvider,
  withAuthenticator,
  Authenticator,
  AmplifyProvider,
  Theme,
  useTheme,
  View,
  Image,
  Heading,
  useAuthenticator,
  Button,
  Text,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useSelector, useDispatch } from "react-redux";
import * as mutations from "../graphql/mutations";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

Amplify.configure(config);

const components = {
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return <Heading level={3}>Enter Information:</Heading>;
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return <Heading level={3}>Enter Information:</Heading>;
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
    },
  },
  signUp: {
    password: {
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: "Confirm Password:",
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Enter your Password:",
    },
  },
  resetPassword: {
    username: {
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Enter your Password Please:",
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

export default (function MyApp({ Component, pageProps }) {
  const [userEmail, setUserEmail] = useState("");

  const services = {
    async handleSignUp(formData) {
      let { username, password, attributes } = formData;
      // custom username
      setUserEmail(attributes.email.toLowerCase());

      return Auth.signUp({
        username,
        password,
        attributes,
        autoSignIn: {
          enabled: true,
        },
      });
    },

    async handleConfirmSignUp(formData) {
      let { username, code } = formData;
      // custom username
      // username = username.toLowerCase();
      // attributes.email = attributes.email.toLowerCase();
      try {
        console.log("trying...");
        await Auth.confirmSignUp(username, code);

        const userDetails = {
          id: username,
          username: username,
          email: userEmail,
          jjBelt: 0,
          llBelt: 0,
        };

        const newUser = await API.graphql({
          query: mutations.createUser,
          variables: { input: userDetails },
        });
      } catch (error) {
        console.log("FAILURE!");
        return Auth.confirmSignUp(username, code);
      }
    },
  };

  return (
    // <Authenticator
    //   formFields={formFields}
    //   components={components}
    //   services={services}
    // >
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
    // </Authenticator>
  );
});
