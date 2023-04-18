import mongoose from "mongoose";

const HighScore = mongoose.model("highscore", {
    name: String,
    time: Number,
    wordLength: Number,
});

export {HighScore}
