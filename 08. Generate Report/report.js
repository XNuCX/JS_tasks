function generateReport() {
  let tableHead = document.querySelectorAll("thead tr th");
  let tableRows = document.querySelectorAll("tbody tr");
  let report = [];
  obj = {};
  console.log(tableHead);
  console.log(tableRows);

  for (let [i, el] of Object.entries(tableHead)) {
    if (el.firstElementChild.checked === true) {
      for (let [k, tr] of Object.entries(tableRows)) {
        for (let [m, td] of Object.entries(tr.children))
          if (i === m) {
            if (!(k in obj)) {
              obj[k] = {};
            }
            obj[k][`${el.firstElementChild.name}`] = td.textContent;
            console.log(obj);
          }
      }
      //   report.push({ ...obj });
      //   console.log(report);
    }
  }
  for (let [k, val] of Object.entries(obj)) {
    console.log(val);

    report.push(val);
  }
  report = JSON.stringify(report);
  document.getElementById("output").textContent = report;
  console.log(report);
  //TODO
}
