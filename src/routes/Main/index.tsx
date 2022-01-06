import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Tutorial, Login } from "$Components/pages/";
import { TASK_HOME, TASK, LOGIN, LOADING, SETTINGS } from "$Constants/path";
import Task from "./Task";
import Settings from "./Settings";
import * as UiContext from "$Contexts/ui";
import { Loading } from "$Containers/index";
import { Theme } from "$Constants/Theme";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TutorialLoginStack = createStackNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={TASK_HOME}
      screenOptions={{
        tabBarActiveTintColor: Theme.color.link,
        tabBarInactiveTintColor: Theme.color.border,
        tabBarLabelStyle: {
          top: -15,
        },
        tabBarItemStyle: {
          height: 78,
        },
        tabBarStyle: {
          borderRadius: 32,
          height: 78,
          shadowColor: Theme.color.link,
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 2,
          elevation: 2,
          marginHorizontal: 12,
          position: "absolute",
          bottom: 30,
        },
      }}
    >
      <Tab.Screen
        name={TASK}
        component={Task}
        options={{
          title: "TASK",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={"add-task"} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          title: "SETTING",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={"settings"} color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function TutorialLoginNavigation() {
  return (
    <TutorialLoginStack.Navigator initialRouteName="Tutorial">
      <TutorialLoginStack.Screen
        name={"Tutorial"}
        component={Tutorial}
        options={{
          headerShown: false,
        }}
      />
      <TutorialLoginStack.Screen
        name={LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </TutorialLoginStack.Navigator>
  );
}

function switchInitialRoutes(status: UiContext.Status) {
  return <Stack.Screen name={TASK_HOME} component={TabRoutes} />;
  // switch (status) {
  //   case UiContext.Status.AUTHORIZED:
  //     return <Stack.Screen name={TASK_HOME} component={TabRoutes} />;
  //   default:
  //     return (
  //       <Stack.Screen
  //         name={TUTORIAL_LOGIN}
  //         component={TutorialLoginNavigation}
  //       />
  //     );
  // }
}

function initialRoutes() {
  const uiContext = React.useContext(UiContext.Context);

  return (
    <Stack.Navigator
      initialRouteName={LOADING}
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
    >
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchInitialRoutes(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
}

export default initialRoutes;
