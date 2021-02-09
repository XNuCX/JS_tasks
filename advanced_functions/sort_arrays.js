function sorts(...args) {
  let new_arr = [];
  let [arr, sort_type] = args;

  if (sort_type === "asc") {
    new_arr = arr.sort((a, b) => {
      if (a > b) return 1;

      if (a < b) return -1;
      return -1;
    });
    return new_arr;
  } else if (sort_type === "desc") {
    new_arr = arr.sort((a, b) => {
      if (a > b) return -1;

      if (a < b) return 1;
      return -1;
    });
    return new_arr;
  }
}
console.log(sorts([14, 7, 17, 6, 8], "desc"));
