import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
// import store from "./src/store";
import Routes from "./src/routes";
import * as NetworkContext from "$Contexts/network";
import * as UiContext from "$Contexts/ui";
import * as UserContext from "$Contexts/user";
import { ErrorPanel, NetworkPanel } from "$Components/molecules/index";

export default function App() {
  const [applicationState, setApplicationState] = React.useState(
    UiContext.createApplicationInitialState()
  );
  const [networkState, dispatchNetworkActions] = React.useReducer(
    NetworkContext.reducer,
    NetworkContext.createInitialState()
  );
  const [error, setError] = React.useState(UiContext.createErrorInitialState());
  const [userState, setUserState] = React.useState(
    UserContext.createInitialState()
  );

  return (
    // <Provider store={store}>
    <SafeAreaProvider>
      <UiContext.Context.Provider
        value={{
          error,
          setError,
          applicationState,
          setApplicationState,
        }}
      >
        <NetworkContext.Context.Provider
          value={{ networkState, dispatchNetworkActions }}
        >
          <UserContext.Context.Provider value={{ userState, setUserState }}>
            <Routes />
            <NetworkPanel />
            <ErrorPanel />
          </UserContext.Context.Provider>
        </NetworkContext.Context.Provider>
      </UiContext.Context.Provider>
    </SafeAreaProvider>
    // </Provider>
  );
}
