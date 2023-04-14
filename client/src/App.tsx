import { useEffect, useState } from "react";
import { WordOptions } from "./components/WordOptions";
import { GameBoard } from "./components/GameBoard";
import loadWordPref from "./tsx/loadWordPref";
import "./App.css";

function App() {
  const [wordLength, setWordLength] = useState(5);
  const [reccuringChars, setReccuringChars] = useState(false);
  const [word, setWord] = useState("");
  
  
  //TODO: store guesses, fix userinput, check win/lose, add time.

  useEffect(() => {
    loadWordPref(wordLength, reccuringChars).then((data) => setWord(data));
  }, [wordLength, reccuringChars]);
  
  

  return (
    <>
    {/* WordOptions innehåller 2buttons & en dcheckbox*/}
      <WordOptions
        wordLength={wordLength}
        onWordLengthChange={(wl: number) => setWordLength(wl)}
        onRecurringCharsChange={(rc: boolean) => setReccuringChars(rc)}
      />

      
      <GameBoard word={word}/>

      { /*TODO: remove p-tags*/ }
      <p className="text-4xl font-extrabold" > correct word: {word}</p>
    </>
  );
}

export default App;
