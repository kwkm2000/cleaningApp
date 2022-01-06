import React from "react";
import { User } from "$Models/index";

export type UserInformation = User.Model | null;

export function createInitialState(): UserInformation {
  return null;
}

export const Context = React.createContext({
  userState: createInitialState(),
  setUserState: (_: UserInformation) => {},
});
