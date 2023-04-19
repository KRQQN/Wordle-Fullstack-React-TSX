import express from "express";
import { HighScore } from "../models/dbModels.js";
import Db from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).render("home");
});
router.get("/about", (req, res) => {
  res.status(200).render("about");
});
router.get("/highscores", async (req, res) => {
  const hs = await Db.getDbCollection(HighScore);
  const sortedHs = hs.sort((a, b) => a.time - b.time);
  res.status(200).render("highscore", { data: sortedHs });
});

export default router;
