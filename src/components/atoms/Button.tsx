import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { Theme } from "$Constants/Theme";

interface Props {
  title: string;
  icon?: string;
  style?: ViewStyle;
  mode?: "text" | "outlined" | "contained";
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
}

export default function Button(props: Props) {
  const { title, color, style } = props;
  const inlineStyle = { borderColor: color || Theme.color.accent };

  return (
    <View style={style}>
      <PaperButton
        {...props}
        contentStyle={{ height: 40 }}
        color={color || Theme.color.accent}
        style={(styles.root, inlineStyle)}
      >
        {title}
      </PaperButton>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 4,
    borderWidth: 1,
  },
  // contentStyle: {
  //   borderColor: Theme.color.link,
  //   borderWidth: 1,
  // },
});
