import React from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import * as UserContext from "$Contexts/user";
import * as UiContext from "$Contexts/ui";
import { UserInformation } from "$Lib/localStore";

export default function Loading() {
  const { setApplicationState, setError } = React.useContext(UiContext.Context);
  const { setUserState } = React.useContext(UserContext.Context);

  const retrieveUserInformation = React.useCallback(async () => {
    try {
      const userInformation = await UserInformation.retrieve();

      if (userInformation) {
        setUserState(userInformation);
        setApplicationState(UiContext.Status.AUTHORIZED);
      } else {
        setApplicationState(UiContext.Status.UN_AUTHORIZED);
      }
    } catch (e: any) {
      setError(e);
    }
  }, []);

  React.useEffect(() => {
    retrieveUserInformation();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
