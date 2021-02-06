function solve() {
  let text = document.getElementById("input");
  let output = document.querySelector("#output");
  // const listWithSentances = text.value.split(".");
  const listWithSentances = [];
  for (let el of text.value.split(".")) {
    if (el !== "") {
      listWithSentances.push(el);
    }
  }
  console.log(listWithSentances);

  const list = [];
  let rows = [];
  let count = 0;
  // if (listWithSentances[listWithSentances.length - 1] !== "") {
  //   listWithSentances.splice(
  //     listWithSentances.length - 1,
  //     listWithSentances.length
  //   );
  // }

  for (let i = 0; i < listWithSentances.length; i++) {
    if (count <= 3) {
      let trimmedSentance = listWithSentances[i].trim();
      rows.push(trimmedSentance);
      console.log(rows);

      if (i === listWithSentances.length - 1) {
        list.push([...rows]);
        break;
      }
      count++;
      if (count === 3) {
        list.push([...rows]);
        count = 0;
        rows = [];
      }
    }
  }
  if (listWithSentances[0] !== "") {
    for (let i = 0; i < list.length; i++) {
      for (let k = 0; k < list[i].length; k++) {
        if (list[i][k] === "") list[i].splice(k, k + 1);
      }
    }

    for (let i = 0; i < list.length; i++) {
      let newPar = document.createElement("p");
      if (list[i][list.length - 1] === "") {
        continue;
      }
      newPar.textContent = list[i].join(". ") + ".";
      output.appendChild(newPar);
    }
  }
  console.log(list);

  //TODO
}
