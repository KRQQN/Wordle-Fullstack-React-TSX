import express from "express";
import words from "./wordBank.js";
import CharsReccuring from "./CharsReccuring.js";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

app.use(expressEjsLayouts);
app.use(express.json());

app.set("layout", "../views/layouts/index.ejs");
app.set("view engine", "ejs");
app.use(express.static("./dist"));


app.get("/", (req, res) => {
    res.status(200).render("home");
})
app.get("/about", (req, res) => {
    res.status(200).render("about");
})
app.get("/higscores", (req, res) => {
    res.status(200).render("highscores");
})




app.get("/api/wordOptions", (req, res) => {
  //TODO: fix fetch to include reccuringChars

  const filteredWords =
    req.query.recurringChars === "true"
      ? words.filter((word) => word.length === parseInt(req.query.wordLength))
      : words.filter(
          (word) => word.length === parseInt(req.query.wordLength) && !CharsReccuring(word)
        );

  res
    .status(200)
    .json(filteredWords[Math.floor(Math.random() * filteredWords.length)]);
});

app.get("/api/highScores", async (req, res) => {
  res.status(200);
});

app.post("/api/highScores", async (req, res) => {
  console.log(req.body)
  res.status(200).json({ response: req.body})
});

export default app;