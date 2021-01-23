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

function radar(speed, area) {
  let limit;
  const overlimit = function (speed, areaMax) {
    if (speed > areaMax) {
      if (speed - areaMax > 40) {
        console.log(
          `The speed is ${
            speed - areaMax
          } km/h faster than the allowed speed of ${areaMax} - reckless driving`
        );
      } else if (speed - areaMax > 20) {
        console.log(
          `The speed is ${
            speed - areaMax
          } km/h faster than the allowed speed of ${areaMax} - excessive speeding`
        );
      } else
        console.log(
          `The speed is ${
            speed - areaMax
          } km/h faster than the allowed speed of ${areaMax} - speeding`
        );
    } else console.log(`Driving ${speed} km/h in a ${areaMax} zone`);
  };
  if (area === "motorway") {
    limit = 130;
    overlimit(speed, limit);
  } else if (area === "interstate") {
    limit = 90;
    overlimit(speed, limit);
  } else if (area === "city") {
    limit = 50;
    overlimit(speed, limit);
  } else if (area === "residential") {
    limit = 20;
    overlimit(speed, limit);
  }
}
radar(200, "motorway");

function cooking(num, ...param) {
  for (let i of param) {
    if (i === "chop") {
      num /= 2;
      console.log(num);
    }
    if (i === "dice") {
      num = Math.sqrt(num);
      console.log(num);
    }
    if (i === "spice") {
      num++;
      console.log(num);
    }
    if (i === "bake") {
      num *= 3;
      console.log(num);
    }
    if (i === "fillet") {
      num -= num * 0.2;
      console.log(num);
    }
  }
}
cooking("9", "dice", "spice", "chop", "bake", "fillet");

function validity(x1, y1, x2, y2) {
  const dist = function (x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };
  if (dist(x1, y1, 0, 0) % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  if (dist(x2, y2, 0, 0) % 1 === 0) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  if (dist(x1, y1, x2, y2) % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
validity(2, 1, 1, 1);

function delimeter(arr, sign) {
  console.log(arr.join(`${sign}`));
}

delimeter(["How about no?", "I", "will", "not", "do", "it!"], "_");

function printEvery(arr, num) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i += num) resultArr.push(arr[i]);

  return resultArr;
}
printEvery(["5", "20", "31", "4", "20"], 2);

function rotate(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(" "));
}
rotate(["1", "2", "3", "4"], 2);

function listOfNames(arr) {
  arr.sort((a, b) => {
    let nameA = a.toUpperCase();
    let nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  for (let i = 1; i <= arr.length; i++) {
    console.log(`${i}.${arr[i - 1]}`);
  }
}
listOfNames(["John", "Bob", "Christina", "Ema", "bob", "undefind"]);

function listOfNumbers(arr) {
  arr.sort((a, b) => a - b);
  let arr1 = [];
  let arL = arr.length;
  for (let i = 0; i < arL; i++) {
    if (i % 2 !== 0) {
      arr1.push(arr.pop());
    } else arr1.push(arr.shift());
  }

  return arr1;
}
listOfNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

function calorie(arr) {
  const calorieObject = {};
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      calorieObject[arr[i - 1]] = Number(arr[i]);
    }
  }
  console.log(calorieObject);
}
calorie(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

function construction(obj) {
  if (obj[`dizziness`] && obj.dizziness === true) {
    obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
    obj.dizziness = false;
  }
  return obj;
}
construction({ weight: 120, experience: 20, levelOfHydrated: 200 });

function carFactory(obj) {
  const inventory = {
    "Small engine": { power: 90, volume: 1800 },
    "Normal engine": { power: 120, volume: 2400 },
    "Monster engine": { power: 200, volume: 3500 },
    Hatchback: { type: "hatchback", color: "" },
    Coupe: { type: "coupe", color: "" },
    wheels: [],
  };
  const engine = function () {
    for (let [k, val] of Object.entries(inventory)) {
      if (val["power"] >= obj.power) {
        return inventory[k];
      }
    }
  };

  const carriage = function () {
    for (let [k, v] of Object.entries(inventory)) {
      if (v.type === obj.carriage) {
        inventory[k]["color"] = obj.color;
        return inventory[k];
      }
    }
  };

  const wheels = function () {
    if (obj.wheelsize % 2 === 0) {
      let weel = Math.trunc(obj.wheelsize - 1);
      return new Array(4).fill(weel);
    } else return new Array(4).fill(Math.trunc(obj.wheelsize));
  };

  const car = {};

  car["model"] = obj.model;
  car["engine"] = engine();
  car["carriage"] = carriage();
  car["wheels"] = wheels();
  return car;
}
carFactory({
  model: "Brichka",
  power: 65,
  color: "white",
  carriage: "hatchback",
  wheelsize: 16,
});

function heroicInvent(arr) {
  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    let arr0 = arr[i].split(" / ");
    let hero = {
      name: arr0[0],
      level: Number(arr0[1]),
    };
    if (arr0[2]) {
      hero["items"] = arr0[2].split(", ");
    } else hero["items"] = [];
    arr1.push(hero);
  }
  let result = JSON.stringify(arr1);
  return result;
}
heroicInvent([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1",
]);

function lowestPrices(arr) {
  const products = {};
  for (let el of arr) {
    let [towns, product, price] = el.split(" | ");
    if (products[`${product}`]) {
      if (products[`${product}`]["prices"] > Number(price)) {
        products[`${product}`]["town"] = towns;
        products[`${product}`] = { prices: Number(price), town: towns };
      }
    } else {
      products[`${product}`] = { prices: Number(price), town: towns };
    }
  }
  for (let [k, v] of Object.entries(products)) {
    console.log(`${k} -> ${v["prices"]} (${v["town"]})`);
  }
}

lowestPrices([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "New York City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Mexico City | Audi | 100000",
  "Washington City | Mercedes | 1000",
]);

function stroreCatalogue(arr) {
  const obj = {};
  arr.sort((a, b) => {
    let alphaA = a.toUpperCase();
    let alphaB = b.toUpperCase();
    if (alphaA > alphaB) return 1;
    if (alphaA < alphaB) return -1;
    return 0;
  });
  //   console.log(arr);

  for (let el of arr) {
    let [nameGroup, number] = el.split(" : ");
    obj[`${el.slice(0, 1)}`] = [];

    // obj[`${el.slice[(0, 1)]}`][`${nameGroup}`] = Number(number);
  }
  for (let el of arr) {
    obj[`${el.slice(0, 1)}`].push(el);
  }
  for (let [k, v] of Object.entries(obj)) {
    console.log(k);

    for (let el of v) {
      let [name1, num] = el.split(" : ");
      console.log(`  ${name1}: ${num}`);
    }
  }

  //   console.log(obj);
}

stroreCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
