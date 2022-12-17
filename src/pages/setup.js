import styles from "../../styles/Home.module.css";
import { useState, useEffect, useRef, useContext } from "react";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import Menu from "../components/Menu";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Redirect, Route } from "react-router-dom";
import Router from "next/router";

export default withAuthenticator(function setup() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState(1);
  const handleChange = (value) => setValue(value);

  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <AmplifyProvider>
      <div className={styles.setupContainer}>
        <div className={styles.setupForm}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input type="email" />
            <FormLabel>Last name</FormLabel>
            <Input />
            <FormLabel>Phone number</FormLabel>
            <Input />
            <FormHelperText>Your phone number won't be shared.</FormHelperText>
            <FormLabel>Set a goal for weekly attendance!</FormLabel>
          </FormControl>
          <Flex>
            <NumberInput
              maxW="100px"
              mr="2rem"
              value={value}
              onChange={handleChange}
              defaultValue={3}
              min={1}
              max={30}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Slider
              flex="1"
              focusThumbOnChange={false}
              value={value}
              onChange={handleChange}
              defaultValue={1}
              min={1}
              max={30}
              maxW="400"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb fontSize="sm" boxSize="32px" children={value} />
            </Slider>
          </Flex>
        </div>
      </div>
    </AmplifyProvider>
  );
});
