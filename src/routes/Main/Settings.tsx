import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SETTINGS } from "$Constants/path";
import { Settings } from "$Containers/index";

const Stack = createStackNavigator();

function SettingsRoute() {
  return (
    <Stack.Navigator initialRouteName={SETTINGS}>
      <Stack.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          title: "Settings",
        }}
      />
    </Stack.Navigator>
  );
}

export default SettingsRoute;
