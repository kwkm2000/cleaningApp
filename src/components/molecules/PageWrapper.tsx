import React from "react";
import { ScrollView, StyleSheet, StyleProp, ViewStyle } from "react-native";

type Props = {
  children: React.ReactElement | React.ReactElement[];
  style?: StyleProp<ViewStyle>;
};

export default function PageWrapper(props: Props) {
  return (
    <ScrollView contentContainerStyle={[styles.root]} style={props.style}>
      {props.children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },
});
