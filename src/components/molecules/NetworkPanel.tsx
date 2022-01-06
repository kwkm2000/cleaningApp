import * as React from "react";
import { ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";
import { NetworkContext } from "$Contexts/index";
import { height, width } from "$Lib/window";
import { Theme } from "$Constants/Theme";

const styles = StyleSheet.create({
  dropdown: {
    position: "absolute",
    width,
    height,
    backgroundColor: Theme.color.baseBGColor,
    opacity: 0.5,
  },
  container: {
    position: "absolute",
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function NetworkPanel() {
  const { networkState } = React.useContext(NetworkContext);
  const isCommunicating = React.useMemo(() => 0 < networkState, [networkState]);

  if (!isCommunicating) {
    return null;
  }
  return (
    <>
      <SafeAreaView style={styles.dropdown} />
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={Theme.color.accent} />
      </SafeAreaView>
    </>
  );
}
