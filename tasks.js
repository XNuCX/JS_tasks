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

function same(numberInt) {
  let strIng = String(numberInt);
  const arrNum = [];
  for (let i = 0; i < strIng.length; i++) {
    arrNum.push(strIng[i]);
  }
  let sumInt = arrNum.reduce((acc, val) => Number(acc) + Number(val));
  if (new Set(arrNum).size === 1) {
    console.log(true);
  } else console.log(false);

  console.log(sumInt);
}
same(2222222);

function walk(stepsToUniversity, lengthFootprintInM, stSpeedinKMH) {
  let lengthToUni = stepsToUniversity * lengthFootprintInM;
  const formul = lengthToUni / ((stSpeedinKMH * 1000) / 3600);
  const restSec = Math.trunc(lengthToUni / 500);
  let totalSecs = formul + restSec * 60;
  let secs = Math.ceil(totalSecs % 60);
  let mins = Math.trunc(totalSecs / 60);
  let hour = Math.trunc(mins / 60);

  function check(times) {
    if (times < 10) {
      return `0${times}`;
    } else return times;
  }
  console.log(`${check(hour)}:${check(mins)}:${check(secs)}`);
}
walk(2564, 0.7, 5.5);