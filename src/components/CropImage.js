import { useState, useEffect } from "react";
import AvatarEditor from "react-avatar-editor";
import styles from "../../styles/Profile.module.css";
import {
  Button,
  FormControl,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  IconButton,
} from "@chakra-ui/react";

export default function CropImage() {
  return (
    <div>
      <AvatarEditor
        image="/user-placeholder.jpeg"
        width={250}
        height={250}
        border={50}
        borderRadius={125}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
      <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <div className={styles.rotateButtons}>
        <IconButton
          colorScheme="teal"
          aria-label="Call Segun"
          size="lg"
          icon={<PhoneIcon />}
        />
        <IconButton
          colorScheme="teal"
          aria-label="Call Segun"
          size="lg"
          icon={<PhoneIcon />}
        />
      </div>
    </div>
  );
}
