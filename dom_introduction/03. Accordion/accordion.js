function toggle() {
  let button = document.querySelector(".button");
  let extraContent = document.getElementById("extra");
  if (button.textContent === "More") {
    button.textContent = "Less";
    extraContent.style.display = "block";
  } else if (button.textContent === "Less") {
    button.textContent = "More";
    extraContent.style.display = "none";
  }
  console.log("TODO:...");
}
