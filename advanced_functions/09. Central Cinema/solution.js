function solve() {
  let button = document.querySelector("#container button");
  let inputs = document.querySelectorAll("#container input");
  let moviesUl = document.querySelector("#movies ul");
  let archive = document.querySelector("#archive ul");
  let clearButton = document.querySelector("#archive button");
  let inputColl = {};
  for (let el of inputs) {
    inputColl[`${el.placeholder}`] = el;
  }
  console.log(inputColl);

  button.addEventListener("click", (e) => {
    console.log("click");
    e.preventDefault();
    for (let [k, el] of Object.entries(inputColl)) {
      if (el.value == "") {
        return;
      }
      if (k === "Ticket Price" && isNaN(el.value)) {
        return;
      }
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    let strong = document.createElement("strong");
    let div = document.createElement("div");
    let strong2 = document.createElement("strong");
    let input = document.createElement("input");
    let arhButton = document.createElement("button");

    moviesUl.appendChild(li);
    moviesUl.lastChild.appendChild(span).textContent = inputColl["Name"].value;
    moviesUl.lastChild.appendChild(strong).textContent =
      inputColl["Hall"].value;
    moviesUl.lastChild.appendChild(div);
    moviesUl.lastChild.lastChild.appendChild(strong2).textContent = Number(
      inputColl["Ticket Price"].value
    ).toFixed(2);
    moviesUl.lastChild.lastChild.appendChild(input).placeholder =
      "Tickets Sold";
    moviesUl.lastChild.lastChild.appendChild(arhButton).textContent = "Archive";
    for (let el of inputs) {
      el.value = "";
    }

    let listMovies = moviesUl.querySelectorAll("li");
    console.log(listMovies);
    for (let [i, el1] of Object.entries(listMovies)) {
      let arhButtonsSecond = el1.querySelector("button");
      arhButtonsSecond.addEventListener("click", (e) => {
        e.preventDefault();
        let amount = el1.querySelector("div input").value.trim();
        if (amount === "" || isNaN(amount)) {
          return;
        }
        console.log("clickArchive");

        let li = document.createElement("li");
        let span = document.createElement("span");
        let strong = document.createElement("strong");
        let button = document.createElement("button");
        archive.appendChild(li);
        archive.lastChild.appendChild(span).textContent = el1.querySelector(
          "span"
        ).textContent;
        archive.lastChild.appendChild(strong).textContent = `Total amount: ${(
          Number(el1.querySelector("div strong").textContent) *
          Number(el1.querySelector("div input").value)
        ).toFixed(2)}`;
        archive.lastChild.appendChild(button).textContent = "Delete";

        let listArchive = archive.querySelectorAll("li");
        clearButton.addEventListener("click", (e) => {
          e.preventDefault();
          for (let [k3, el4] of Object.entries(listArchive)) {
            el4.remove();
          }
        });
        for (let [k2, el2] of Object.entries(listArchive)) {
          let button = el2.querySelector("button");
          button.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("click3");
            el2.remove();
          });
        }

        console.log("click2");
      });
    }
    console.log("passing");
  });

  // TODO
}
