const { test, helloWorldTest } = require("./index");

describe("test", () => {
  it("Should return true", () => {
    expect(test()).toBe(true);
  });
});

describe("helloWorldTest", () => {
  it("Should say Hello World!", () => {
    expect(helloWorldTest()).toBe("Hello World!");
  })
})
