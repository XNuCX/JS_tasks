function inform(...args) {
  let [text, n, func] = args;
  let data = {};
  let result_list = {};
  for (el of args) {
    console.log(`${typeof el}: ${el}`);
    if (!(`${typeof el}` in data)) {
      data[`${typeof el}`] = 1;
    } else {
      data[`${typeof el}`]++;
    }
  }
  for (let [k, v] of Object.entries(data)) {
    result_list[k] = v;
  }
  let orderdList = Object.keys(result_list).sort((a, b) => {
    let a1 = `${result_list[a]}`;
    let b1 = `${result_list[b]}`;
    if (a1 > b1) return -1;
    if (a1 < b1) return 1;
    return 0;
  });
  for (el of orderdList) {
    let text = `${el}` + " = " + data[`${el}`];
    console.log(text);
  }
}

inform("cat", 42, function () {
  console.log("Hello world!");
});
