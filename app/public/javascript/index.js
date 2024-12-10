navjson = "4011-/app/public/Json/nav.json";
document.addEventListener("DOMContentLoaded", () => {
    fetch(navjson)
      .then((response) => response.json())
      .then((responseData) => {
        for (item of responseData) {
;}})})



fetch("../Json/index.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("h3trend").textContent = data.h3trend;
    document.getElementById("header1").textContent = data.header1;
    document.getElementById("header2").textContent = data.header2;
    document.getElementById("click1").textContent = data.click1;
    document.getElementById("click2").textContent = data.clik2;
    document.getElementById("para1").textContent = data.para1;
    document.getElementById("para2").textContent = data.para2;

  });