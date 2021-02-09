function solution() {
  const stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
    restock: function (item, quantity) {
      this[item] += Number(quantity);
      return `Success`;
    },
    report: function () {
      let resultList = [];
      for (let [k, v] of Object.entries(this)) {
        if (!(typeof v === "function")) {
          resultList.push(`${k}=${v}`);
        }
      }
      return resultList.join(" ");
    },
  };
  const checkQuantity = function (ingredients) {
    let obj = {};
    for (let [k, v] of Object.entries(ingredients)) {
      if (stock[`${k}`] - v < 0) return k;

      //   key = stock[`${k}`] - v;
      //   if (key <= 0) key = 0;
      //   obj[key] = k;
    }
    return true;
  };
  const recepies = function (food, q) {
    const recep = {
      apple: function () {
        const ingredients = {
          carbohydrate: 1 * q,
          flavour: 2 * q,
        };
        if (typeof checkQuantity(ingredients) === "boolean") {
          stock[`carbohydrate`] -= 1 * q;
          stock[`flavour`] -= 2 * q;
          return "Success";
        } else
          return `Error: not enough ${checkQuantity(ingredients)} in stock`;
      },

      lemonade: function () {
        const ingredients = {
          carbohydrate: 10 * q,
          flavour: 20 * q,
        };
        if (typeof checkQuantity(ingredients) === "boolean") {
          stock[`carbohydrate`] -= 10 * q;
          stock[`flavour`] -= 20 * q;
          return "Success";
        } else
          return `Error: not enough ${checkQuantity(ingredients)} in stock`;
      },
      burger: function () {
        const ingredients = {
          carbohydrate: 5 * q,
          fat: 7 * q,
          flavour: 3 * q,
        };
        if (typeof checkQuantity(ingredients) === "boolean") {
          stock[`carbohydrate`] -= 5 * q;
          stock[`flavour`] -= 3 * q;
          stock[`fat`] -= 7 * q;
          return "Success";
        } else
          return `Error: not enough ${checkQuantity(ingredients)} in stock`;
      },
      eggs: function () {
        const ingredients = {
          protein: 5 * q,
          fat: 1 * q,
          flavour: 1 * q,
        };
        if (typeof checkQuantity(ingredients) === "boolean") {
          stock[`protein`] -= 5 * q;
          stock[`flavour`] -= 1 * q;
          stock[`fat`] -= 1 * q;
          return "Success";
        } else
          return `Error: not enough ${checkQuantity(ingredients)} in stock`;
      },
      turkey: function () {
        const ingredients = {
          protein: 10 * q,
          carbohydrate: 10 * q,
          fat: 10 * q,
          flavour: 10 * q,
        };
        if (typeof checkQuantity(ingredients) === "boolean") {
          stock[`protein`] -= 10 * q;
          stock[`flavour`] -= 10 * q;
          stock[`fat`] -= 10 * q;
          stock[`carbohydrate`] -= 10 * q;
          return "Success";
        } else
          return `Error: not enough ${checkQuantity(ingredients)} in stock`;
      },
    };
    return recep[`${food}`]();
  };
  const manager = function (text) {
    let [command, ...rest] = text.split(" ");
    if (command === "report") {
      return stock.report();
    } else if (command === "restock") {
      return stock.restock(rest[0], rest[1]);
    } else if (command === "prepare") {
      return recepies(rest[0], rest[1]);
    }
  };
  return manager;
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock protein 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));

console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
