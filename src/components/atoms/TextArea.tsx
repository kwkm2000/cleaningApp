import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Theme } from "$Constants/Theme";

interface Props {
  onChangeText: (text: string) => void;
  value: string;
  style?: object;
  placeholder?: string;
  multiline?: boolean;
  height?: number;
}

export default function TextArea(props: Props) {
  const { value, onChangeText, placeholder, style, multiline, height } = props;

  return (
    <View style={[styles.root, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline={!!multiline}
        editable
        numberOfLines={4}
        placeholder={placeholder || ""}
        style={[styles.input, { height: height || "auto" }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Theme.color.bgColor1,
    padding: Theme.space.s,
    borderRadius: 4,
  },
  input: {
    textAlignVertical: "top",
  },
});
