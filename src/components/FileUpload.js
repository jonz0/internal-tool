import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useController } from "react-hook-form";
import styles from "../../styles/Profile.module.css";

export default function FileUpload({
  name,
  acceptedFileTypes,
  control,
  children,
}) {
  const inputRef = useRef();
  const {
    field: { ref, onChange, value, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    rules: { required: false },
  });

  return (
    <FormControl isInvalid={invalid}>
      <FormLabel htmlFor="writeUpFile">{children}</FormLabel>
      <InputGroup>
        <input
          type="file"
          onChange={(e) => onChange(e.target.files[0])}
          accept={acceptedFileTypes}
          name={name}
          ref={inputRef}
          {...inputProps}
          style={{ display: "none" }}
        />
        <Button
          onClick={() => inputRef.current.click()}
          colorScheme="blue"
          size="sm"
          // onChange={(e) => {}}
          className={styles.fileUpload}
        >
          Upload Photo
        </Button>
      </InputGroup>
      <FormErrorMessage>{invalid}</FormErrorMessage>
    </FormControl>
  );
}

FileUpload.defaultProps = {
  acceptedFileTypes: "",
  allowMultipleFiles: false,
};
