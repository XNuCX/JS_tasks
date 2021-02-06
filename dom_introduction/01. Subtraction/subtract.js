function subtract() {
  let result = document.querySelector("#result");
  let firstNumber = document.querySelector("#firstNumber");
  let secondNumber = document.querySelector("#secondNumber");
  result.textContent = Number(firstNumber.value) - Number(secondNumber.value);
  console.log(result.nodeValue);

  console.log("TODO:...");
}
subtract();
