function notify(message) {
  let notify = document.querySelector("#notification");
  notify.textContent = message;
  notify.style.display = "block";
  notify.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("message click");
    notify.style.display = "none";
  });
  console.log("todo");
  // TODO:
}
