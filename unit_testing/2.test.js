// const describe = require("mocha").describe;
const assert = require("chai").assert;
function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}
describe("lookupChar check", () => {
  it("check type", () => {
    assert.equal(lookupChar("a", "0"), undefined, "check string + string");
    assert.equal(lookupChar(0, "0"), undefined, "check num + string");
    assert.equal(lookupChar(1, [1]), undefined, "check num + arr");
    assert.equal(lookupChar(["w"], 0), undefined, "check num + arr");
    assert.equal(lookupChar("wa", 0.1), undefined, "check num + arr");
  });
  it("check index", () => {
    assert.equal(
      lookupChar("a", 2),
      "Incorrect index",
      "check string + string"
    );
    assert.equal(lookupChar("a", 1), "Incorrect index", "check num + string");
    assert.equal(lookupChar(" ", -1), "Incorrect index", "check num + string");
    assert.equal(lookupChar(" ", 1), "Incorrect index", "check num + string");
    assert.equal(lookupChar("ab", 11), "Incorrect index", "check num + arr");
  });
  it("check check result", () => {
    assert.equal(lookupChar("a", 0), "a", "check string + string");
    assert.equal(lookupChar("abv", 2), "v", "check num + string");
    assert.equal(lookupChar("ao", 1), "o", "check num + arr");
  });
});
