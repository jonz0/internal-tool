import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AuthPage from "./AuthPage";
import { useRouter } from "next/router";

export default function AuthWrapper(props) {
  const [session, setSession] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session == false) {
      console.log(session);
      router.push("/");
    }
  }, []);

  return (
    <div>
      {session && props.children}
      {!session && <AuthPage />}
    </div>
  );
}
