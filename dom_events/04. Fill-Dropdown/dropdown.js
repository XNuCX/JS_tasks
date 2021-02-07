function addItem() {
  let textInput = document.getElementById("newItemText");
  let valueInput = document.getElementById("newItemValue");
  let newItem = document.createElement("option");
  newItem.textContent = textInput.value;
  newItem.value = valueInput.value;
  document.getElementById("menu").appendChild(newItem);

  textInput.value = "";
  valueInput.value = "";

  console.log("TODO:...");
}
