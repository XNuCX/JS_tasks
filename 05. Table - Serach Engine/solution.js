function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchField = document.getElementById("searchField");
    let tableList = document.querySelectorAll("tbody tr");
    for (let i = 0; i < tableList.length; i++) {
      tableList[i].classList.remove("select");
    }

    console.log(tableList);

    for (let k = 0; k < tableList.length; k++) {
      let tableColumn = document.querySelectorAll("tbody tr td");

      if (tableList[k].textContent.trim().includes(searchField.value.trim())) {
        tableList[k].className = "select";
        //   searchField.value = "";
      }

      console.log(tableList[k].textContent);
    }
    searchField.value = "";

    //   TODO:
  }
}
