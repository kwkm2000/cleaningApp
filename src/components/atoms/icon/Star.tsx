import React from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Theme } from "$Constants/Theme";

interface Props {
  style?: StyleProp<ViewStyle>;
  color?: ColorValue;
  size?: number;
}

export default function Star(props: Props) {
  const { size } = props;

  return (
    <View style={[props.style]}>
      <Icon
        size={size || 20}
        color={props.color ? props.color : Theme.color.star}
        name="star"
      />
    </View>
  );
}
