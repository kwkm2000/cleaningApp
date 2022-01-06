import * as Permissions from "expo-permissions";

export async function askNotification() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  return status;
}

export async function askCamera() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  return status;
}

export async function askCameraRoll() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  return status;
}
