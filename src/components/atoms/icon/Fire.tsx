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

export default function Fire(props: Props) {
  const { style } = props;
  return (
    <View style={style}>
      <Icon
        size={20}
        color={props.color ? props.color : Theme.color.bgColor1}
        name="local-fire-department"
      />
    </View>
  );
}
