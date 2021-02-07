function lockedProfile() {
  let profiles = document.querySelectorAll(".profile");
  const btnStatus = function (profileButton, profile, i) {
    if (profileButton.textContent === "Show more") {
      toShow(profileButton, profile, i);
    } else if (profileButton.textContent === "Hide it") {
      toHide(profileButton, profile, i);
    }
  };
  const toShow = function (profileButton, profile, i) {
    selInList = profile.querySelectorAll("input");
    for (let [k, v] of Object.entries(selInList)) {
      if (v.checked) {
        console.log("checked");

        if (v.value === "lock") {
          console.log("lock");
          return;
        } else if (v.value === "unlock") {
          console.log("unlock");
          profile.querySelector("div").style.display = "block";
          //   document.getElementById(`user${i}HiddenFields`).style.display = "block";
          profileButton.textContent = "Hide it";
        }
      }
      console.log(selInList);
    }
  };
  const toHide = function (profileButton, profile) {
    selInList = profile.querySelectorAll("input");
    for (let [k, v] of Object.entries(selInList)) {
      if (v.checked) {
        console.log("checked");

        if (v.value === "lock") {
          console.log("lock");
          return;
        } else if (v.value === "unlock") {
          console.log("unlock");
          profile.querySelector("div").style.display = "none";
          //   document.getElementById(`user${i}HiddenFields`).style.display = "block";
          profileButton.textContent = "Show more";
        }
      }
      console.log(selInList);
    }
  };
  for (let i = 0; i < profiles.length; i++) {
    let profile = profiles[i];
    let profileButton = profile.querySelector("button");
    profileButton.addEventListener("click", () => {
      console.log(profileButton.textContent);

      btnStatus(profileButton, profile, i);
    });
  }
  console.log("TODO...");
}
