import CharsReccuring from "../charsReccuring.js";
import words from "../wordBank.js";
import { HighScore } from "../models/dbModels.js";
import Db from "../db.js";

import express from "express";

const router = express.Router();

router.get("/api/wordOptions", (req, res) => {
  const { wordLength } = req.query;
  const filteredWords =
    req.query.recurringChars === "true"
      ? words.filter((word) => word.length === parseInt(wordLength))
      : words.filter(
          (word) =>
            word.length === parseInt(wordLength) && !CharsReccuring(word)
        );
  res
    .status(200)
    .json(filteredWords[Math.floor(Math.random() * filteredWords.length)]);
});

router.get("/api/highScores", async (req, res) => {
  const hs = await Db.getDbCollection(HighScore);
  res.status(200).json(hs);
});

router.post("/api/highScores", async (req, res) => {
  const { name, time, wordLength } = req.body;
  Db.postDbModel(HighScore, { name, time, wordLength });
  res.status(200).json({ data: req.body });
});

export default router;
