function attachEventsListeners() {
  const buttons = {
    days: document.getElementById("daysBtn"),
    hours: document.getElementById("hoursBtn"),
    minutes: document.getElementById("minutesBtn"),
    seconds: document.getElementById("secondsBtn"),
  };
  const converting = function (key, value) {
    if (key === "days") {
      document.getElementById(`${key}`).value = value;
      document.getElementById(`hours`).value = value * 24;
      document.getElementById(`minutes`).value = value * 1440;
      document.getElementById(`seconds`).value = value * 86400;
    } else if (key === "hours") {
      document.getElementById(`days`).value = value / 24;
      document.getElementById(`${key}`).value = value;
      document.getElementById(`minutes`).value = value * 60;
      document.getElementById(`seconds`).value = value * 3600;
    } else if (key === "minutes") {
      document.getElementById(`days`).value = value / 1440;
      document.getElementById(`hours`).value = value / 60;
      document.getElementById(`${key}`).value = value;
      document.getElementById(`seconds`).value = value * 60;
    } else if (key === "seconds") {
      document.getElementById(`days`).value = value / 86400;
      document.getElementById(`hours`).value = value / 3600;
      document.getElementById(`minutes`).value = value / 60;
      document.getElementById(`${key}`).value = value;
    }
  };
  const action = function (key) {
    let valueToConvert = Number(document.getElementById(`${key}`).value.trim());
    converting(key, valueToConvert);
  };
  for (let [key, val] of Object.entries(buttons)) {
    val.addEventListener("click", () => {
      action(key);
    });
  }
  console.log("TODO:...");
}
