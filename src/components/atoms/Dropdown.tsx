import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";

interface Item {
  label: string;
  value: string;
}

interface Props {
  open?: boolean;
  value: ValueType | null;
  items: Item[];
  onChangeValue?: () => void;
}

export default function Dropdown(props: Props) {
  const [isOpen, setOpen] = React.useState(!!props.open);
  const [value, setValue] = React.useState(props.value);
  const [items, setItems] = React.useState(props.items);

  return (
    <DropDownPicker
      open={isOpen}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={
        setValue as React.Dispatch<React.SetStateAction<null | ValueType>>
      }
      setItems={setItems}
      onChangeValue={props.onChangeValue}
    />
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
