navjson = "4011-/nav.json"
document.addEventListener("DOMContentLoaded", () => {
    fetch(navjson)
      .then((response) => response.json())
      .then((responseData) => {
    console.log(responseData);})})

document.getElementById("home").textContent = "Home";
document.getElementById("meet").textContent = "Meet The Team";
document.getElementById("form").textContent = "Newsletter";
document.getElementById("a1").textContent = "";
document.getElementById("a2").textContent = "Home";
document.getElementById("a3").textContent = "Home";




