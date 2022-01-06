import React from "react";
import { StyleSheet, View } from "react-native";
import { List as PaperList } from "react-native-paper";
import { Theme } from "$Constants/Theme";

interface Props {
  listItems: {
    text: string;
    right: JSX.Element;
    onPress?: () => void;
  }[];
}

export default function List(props: Props) {
  const { listItems } = props;
  return (
    <PaperList.Section style={styles.listSection}>
      {listItems.map((item, index) => {
        return (
          <PaperList.Item
            key={index}
            style={index !== 0 && styles.borderTop}
            title={item.text}
            right={() => <View style={styles.rightStyle}>{item.right}</View>}
            disabled={!item.onPress}
            onPress={() => item.onPress && item.onPress()}
          />
        );
      })}
    </PaperList.Section>
  );
}

const styles = StyleSheet.create({
  listSection: {
    backgroundColor: Theme.color.primary,
    borderRadius: 10,
    margin: 10,
  },
  rightStyle: {
    marginRight: 10,
    marginVertical: 10,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: "#D5DEF2",
  },
});
