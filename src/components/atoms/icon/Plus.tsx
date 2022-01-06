import React from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";
import { Theme } from "$Constants/Theme";

interface Props {
  style?: StyleProp<ViewStyle>;
  color?: ColorValue;
  size?: number;
}

export default function Pen(props: Props) {
  const { style, size } = props;
  return (
    <View style={style}>
      <Icon
        size={size || 20}
        color={props.color ? props.color : Theme.color.link}
        name="pluscircle"
      />
    </View>
  );
}
