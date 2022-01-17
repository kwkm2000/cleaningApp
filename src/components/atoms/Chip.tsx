import React from "react";
import { StyleSheet } from "react-native";
import { Chip as PaperChip } from "react-native-paper";
import { Theme } from "$Constants/Theme";

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
  onPress?: () => void;
}

export default function Chip(props: Props) {
  const { children, backgroundColor, onPress } = props;
  return (
    <PaperChip
      style={[
        styles.root,
        { backgroundColor: backgroundColor || Theme.color.primary },
      ]}
      onPress={onPress}
    >
      {children}
    </PaperChip>
  );
}

const styles = StyleSheet.create({
  root: {
    // borderRadius: 4,
    // padding: 8,
  },
});
