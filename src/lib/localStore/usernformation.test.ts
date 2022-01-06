import { firestore } from "firebase-admin";
import * as UserInformation from "./userInformation";
import { serverTimestamp } from "firebase/firestore";

describe("UserInformation", () => {
  it("saves UserInformation", async () => {
    expect(await UserInformation.retrieve()).toBeNull();
    const userInformation = {
      displayName: "UserName",
      email: "hoge.example.com",
      id: 0,
      photoUrl: "https://example.com/images/photo.png",
      phoneNumber: null,
      uid: "hogehoge",
      createdAt: serverTimestamp() as firestore.Timestamp,
      lastLogin: serverTimestamp() as firestore.Timestamp,
      deletedAt: null,
    };
    await UserInformation.save(userInformation);

    const actual = await UserInformation.retrieve();
    expect(actual).toEqual(userInformation);

    await UserInformation.clear();
    expect(await UserInformation.retrieve()).toBeNull();
  });
});
