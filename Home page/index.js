navjson = "4011-/nav.json"
document.addEventListener("DOMContentLoaded", () => {
    fetch(navjson)
      .then((response) => response.json())
      .then((responseData) => {
        for (item of responseData) {
;}})})

//if someone can work out how to fetch the nav.json data and put it in the content for the nav below would be much appreciated

document.getElementById("home").textContent = "Home";
document.getElementById("meet").textContent = "Meet The Team";
document.getElementById("form").textContent = "Newsletter";
document.getElementById("a1").textContent = "";
document.getElementById("a2").textContent = "Home";
document.getElementById("a3").textContent = "Home";




