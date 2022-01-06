import React from "react";
import { StyleSheet, View } from "react-native";
import { Theme } from "$Constants/Theme";
import AppContainer from "$Components/layouts/AppContainer";
import { PageWrapper } from "$Components/molecules/index";
import { TextArea, Button, Dropdown } from "$Components/atoms";
import { Paragraph } from "react-native-paper";

export default function TaskAdd() {
  const [text, setText] = React.useState("");

  const onChangeAreaName = React.useCallback(() => {
    console.log("area");
  }, []);

  return (
    <AppContainer>
      <PageWrapper>
        <Paragraph>掃除する場所</Paragraph>
        <Dropdown
          onChangeValue={onChangeAreaName}
          value={null}
          items={[
            { label: "キッチン", value: "kitchen" },
            { label: "リビング", value: "living" },
            { label: "ダイニング", value: "dining" },
            { label: "寝室", value: "bedroom" },
            { label: "バスルーム", value: "banana" },
            { label: "トイレ", value: "banana" },
            { label: "玄関", value: "banana" },
            { label: "新規作成", value: "new" },
          ]}
        />
        <Paragraph>タスク名</Paragraph>
        <Dropdown
          onChangeValue={onChangeAreaName}
          value={null}
          items={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
          ]}
        />
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
