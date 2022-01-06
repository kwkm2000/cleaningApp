import React from "react";
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Theme } from "$Constants/Theme";

interface Props {
  style?: StyleProp<ViewStyle>;
  color?: ColorValue;
}

export default function Camera(props: Props) {
  return (
    <View style={[styles.camera, props.style]}>
      <Icon
        size={20}
        color={props.color ? props.color : Theme.color.link}
        name="camera-alt"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    backgroundColor: Theme.color.baseBGColor,
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0.2,0.1)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    elevation: 1,
  },
});
