function calculator() {
  let obj1 = {
    init: function (selector1, selector2, resultSelector) {
      let select1 = document.querySelector(selector1).value;
      let select2 = document.querySelector(selector2).value;

      let result = document.querySelector(resultSelector);
      this.add = function () {
        let select1 = document.querySelector(selector1).value;
        let select2 = document.querySelector(selector2).value;
        let result = document.querySelector(resultSelector);
        result.value = Number(select1) + Number(select2);
      };
      this.subtract = function () {
        let select1 = document.querySelector(selector1).value;
        let select2 = document.querySelector(selector2).value;
        let result = document.querySelector(resultSelector);
        result.value = Number(select1) - Number(select2);
      };
    },
  };
  return obj1;
  // TODO:
}
const calculate = calculator();

calculate.init("#num1", "#num2", "#result");
