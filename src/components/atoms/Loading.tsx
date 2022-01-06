import React from "react";
import {
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Theme } from "$Constants/Theme";

interface Props {
  style?: StyleProp<ViewStyle>;
}

export default function Loading(props: Props) {
  return (
    <ActivityIndicator
      style={[styles.indicator, props.style]}
      color={Theme.color.link}
      size="large"
    />
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
