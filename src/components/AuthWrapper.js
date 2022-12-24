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
import { setSession } from "../features/class/sessionSlice";
import { useSelector, useDispatch } from "react-redux";

export default function AuthWrapper(props) {
  //   const [session, setSession] = useState(false);
  const session = useSelector((state) => state.user.value);
  const router = useRouter();

  useEffect(() => {
    if (session.valid == false) {
      console.log(session);
      router.push("/");
    }
  }, []);

  return (
    <div>
      {session.valid && props.children}
      {!session.valid && <AuthPage />}
    </div>
  );
}
