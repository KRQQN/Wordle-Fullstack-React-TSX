import { useEffect, useState } from "react";
import { Guess } from "./components/Guess";
import { WordOptions } from "./components/WordOptions";
import loadWordPref from "./tsx/loadWordPref";
import Game from "./tsx/GameLogic";
import "./App.css";

function App() {
  const [wordLength, setWordLength] = useState(5);
  const [reccuringChars, setReccuringChars] = useState(false);
  const [word, setWord] = useState("");

  useEffect(() => {
    loadWordPref(wordLength, reccuringChars).then((data) => setWord(data));
  }, [wordLength, reccuringChars]);
  console.log(word);

  return (
    <>
      <WordOptions
        wordLength={wordLength}
        handleWordLengthChange={(wl: number) => setWordLength(wl)}
        handleRecurringCharsChange={(rc: boolean) => setReccuringChars(rc)}
      />

      {new Array(6).fill("").map((_: string, i: number) => (
        <Guess
          wordLength={wordLength}
          guess={Game.guesses[i] || ""}
          word={word}
        />
      ))}

      { /*TODO: remove p-tags*/ }
      <p className="text-2xl mt-6">guessed words: {Game.guesses.join(" ")}</p>
      <p className="text-4xl font-extrabold" > correct word: {word}</p>
    </>
  );
}

export default App;
