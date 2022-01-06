import React from "react";

export enum Status {
  LOADING = "loading",
  UN_AUTHORIZED = "unAuthorized",
  AUTHORIZED = "authorized",
}

export function createApplicationInitialState(): Status {
  return Status.LOADING;
}

type ErrorState = Error | null;

export function createErrorInitialState(): ErrorState {
  return null;
}

export const Context = React.createContext({
  error: createErrorInitialState(),
  setError: (_: ErrorState) => {},
  applicationState: createApplicationInitialState(),
  setApplicationState: (_: Status) => {},
});
