import { useEffect, useState } from "react";
import { Guess } from "./components/Guess";
import { ChangeWordLength } from "./components/ChangeWordLength";
import loadWordPref from "./tsx/loadWordPref";
import "./App.css";

function App() {
  const [wordLength, setWordLength] = useState<number>(5);
  
  useEffect(() => {
    loadWordPref(wordLength  /* repeatable letters */);
  })

  return (
    <>
      <ChangeWordLength wordLength={wordLength} handleChange={(wl: number) => setWordLength(wl)} />
      <Guess wordLength={wordLength} guess="guess" word="tests" />
      <Guess wordLength={wordLength} guess="leech" word="tests" />
      <Guess wordLength={wordLength} guess="tests" word="tests" />
      <Guess wordLength={wordLength} guess="" word="tests" />
      <Guess wordLength={wordLength} guess="" word="tests" />
      <Guess wordLength={wordLength} guess="" word="tests" />
     
    </>
  );
}

export default App;
