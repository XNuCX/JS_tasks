// function search() {
//   let result = document.getElementById("result");
//   let count = 0;
//   let searchedWord = document.getElementById("searchText").value;
//   list = document.getElementById("towns").querySelectorAll("li");
//   for (let i = 0; i < list.length; i++) {
//     //   for (let word of )
//     if (list[i]["textContent"].toLowerCase().includes(searchedWord)) {
//       list[i]["style"]["font-weight"] = "bold";
//       count++;
//       list[i]["style"]["text-decoration"] = "underline";
//     }
//     console.log(count);

//     console.log(list);
//   }
//   result.textContent = `${count} matches found`;

//   // TODO
// }

// function search() {
//   let result = document.getElementById("result");
//   let count = 0;
//   let searchedWord = document.getElementById("searchText").value;
//   list = document.getElementById("towns").querySelectorAll("li");
//   for (let i = 0; i < list.length; i++) {
//     //   for (let word of )
//     if (list[i]["textContent"].toLowerCase().includes(searchedWord)) {
//       list[i].innerHTML = `<b><u>${list[i]["textContent"]}</u></b>`;
//       count++;
//       // list[i]["style"]["text-decoration"] = "underline";
//     }
//     //  console.log(count);

//     //  console.log(list);
//   }
//   result.textContent = `${count} matches found`;

//   // TODO
// }

function search() {
  let result = document.getElementById("result");
  let count = 0;
  let searchedWord = document.getElementById("searchText").value;
  list = document.getElementById("towns").querySelectorAll("li");
  for (let i = 0; i < list.length; i++) {
    //   for (let word of )
    if (
      list[i]["textContent"].toLowerCase().includes(searchedWord.toLowerCase())
    ) {
      list[i].style.fontWeight = "bold";
      count++;
      list[i].style.textDecoration = "underline";
    }
    //  console.log(count);

    //  console.log(list);
  }
  result.textContent = `${count} matches found`;

  // TODO
}
