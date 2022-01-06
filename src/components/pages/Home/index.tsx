import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Theme } from "$Constants/Theme";
import { PageWrapper } from "$Components/molecules/index";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TASK_DETAIL, TASK_HOME, TASK_ADD } from "$Constants/path";
import { TaskDetailProp, TaskAddProp } from "$Types/RootStackParamList";
import { Plus } from "$Components/atoms";

export default function Home() {
  const taskDetailNavigation = useNavigation<TaskDetailProp>();
  const taskAddNavigation = useNavigation<TaskAddProp>();

  const gotoTaskDetail = () => {
    taskDetailNavigation.navigate(TASK_DETAIL);
  };

  const gotoTaskAdd = () => {
    taskAddNavigation.navigate(TASK_ADD);
  };

  return (
    <PageWrapper>
      <View style={styles.homeWrap}>
        <View>
          <List.Item
            title="掃除機がけ"
            description="玄関"
            right={(props) => <List.Icon {...props} icon="folder" />}
            onPress={() => {
              gotoTaskDetail();
            }}
          />
          <List.Item
            title="First Item"
            description="Item description"
            right={(props) => <List.Icon {...props} icon="folder" />}
            onPress={() => {
              gotoTaskDetail();
            }}
          />
        </View>
        <View style={styles.plusButton}>
          <TouchableOpacity
            onPress={() => {
              gotoTaskAdd();
            }}
          >
            <Plus size={45} />
          </TouchableOpacity>
        </View>
      </View>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  homeWrap: {
    paddingHorizontal: Theme.space.m,
    position: "relative",
    height: "100%",
  },
  plusButton: {
    position: "absolute",
    bottom: 130,
    right: 30,
  },
});
