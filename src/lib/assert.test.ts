import { assert, assertIsDefined } from "./assert";

describe("assert", () => {
  it("falseが渡されるとthrowされる", () => {
    expect(() => {
      assert(false);
    }).toThrow();
  });
});

describe("assertIsDefined", () => {
  it("nullが渡されるとthrowされる", () => {
    expect(() => {
      assertIsDefined(null);
    }).toThrow();
  });

  it("undefinedが渡されるとthrowされる", () => {
    expect(() => {
      assertIsDefined(undefined);
    }).toThrow();
  });
});
