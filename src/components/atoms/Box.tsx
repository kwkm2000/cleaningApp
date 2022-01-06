import React from "react";
import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";
import { Theme } from "$Constants/Theme";

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Box(props: Props) {
  const { children, backgroundColor } = props;
  return (
    <Surface
      style={[
        styles.root,
        { backgroundColor: backgroundColor || Theme.color.primary },
      ]}
    >
      {children}
    </Surface>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 4,
    padding: 8,
  },
});
