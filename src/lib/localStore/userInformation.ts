import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserInformation } from "$Contexts/user";

const KEY = "userInformation";

export async function save(userInformation: UserInformation) {
  await AsyncStorage.setItem(KEY, JSON.stringify(userInformation));
}

export async function retrieve() {
  const serialized = await AsyncStorage.getItem(KEY);
  if (!serialized) {
    return null;
  }
  return JSON.parse(serialized);
}

export async function clear() {
  await AsyncStorage.removeItem(KEY);
}
