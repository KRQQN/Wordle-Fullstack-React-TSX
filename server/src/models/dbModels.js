import mongoose from "mongoose";

const HighScore = mongoose.model("highscore", {
    name: String,
    score: Number,
    wordLength: Number,
});

export {HighScore}
