navjson = "nav.json";

let home = document.querySelector("#home");
let meet = document.querySelector("#meet");
let form = document.querySelector("#form");
let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");
let a3 = document.querySelector("#a3");
let nav = document.querySelector("#navigation");




document.addEventListener('DOMContentLoaded', ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then (responseData =>{

document.addEventListener("DOMContentLoaded", () => {
  fetch(navjson)
    .then((response) => response.json())
    .then((responseData) => {
      for (item of responseData) {
        home.textContent = "test";
      }
    });
});
