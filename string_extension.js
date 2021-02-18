// (function solve() {
//   String.prototype.ensureStart = function (str) {
//     if (!(this.slice(0, str.length) == str)) {
//       let newString = str + this;
//       return newString;
//     } else {
//       return `${this}`;
//     }
//     // let newString = this.slice(str.length);
//     // newString = str + newString;
//     // return newString;
//     // if (!this.includes(str)) {
//     //   let newString = str + this;
//     //   return newString;
//     // } else {
//     //   let newString = `${this}`;
//     //   return newString;
//     // }
//   };
//   String.prototype.ensureEnd = function (str) {
//     if (!(this.slice(this.length - str.length) == str)) {
//       return `${this + str}`;
//     } else {
//       return `${this}`;
//     }
//     // if (!this.includes(str)) {
//     //   return this + str;
//     // } else return this;
//   };
//   String.prototype.isEmpty = function () {
//     if (this.length == 0) {
//       return true;
//     } else return false;
//   };
//   String.prototype.truncate = function (n) {
//     if (`${this}`.length <= n) {
//       return `${this}`;
//     } else {
//       let strArr = `${this}`.split(" ");
//       let newString = "";
//       if (strArr.length == 1) {
//         if (!(n < 4)) {
//           for (let i = 0; i < n - 3; i++) {
//             newString += `${this}`[i];
//           }
//           newString += "." + "." + ".";

//           return newString;
//         } else {
//           for (let i = 0; i < n; i++) {
//             newString += ".";
//           }

//           return newString;
//         }
//       } else {
//         //   strArr.push("...")
//         for (let i = 0; i < strArr.length; i++) {
//           if ((newString + strArr[i] + "...").length <= n) {
//             newString += strArr[i] + "...";
//           }
//         }

//         return newString;
//       }
//     }
//   };
//   String.format = function (string, ...params) {
//     let pattern = /\{[0-9]+\}/g;
//     let matches = string.match(pattern);
//     while (params.length !== 0 && matches.length !== 0) {
//       string = string.replace(matches.splice(0, 1), params.splice(0, 1));
//     }
//     return string;
//   };
// })();

String.prototype.ensureStart = function (str) {
  if (!(this.slice(0, str.length) == str)) {
    let newString = str + this;
    return newString;
  } else {
    return `${this}`;
  }
  // let newString = this.slice(str.length);
  // newString = str + newString;
  // return newString;
  // if (!this.includes(str)) {
  //   let newString = str + this;
  //   return newString;
  // } else {
  //   let newString = `${this}`;
  //   return newString;
  // }
};
String.prototype.ensureEnd = function (str) {
  if (!(this.slice(this.length - str.length) == str)) {
    return `${this + str}`;
  } else {
    return `${this}`;
  }
  // if (!this.includes(str)) {
  //   return this + str;
  // } else return this;
};
String.prototype.isEmpty = function () {
  if (this.length == 0) {
    return true;
  } else return false;
};
String.prototype.truncate = function (n) {
  if (`${this}`.length <= n) {
    return `${this}`;
  } else {
    let strArr = `${this}`.split(" ");
    let newString = "";
    if (strArr.length == 1) {
      if (!(n < 4)) {
        for (let i = 0; i < n - 3; i++) {
          newString += `${this}`[i];
        }
        newString += "." + "." + ".";

        return newString;
      } else {
        for (let i = 0; i < n; i++) {
          newString += ".";
        }

        return newString;
      }
    } else {
      //   strArr.push("...")
      newString = strArr[0];
      for (let i = 1; i < strArr.length; i++) {
        if ((newString + " " + strArr[i] + "...").length <= n - 1) {
          newString += " " + strArr[i];
        }
      }
      newString += "...";

      return newString;
    }
  }
};
String.format = function (string, ...params) {
  let pattern = /\{[0-9]+\}/g;
  let matches = string.match(pattern);
  while (params.length !== 0 && matches.length !== 0) {
    string = string.replace(matches.splice(0, 1), params.splice(0, 1));
  }
  return string;
};

let str = "quick brown fox jumps over the lazy dog";
str = str.ensureStart("the ");
console.log(str);

str = str.ensureStart("hello ");
console.log(str);

console.log(str.isEmpty());
// str = str.truncate(16);
// console.log(str);

// str = str.truncate(14);
// console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);

str = str.truncate(2);
console.log(str);

str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str);

str = String.format("jumps {0} {1}", "dog");
console.log(str);
str = "the quick brown fox jumps over the lazy dog";
str = str.truncate(10);
console.log(str);
str = "the quick brown fox jumps over the lazy dog";
str = str.truncate(25);
console.log(str);
str = "the quick brown fox jumps over the lazy dog";
str = str.truncate(43);
console.log(str);
