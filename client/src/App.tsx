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
    {/* WordOptions innehåller 2buttons & en checkbox*/}
      <WordOptions
        wordLength={wordLength}
        handleWordLengthChange={(wl: number) => setWordLength(wl)}
        handleRecurringCharsChange={(rc: boolean) => setReccuringChars(rc)}
      />

      
      <GameBoard guess="money" word={word}/>


      {/* {new Array(6).fill("").map((_: string, i: number) => (
        <Guess
          wordLength={wordLength}
          guess={Game.guesses[i] || ""}
          word={word}
          key={i}
        />
      ))} */}



      { /*TODO: remove p-tags*/ }
      <p className="text-2xl mt-6">guessed words: </p>
      <p className="text-4xl font-extrabold" > correct word: {word}</p>
    </>
  );
}

export default App;
