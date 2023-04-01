import { useState } from "react";
import "./App.css";

import { Guess } from "./components/Guess";
import { WordLength } from "./components/WordLength";

function App() {
  const [wordLength, setWordLength] = useState<number>(5);

  return (
    <>
      <WordLength wordLength={wordLength} handleChange={(wl: number) => setWordLength(wl)} />
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
