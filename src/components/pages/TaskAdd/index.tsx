import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Theme } from "$Constants/Theme";
import AppContainer from "$Components/layouts/AppContainer";
import { PageWrapper } from "$Components/molecules/index";
import { TextArea, Button, Dropdown, Chip } from "$Components/atoms";
import { Item } from "$Components/atoms/Dropdown";
import { Paragraph } from "react-native-paper";
import {
  AREA_NAMES,
  AREA_TASK,
  AreaNameValues,
  AreaNames,
} from "$Constants/areaTasks";

export default function TaskAdd() {
  const [text, setText] = React.useState("");
  const [cleanArea, setCleanArea] = React.useState<null | AreaNameValues>(null);
  const [areaTasks, setAreaTasks] = React.useState<AreaNames[]>([]);
  const onChangeAreaName = React.useCallback(
    (areaName: AreaNameValues | null) => {
      setCleanArea(areaName);
      if (!areaName) {
        return;
      }
      setAreaTasks(selectTasks(areaName));
    },
    [cleanArea, areaTasks]
  );
  const selectTasks = React.useCallback(
    (areaName: AreaNameValues) => {
      if (!cleanArea) {
        return [];
      }

      return AREA_TASK[areaName] as AreaNames[];
    },
    [cleanArea]
  );

  return (
    <AppContainer>
      <PageWrapper>
        <Paragraph>掃除する場所</Paragraph>
        <Dropdown
          onChangeValue={(value) => {
            onChangeAreaName(value as AreaNameValues);
          }}
          value={cleanArea}
          items={AREA_NAMES}
        />

        <Text>{cleanArea}</Text>
        {!!cleanArea ? (
          <>
            {areaTasks.map((task) => {
              return <Chip>{task.label}</Chip>;
            })}
          </>
        ) : (
          <></>
        )}

        <Paragraph>掃除頻度</Paragraph>
        <View>
          <View>
            <TextArea value={text} onChangeText={setText} />
          </View>
          <View>
            <Paragraph>日</Paragraph>
          </View>
        </View>

        <Button
          title="完了"
          onPress={() => {
            console.log("finish");
          }}
        ></Button>
      </PageWrapper>
    </AppContainer>
  );
}

const styles = StyleSheet.create({});
