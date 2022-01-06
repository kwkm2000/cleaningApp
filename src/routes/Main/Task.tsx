import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TASK_DETAIL, TASK_HOME, TASK_ADD } from "$Constants/path";
import { Home, TaskDetail, TaskAdd } from "$Containers/index";

const Stack = createStackNavigator();

function Task() {
  return (
    <Stack.Navigator initialRouteName={TASK_HOME}>
      <Stack.Group>
        <Stack.Screen
          name={TASK_HOME}
          component={Home}
          options={{
            title: "TASK",
          }}
        />
        <Stack.Screen
          name={TASK_DETAIL}
          component={TaskDetail}
          options={{
            title: "TASK DETAIL",
          }}
        />
        <Stack.Screen
          name={TASK_ADD}
          component={TaskAdd}
          options={{
            title: "TASK ADD",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Task;
