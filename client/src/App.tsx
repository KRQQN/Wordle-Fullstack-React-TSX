import { useEffect, useState } from "react";
import { WordOptions } from "./components/WordOptions";
import { GameBoard } from "./components/GameBoard";
import loadWordPref from "./scripts/loadWordPref";
import { Guess } from "./components/Guess";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [wordLength, setWordLength] = useState(5);
  const [recurring, setReccuringChars] = useState(false);
  const [word, setWord] = useState("");
  const [startTime, setStartTime] = useState<Date>();
  const [endTime, setEndTime] = useState<Date | undefined>(undefined);
  const [guesses, setGuesses] = useState<{ word: string; checked: boolean }[]>(
    []
  );

  useEffect(() => {
    if (guesses.length === 1 && !startTime) {
      setStartTime(new Date());
    }
    if(guesses[guesses.length - 1]?.word === word) {
      setEndTime(new Date());
    }
  }, [guesses]);

  useEffect(() => {
    loadWordPref(wordLength, recurring).then((data) =>
      setWord(data.toLocaleLowerCase())
    );
    setGuesses([]);
    setStartTime(undefined);
    setEndTime(undefined);
  }, [wordLength, recurring]);

 
  const handleGuessReset = () => {
    setGuesses([]);
  };

  if (guesses[guesses.length - 1]?.word === word) {

    let elapsedTime: number | undefined
    if(startTime && endTime) {
      elapsedTime = (endTime.getTime() - startTime.getTime()) / 1000;
    }
    
    return (
      <div className="bg-orange-400 shadow-2xl border border-black max-w-md min-w-0 flex flex-col justify-center items-center mx-auto p-14 mb-8">
        <h1 className="text-6xl mb-5 font-bold">Correct!</h1>
        <Guess guess={guesses[guesses.length -1]} word={word} />
        <h2 className="text-2xl mt-3">Number of guesses: {guesses.length}</h2>
        <h3 className="text-2xl">Seconds passed: {elapsedTime?.toFixed(3)}</h3>
        <h3 className="text-2xl mb-5">Word length: {wordLength}</h3>
        

        <form
          className="flex flex-col"
          onSubmit={async (ev) => {
            ev.preventDefault();

            const score = {
              name: name,
              time: elapsedTime,
              guessCount: guesses.length,
              wordLength: wordLength,
              recurringLetters: recurring,
            };

            await fetch("/api/highScores", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(score),
            });
          }}
        >
          <label className="text-2xl self-start " htmlFor="">
            Name
          </label>
          <input
            className="mb-4 p-1"
            onChange={(ev) => {
              setName(ev.target.value);
            }}
            type="text"
            name=""
            id="name"
            placeholder="Your name here"
          />
          <button
            className="h-10 wx-auto bg-red-400"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <WordOptions
        wordLength={wordLength}
        onWordLengthChange={(wl: number) => setWordLength(wl)}
        onRecurringCharsChange={(rc: boolean) => setReccuringChars(rc)}
      />

      <GameBoard
        word={word}
        onGuessReset={handleGuessReset}
        guesses={guesses}
        setGuesses={setGuesses}
      />

      {/*TODO: remove p-tags*/}
      <p className="text-4xl font-extrabold"> correct word: {word}</p>
    </>
  );
}

export default App;
