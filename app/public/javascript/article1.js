fetch("../Json/Article1.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("zerohunger").textContent = data.title;
    document.getElementById("header1").textContent = data.header1;
    document.getElementById("header2").textContent = data.header2;
    document.getElementById("p1").textContent = data.Para1;
    document.getElementById("p2").textContent = data.Para2;
    document.getElementById("p3").textContent = data.Para3;
    document.getElementById("p4").textContent = data.Para4;
    document.getElementById("p5").textContent = data.Para5;
    document.getElementById("p6").textContent = data.Para6;
    document.getElementById("para1").textContent = data.Para7;
    document.getElementById("para2").textContent = data.Para8;
    document.getElementById("para3").textContent = data.Para9;
    document.getElementById("para4").textContent = data.Para10;
  });