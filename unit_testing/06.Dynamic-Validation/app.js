function validate() {
  let emailInput = document.querySelector("#email");
  emailInput.addEventListener("change", (e) => {
    // e.preventDefault();
    console.log("change");

    const pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
    if (!(emailInput.value == emailInput.value.match(pattern))) {
      console.log(true);

      emailInput.setAttribute("class", "error");
    } else emailInput.removeAttribute("class", "error");
  });
  // TODO
}
