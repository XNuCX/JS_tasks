const assert = require("chai").assert;
const expect = require("chai").expect;
let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};
describe("mathEnforcerObject", () => {
  it("add", () => {
    assert.equal(mathEnforcer.addFive("5"), undefined, "nonNumber");
    assert.equal(mathEnforcer.addFive(-1), 4, "nonNumber");
    assert.equal(mathEnforcer.addFive(0), 5, "nonNumber");
    // assert.closeTo(mathEnforcer.addFive(0.1), 5.1, "nonNumber");
    expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.0001);
  });
  it("substract", () => {
    assert.equal(mathEnforcer.subtractTen("[1]"), undefined, "nonNumber");
    assert.equal(mathEnforcer.subtractTen(-1), -11, "nonNumber");
    assert.equal(mathEnforcer.subtractTen(0), -10, "nonNumber");

    expect(mathEnforcer.subtractTen(1.1)).to.be.closeTo(-8.9, 0.0001);
  });
  it("sum", () => {
    assert.equal(mathEnforcer.sum(1, [1]), undefined, "nonNumber");
    assert.equal(mathEnforcer.sum([1], 1), undefined, "nonNumber");
    assert.equal(mathEnforcer.sum("1", "1"), undefined, "nonNumber");
    assert.equal(mathEnforcer.sum(-1, 0), -1, "nonNumber");
    assert.equal(mathEnforcer.sum(10, 5), 15, "nonNumber");
    assert.equal(mathEnforcer.sum(-1, -1), -2, "nonNumber");

    expect(mathEnforcer.sum(0.1, 0.1)).to.be.closeTo(0.2, 0.0001);
  });
});
