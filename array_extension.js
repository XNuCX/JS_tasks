(function solve() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    return this.slice(Number(n));
  };

  Array.prototype.take = function (n) {
    return this.slice(0, Number(n));
  };

  Array.prototype.sum = function () {
    return this.reduce((acc, a) => acc + Number(a));
  };

  Array.prototype.average = function () {
    return this.reduce((acc, a) => acc + Number(a)) / this.length;
  };
})();
let myArr = [1, 2, 3];
console.log(myArr.last());
console.log(myArr.skip(1));
console.log(myArr.take(2));
console.log(myArr.sum());
console.log(myArr.average());
