import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar as PaperAvatar } from "react-native-paper";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Theme } from "$Constants/Theme";

interface Props {
  uri?: string | null;
  size?: number;
}

export default function Avatar(props: Props) {
  const uri = props.uri || "";

  if (uri.length >= 1) {
    return (
      <PaperAvatar.Image
        style={styles.avatar}
        size={props.size || 100}
        source={{ uri }}
      />
    );
  }

  return (
    <View style={styles.noavatar}>
      <Icon name="account-circle" size={props.size || 120} color="#f2f3f7" />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: Theme.color.border,
  },
  noavatar: {
    margin: -10,
  },
});
