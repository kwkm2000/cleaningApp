import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import { Theme } from "$Constants/Theme";
import AppContainer from "$Components/layouts/AppContainer";

import { PageWrapper } from "$Components/molecules/index";

export default function TaskDetail() {
  return (
    <AppContainer>
      <PageWrapper>
        <Text>TaskDetail</Text>
      </PageWrapper>
    </AppContainer>
  );
}

const styles = StyleSheet.create({});
