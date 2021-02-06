function solve() {
  let result = document.querySelector("#result");
  let namingConvention = document.querySelector("#naming-convention");
  let inputText = document.querySelector("#text");
  let pattern = /[A-Za-z0-9]+/g;
  const inputtextArr = inputText.value.match(pattern);

  if (namingConvention.value === "Camel Case") {
    for (let i = 0; i < inputtextArr.length; i++) {
      let el = inputtextArr.shift();
      if (i !== 0) {
        el = el[0].toUpperCase() + el.slice(1).toLowerCase();
      } else {
        el = el[0].toLowerCase() + el.slice(1).toLowerCase();
        console.log(el);
      }

      inputtextArr.push(el);
    }
    result.textContent = inputtextArr.join("");
  } else if (namingConvention.value === "Pascal Case") {
    for (let i = 0; i < inputtextArr.length; i++) {
      let el = inputtextArr.shift();
      el = el[0].toUpperCase() + el.slice(1).toLowerCase();
      inputtextArr.push(el);
      console.log(el);
    }
    result.textContent = inputtextArr.join("");
  } else result.textContent = "Error!";
  //TODO...
}
