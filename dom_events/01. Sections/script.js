function create(words) {
  let elementDiv;
  let elementPar;
  let content = document.getElementById("content");
  for (let i = 0; i < words.length; i++) {
    elementDiv = document.createElement("div");
    content.appendChild(elementDiv);
  }
  let selectDivs = content.querySelectorAll("div");
  console.log(selectDivs);
  let divslist = Array.from(selectDivs);
  for (let i = 0; i < words.length; i++) {
    elementPar = document.createElement("p");
    elementPar.style.display = "none";
    divslist[i].appendChild(elementPar).textContent = words[i];
  }
  for (let i = 0; i < words.length; i++) {
    divslist[i].addEventListener("click", (e) => {
      e.preventDefault();
      console.log(` ${i}`);

      divslist[i].querySelector("p").style.display = "";
    });
  }
  //   for (let el of words) {
  //     document.body.appendChild(elementDiv);
  //   }
  console.log("TODO:...");
}
