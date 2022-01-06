import React from "react";
import { StyleSheet, SafeAreaView, StyleProp, ViewStyle } from "react-native";
import { Theme } from "$Constants/Theme";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export default function AppContainer(props: Props) {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.color.baseBGColor,
  },
});
