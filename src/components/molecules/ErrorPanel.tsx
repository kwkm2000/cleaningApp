import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { UiContext } from "$Contexts/index";
import { width } from "$Lib/window";
import { Theme } from "$Constants/Theme";

const styles = StyleSheet.create({
  container: { position: "absolute", width },
  panel: { backgroundColor: Theme.color.accent, padding: Theme.space.s },
  label: { color: Theme.color.baseBGColor },
});

export default function ErrorPanel() {
  const { error } = React.useContext(UiContext);
  if (!error) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.label}>{error.toString()}</Text>
      </View>
    </SafeAreaView>
  );
}
