const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/public/html/Team.html");
});

app.get("/team", (req, res) => {
    res.sendFile(__dirname + "/public/html/Team.html");
});

app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/public/html/form.html");
});

app.get("/article1", (req, res) => {
    res.sendFile(__dirname + "/public/html/Article1.html");
});

app.get("/article2", (req, res) => {
    res.sendFile(__dirname + "/public/html/Article2.html");
});

app.get("/article3", (req, res) => {
    res.sendFile(__dirname + "/public/html/Article3.html");
});



app.listen(port, () => {
    console.log(`myapp is listening on port ${port}!`);
});