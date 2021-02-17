// const describe = require("mocha").describe;
const assert = require("chai").assert;
function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}
describe("check", () => {
  it("check", () => {
    assert.equal(isOddOrEven([1]), undefined, "check");
    assert.equal(isOddOrEven({}), undefined, "check");
    assert.equal(isOddOrEven(0), undefined, "check");
  });
  it("check", () => {
    assert.equal(isOddOrEven("01"), "even", "check");
    assert.equal(isOddOrEven(".."), "even", "check");
    assert.equal(isOddOrEven("abvg"), "even", "check");
  });
  it("check", () => {
    assert.equal(isOddOrEven("0"), "odd", "check");
    assert.equal(isOddOrEven("tes"), "odd", "check");
    assert.equal(isOddOrEven("tes tes"), "odd", "check");
  });
});
