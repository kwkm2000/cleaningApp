import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton as PaperRadioButton } from "react-native-paper";
import { Theme } from "$Constants/Theme";

interface Value {
  value: string;
  label: string;
}

interface Props {
  onPress: (text: string) => void;
  values: Value[];
}

export default function RadioButton(props: Props) {
  const { values, onPress } = props;
  const [value, setValue] = React.useState(values[0].value);

  return (
    <View style={styles.root}>
      <PaperRadioButton.Group
        onValueChange={(value) => (setValue(value), onPress(value))}
        value={value}
      >
        {values.map((value, index) => {
          return (
            <PaperRadioButton.Item
              key={index}
              value={value.value}
              label={value.label}
              mode="android"
              position="leading"
              color={Theme.color.link}
              labelStyle={{ color: Theme.color.accent, textAlign: "left" }}
              style={styles.item}
            />
          );
        })}
      </PaperRadioButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  item: {},
});
