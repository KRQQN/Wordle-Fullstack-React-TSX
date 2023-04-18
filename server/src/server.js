import express from "express";
import words from "./wordBank.js";
import CharsReccuring from "./CharsReccuring.js";
import expressEjsLayouts from "express-ejs-layouts";
import Db from "./db.js";
import { HighScore } from "./models/dbModels.js";


Db.dbInit();
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
app.get("/highscores", (req, res) => {
    res.status(200).render("highscore");
})




app.get("/api/wordOptions", (req, res) => {
  

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
  const hs = await Db.getDbCollection(HighScore)
  res.status(200).json(hs.json);
});

/* name: String,
    score: Number,
    wordLength: Number, */
app.post("/api/highScores", async (req, res) => {
  const { name, score, wordLength} = req.body
  console.log(req.body)
  Db.postDbModel(HighScore, { name, score, wordLength})
  res.status(200).json({ response: req.body})
});

export default app;