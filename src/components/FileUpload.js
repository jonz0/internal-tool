import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import S3 from "react-aws-s3";
import { useController } from "react-hook-form";
import { useSelector } from "react-redux";
import styles from "../../styles/Profile.module.css";
var AWS = require("aws-sdk");

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
  const [precrop, setPrecrop] = useState(null);
  const [sliderValue, setSliderValue] = useState(1);
  const userState = useSelector((state) => state.user.value);

  const config = {
    bucketName: "amplify-calendarsignup-dev-20052-deployment",
    dirName: "photos",
    region: "us-west-1",
    accessKeyId: "AKIAZYYIRAJWQ7YS5E6E",
    secretAccessKey: "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",
  };

  const ReactS3Client = new S3(config);

  function handleUpload(files) {
    setPrecrop(files[0]);
  }

  const editor = useRef(null);

  function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(",")[1]);

    // separate out the mime component
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  return (
    <div>
      <FormControl isInvalid={invalid}>
        <FormLabel htmlFor="writeUpFile">{children}</FormLabel>
        <InputGroup>
          <input
            type="file"
            onChange={(e) => {
              onChange(e.target.files[0]);
              handleUpload(e.target.files);
            }}
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
      {precrop !== null && (
        <>
          <div className={styles.cropbg} />
          <div className={styles.cropImage}>
            <p className={styles.cropTitle}>Crop and adjust your image:</p>
            <AvatarEditor
              image={precrop}
              width={250}
              height={250}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              borderRadius={125}
              scale={sliderValue}
              rotate={0}
              ref={editor}
            />
            <Slider
              aria-label="slider-ex-1"
              min={0.8}
              max={2}
              defaultValue={1}
              width={300}
              step={0.05}
              onChange={(v) => setSliderValue(v)}
              className={styles.slider}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <div className={styles.cropButtons}>
              <Button
                colorScheme="teal"
                onClick={() => {
                  if (editor) {
                    // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
                    // drawn on another canvas, or added to the DOM.
                    const canvas = editor.current.getImage();

                    // If you want the image resized to the canvas size (also a HTMLCanvasElement)
                    const canvasScaled =
                      editor.current.getImageScaledToCanvas();

                    // let imageName = userState.username + "-" + "profile-image";
                    let imageName = precrop.name;

                    ReactS3Client.uploadFile(
                      dataURItoBlob(canvas.toDataURL()),
                      imageName
                    )
                      .then((data) => console.log(data))
                      .catch((err) => console.error(err));

                    setPrecrop(null);
                    setSliderValue(1);

                    window.location.reload();
                  }
                }}
              >
                Save
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  editor.current = null;
                  setPrecrop(null);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

FileUpload.defaultProps = {
  acceptedFileTypes: "",
  allowMultipleFiles: false,
};
