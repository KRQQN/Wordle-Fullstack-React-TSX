import express from "express";
import words from "./wordBank.js";
import expressEjsLayouts from "express-ejs-layouts";
import CharsReccuring from "./charsReccuring.js";
import { HighScore } from "./models/dbModels.js";
import Db from "./db.js";

const app = express();
Db.dbInit();
app.use(expressEjsLayouts);
app.use(express.json());

app.use(express.static("./src/public"));
app.set("view engine", "ejs");
app.set("layout", "../views/layouts/index.ejs");



app.get("/", (req, res) => {
    res.status(200).render("home");
})
app.get("/about", (req, res) => {
    res.status(200).render("about");
})
app.get("/highscores", async (req, res) => {
    const hs = await Db.getDbCollection(HighScore)
    res.status(200).render("highscore", { data: hs})
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
  res
    .status(200)
    .json(hs);
});

app.post("/api/highScores", async (req, res) => {
  const { name, time, wordLength} = req.body
  Db.postDbModel(HighScore, { name, time, wordLength})
  res
    .status(200)
    .json({ data: req.body})
});

export default app;