import { useEffect, useState } from "react";
import { Guess } from "./components/Guess";
import { WordOptions } from "./components/WordOptions";
import loadWordPref from "./tsx/loadWordPref";
import "./App.css";

function App() {
  const [wordLength, setWordLength] = useState(5);
  const [reccuringChars, setReccuringChars] = useState(false);
  const [word, setWord] = useState("");

  useEffect(() => {
    loadWordPref(wordLength, reccuringChars).then((data) => setWord(data));
    console.log(word);
  }, [wordLength, reccuringChars]);

  //TODO: render guessrows less repetetive
  return (
    <>
      <WordOptions
        wordLength={wordLength}
        handleWordLengthChange={(wl: number) => setWordLength(wl)}
        handleRecurringCharsChange={(rc: boolean) => setReccuringChars(rc)}
      />
      <Guess wordLength={wordLength} guess="cyckla" word={word} />
      <Guess wordLength={wordLength} guess="fiskar" word={word} />
      <Guess wordLength={wordLength} guess="ostron" word={word} />
      <Guess wordLength={wordLength} guess={word} word={word} />
      <Guess wordLength={wordLength} guess="" word={word} />
      <Guess wordLength={wordLength} guess="" word={word} />
    </>
  );
}

export default App;
