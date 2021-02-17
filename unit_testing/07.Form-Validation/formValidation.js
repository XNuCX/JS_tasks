function validate() {
  const usernamePattern = /[A-Za-z0-9]{3,20}/g;
  const emailPattern = /\S+@\S*\.\S*/g;
  const passPatern = /[A-Za-z0-9_]{5,15}/g;
  const passConfPattern = /[A-Za-z0-9_]{5,15}/g;
  const companyNumberPattern = /[0-9]{4}/g;
  let companyNumber = document.querySelector("#companyNumber");
  let username = document.querySelector("#username");
  let pass = document.querySelector("#password");
  let passConf = document.querySelector("#confirm-password");
  let email = document.querySelector("#email");
  let companyCheck = document.querySelector("#company");
  let companyinfo = document.querySelector("#companyInfo");
  let submitButton = document.querySelector("#submit");
  companyCheck.addEventListener("change", (e) => {
    e.preventDefault();
    console.log("click");

    if (companyCheck.checked) {
      console.log("click2");
      companyinfo.style.display = "block";
    } else companyinfo.style.display = "none";
  });
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!(username.value == username.value.match(usernamePattern))) {
      username.style.borderColor = "red";
    } else username.style.border = "";
    if (
      !(pass.value == pass.value.match(passPatern)) ||
      !(passConf.value == passConf.value.match(passConfPattern)) ||
      pass.value != passConf.value
    ) {
      pass.style.borderColor = "red";
      passConf.style.borderColor = "red";
    } else {
      pass.style.border = "";
      passConf.style.border = "";
    }
    if (!(email.value == email.value.match(emailPattern))) {
      email.style.borderColor = "red";
    } else email.style.border = "";
    if (companyCheck.checked) {
      if (
        !(
          companyNumber.value == companyNumber.value.match(companyNumberPattern)
        )
      ) {
        companyNumber.style.borderColor = "red";
      } else companyNumber.style.border = "";
    }
    if (
      username.style.borderColor == "" &&
      pass.style.borderColor == "" &&
      passConf.style.borderColor == "" &&
      email.style.borderColor == "" &&
      companyCheck.checked
    ) {
      if (companyNumber.style.borderColor == "") {
        document.querySelector("#valid").style.display = "block";
      } else document.querySelector("#valid").style.display = "none";
    } else if (
      username.style.borderColor == "" &&
      pass.style.borderColor == "" &&
      passConf.style.borderColor == "" &&
      email.style.borderColor == ""
    ) {
      document.querySelector("#valid").style.display = "block";
    } else document.querySelector("#valid").style.display = "none";
  });
  // TODO
}
