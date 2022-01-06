import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: JSX.Element;
  onPress: () => void;
}

export default function TouchableIcon(props: Props) {
  const { style, children } = props;
  return (
    <TouchableOpacity {...props} style={style}>
      {children}
    </TouchableOpacity>
  );
}
