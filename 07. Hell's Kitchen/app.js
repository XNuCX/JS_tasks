function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const obj = {};
    let inputArea = document
      .getElementById("inputs")
      .getElementsByTagName("textarea");
    const workersList = JSON.parse(inputArea[0].value.trim());
    for (let el of workersList) {
      el = el.split(" - ");
      let workers = el[1].split(", ");
      if (obj[`${el[0]}`] === undefined) {
        obj[`${el[0]}`] = {};
      }
      for (let names of workers) {
        let [nam, sel] = names.split(" ");

        obj[`${el[0]}`][`${nam}`] = sel;
      }
    }
    let avgSalary = 0;
    let bestRestaurant;
    let bestSalary = 0;
    let bestName;

    for (let [key, val] of Object.entries(obj)) {
      let size = Object.keys(val).length;
      let tempSum = 0;

      for (let [n, s] of Object.entries(val)) {
        tempSum += Number(s);
      }
      if (tempSum / size > avgSalary) {
        avgSalary = tempSum / size;
        bestRestaurant = key;
        bestSalary = 0;
        bestName;

        for (let [n, s] of Object.entries(val)) {
          if (Number(s) > bestSalary) {
            bestSalary = Number(s);
            bestName = n;
          }
        }
      }
    }
    let orderd = Object.keys(obj[`${bestRestaurant}`]).sort((a, b) => {
      let a1 = Number(obj[`${bestRestaurant}`][`${a}`]);
      let b1 = Number(obj[`${bestRestaurant}`][`${b}`]);
      if (a1 > b1) {
        return -1;
      } else if (a1 < b1) {
        return 1;
      } else return 0;
    });
    workersL = [];
    for (let el of orderd) {
      let worker = `Name: ${el} With Salary: ${
        obj[`${bestRestaurant}`][`${el}`]
      }`;
      workersL.push(worker);
    }

    document.querySelector(
      "#bestRestaurant p"
    ).textContent = `Name: ${bestRestaurant} Average Salary: ${avgSalary.toFixed(
      2
    )} Best Salary: ${bestSalary.toFixed(2)}`;

    document.querySelector("#workers p").textContent = workersL.join(" ");

    //   TODO:
  }
}
