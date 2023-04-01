import { useState } from "react";
import "./App.css";

import { GameBoard } from "./components/GameBoard";
import { WordLength } from "./components/WordLength";

function App() {
  const [wordLength, setWordLength] = useState<number>(1);

  return (
    <>
      <WordLength handleChange={(wl: number) => setWordLength(wl)} />
      <GameBoard wordLength={wordLength} />
      <GameBoard wordLength={wordLength} />
      <GameBoard wordLength={wordLength} />
      <GameBoard wordLength={wordLength} />
      <GameBoard wordLength={wordLength} />
      <GameBoard wordLength={wordLength} />
    </>
  );
}

export default App;
