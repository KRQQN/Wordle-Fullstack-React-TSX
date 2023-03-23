var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  console.log("brum");
  res.render("pages/index");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
