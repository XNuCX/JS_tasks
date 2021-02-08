function solve() {
  // let inputData = document.querySelector("#exercise textarea");
  let inputDatas = document.querySelectorAll("#exercise textarea");
  let buttons = document.querySelectorAll("#exercise button");
  let newTd;
  let buttonGenerate;
  let buttonBuy;
  let furnitureList = [];
  let avgPrice;
  let avgdec;
  let decList = [];
  let priceList = [];
  let inputData;
  let outputData;
  for (let el of buttons) {
    if (el.textContent === "Generate") {
      buttonGenerate = el;
    } else if (el.textContent === "Buy") {
      buttonBuy = el;
    }
  }

  for (let [i, el] of Object.entries(inputDatas)) {
    if (i === "0") {
      inputData = inputDatas[i];
    } else if (i === "1") {
      outputData = inputDatas[i];
    }
  }
  console.log(buttonGenerate);

  // let buttonBuy = document.querySelector(".wrapper");
  console.log(buttonBuy);

  let tableSelect = document.querySelectorAll(".table tbody tr");
  // let tableSelect1 = document.querySelectorAll(".table tbody");
  let tableHead = document.querySelectorAll(".table thead tr th");
  console.log(tableSelect);
  buttonGenerate.addEventListener("click", () => {
    // newRow = document.createElement("tr");
    for (let i = 0; i < tableHead.length; i++) {
      // newRow.appendChild("td");
    }

    // document.querySelector(".table tbody").appendChild(newRow);
    data = JSON.parse(inputData.value);
    console.log(data);

    for (let [k, v] of Object.entries(data)) {
      newRow = document.createElement("tr");
      document.querySelector(".table tbody").appendChild(newRow);
      data[k].name;
      data[k].img;
      data[k].price;
      data[k].decFactor;
      let size = Object.keys(data[k]).length;
      for (let i = 0; i <= size; i++) {
        newTd = document.createElement("td");

        if (i === 0) {
          im = document.createElement("img");
          im.setAttribute("src", `${data[k].img}`);
          newTd.appendChild(im);
        } else if (i === 1) {
          nm = document.createElement("p");
          nm.textContent = data[k].name;
          newTd.appendChild(nm);
        } else if (i === 2) {
          pr = document.createElement("p");
          pr.textContent = data[k].price;
          newTd.appendChild(pr);
        } else if (i === 3) {
          df = document.createElement("p");
          df.textContent = data[k].decFactor;
          newTd.appendChild(df);
        } else if (i === 4) {
          chB = document.createElement("input");
          chB.setAttribute("type", "checkbox");
          // chB.disabled = true;
          newTd.appendChild(chB);
        }

        document.querySelector(".table tbody").lastChild.appendChild(newTd);
      }
      let tdCols = document
        .querySelector(".table tbody")
        .lastChild.querySelectorAll("td");
      console.log(tdCols);
    }
  });

  buttonBuy.addEventListener("click", () => {
    furnitureList = [];
    decList = [];
    priceList = [];
    avgPrice = 0;
    avgdec = 0;
    console.log("click");
    tableSelect = document.querySelectorAll(".table tbody tr");
    for (let i = 0; i < tableSelect.length; i++) {
      console.log(tableSelect);

      mark = tableSelect[i].querySelector("input");
      console.log(mark);

      if (mark.checked) {
        innerPar = tableSelect[i].querySelectorAll("p");
        console.log(innerPar);

        furnitureList.push(innerPar[0].textContent);
        decList.push(Number(innerPar[2].textContent));
        priceList.push(Number(innerPar[1].textContent));
      }
      console.log(mark);
    }
    avgPrice = priceList.reduce((acc, v) => acc + v, 0);
    avgdec = decList.reduce((acc, v) => acc + v, 0) / decList.length;
    console.log(avgPrice, avgdec, furnitureList);
    outputData.textContent = `Bought furniture: ${furnitureList.join(
      ", "
    )}\nTotal price: ${avgPrice.toFixed(
      2
    )}\nAverage decoration factor: ${Number(avgdec)}`;
  });

  //TODO...
}
