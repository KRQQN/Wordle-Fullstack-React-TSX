import { useEffect, useState } from "react";
import { Guess } from "./components/Guess";
import { WordOptions } from "./components/WordOptions";
import loadWordPref from "./tsx/loadWordPref";
import "./App.css";

function App() {
  const [wordLength, setWordLength] = useState(5);
  const [reccuringChars, setReccurringChars] = useState(true)
  
  useEffect(() => {
    loadWordPref(wordLength, reccuringChars);
    //TODO: add reccuringChars option in wordOption component
  })
  //TODO: change handleChange function of wordOption component
  //TODO: render guessrows less repetetive
  return (
    <>
      <WordOptions wordLength={wordLength} handleChange={(wl: number) => setWordLength(wl)} />
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
