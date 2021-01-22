"use strict";

function fruit(fr, grams, price) {
  let neededMoney = (grams / 1000) * price;
  console.log(
    `I need $${neededMoney.toFixed(2)} to buy ${(grams / 1000).toFixed(
      2
    )} kilograms ${fr}.`
  );
}

fruit("orange", 2500, 1.8);

function gratest(num1, num2) {
  for (let i = num2; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      console.log(i);
      break;
    }
  }
}
gratest(15, 5);
