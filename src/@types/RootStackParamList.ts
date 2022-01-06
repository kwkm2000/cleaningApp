import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  HOME: undefined;
  TASK_DETAIL: undefined;
  TASK_ADD: undefined;
  TUTORIAL_LOGIN: undefined;
  LOADING: undefined;
};

export type TaskDetailProp = BottomTabNavigationProp<
  RootStackParamList,
  "TASK_DETAIL"
>;

export type TaskAddProp = BottomTabNavigationProp<
  RootStackParamList,
  "TASK_ADD"
>;
