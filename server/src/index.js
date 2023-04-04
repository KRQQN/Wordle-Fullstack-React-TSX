import express from "express";

//app.use(expressLayouts);

const app = express();

app.set("layout", "../views/layouts/layout.ejs");
app.set("view engine", "ejs");


app.use("/static", express.static("./static"));
app.use(express.json());


//.render("/view");

app.get("/", async (req, res) => {
  res.status(200)
});

app.get("api/wordOptions", (req, res) => {
  
  
    res.status(200)
});

app.get("/highScores", async (req, res) => {
  res.status(200)
});

app.post("api/submitHighScore", async (req, res) => {
  res.status(200)
});