function solve() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }
  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);
      this._ribbon = {
        color: ribbonColor,
        length: ribbonLength,
      };
    }
    get ribbon() {
      return this._ribbon;
    }
  }
  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, ribbonText) {
      super(color, gasWeight, ribbonColor, ribbonLength);
      this._text = ribbonText;
    }
    get text() {
      return this._text;
    }
  }
  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

let ball = solve();
let baloon = new ball.PartyBaloon("Tumno-bqlo", 20.5);
console.log(baloon);
