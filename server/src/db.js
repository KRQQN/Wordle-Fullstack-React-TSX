import mongoose from 'mongoose';


const HighScore = mongoose.model("highscore", {
    name: String,
    score: Number,
    wordLength: Number,
});


async function runDB() {
    await mongoose.connect(process.env.MONGODB_URL)
} 