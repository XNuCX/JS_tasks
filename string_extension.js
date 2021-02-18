String.prototype.ensureStart = function (str) {
  if (!this.includes(str)) {
    return str + this;
  }
};
String.prototype.ensureEnd = function (str) {
  if (!this.includes(str)) {
    return this + str;
  }
};
String.prototype.isEmpty = function () {
  if (this.length == 0) {
    return true;
  } else return false;
};
String.prototype.truncate = function (n) {
  if (this.length <= n) {
    return this;
  } else {
    this.strArr = this.split(" ");
    this.newString = "";
    if (this.strArr.length == 1) {
      if (!(n < 4)) {
        for (let i = 0; i < n - 3; i++) {
          this.newString += this[i];
        }
        this.newString += "." + "." + ".";

        return this.newString;
      } else {
        for (let i = 0; i < n; i++) {
          this.newString += ".";
        }

        return this.newString;
      }
    } else {
      //   strArr.push("...")
      for (let i = 0; i < this.strArr.length; i++) {
        if (this.newString + this.strArr[i] + "..." <= n) {
          this.newString += this.strArr[i] + "...";
        }
      }

      return this.newString;
    }
  }
};
String.prototype.format = function (string, ...params) {};

let str = "my string";
// str = str.ensureStart("my");
str = str.ensureStart("hello ");
str = console.log(str.truncate(16));
str = console.log(str.truncate(14));
str = console.log(str.truncate(8));
str = console.log(str.truncate(4));
str = console.log(str.truncate(2));
str = String.format("The {0} {1} fox", "quick", "brown");
str = String.format("jumps {0} {1}", "dog");
