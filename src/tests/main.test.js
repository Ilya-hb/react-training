const sum = require("./main");

describe("Test sum fn", () => {
  test("adds 1 + 2 equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 1 + "hello" to return undefined', () => {
    expect(sum(1, "hello")).toBeUndefined();
  });
});
