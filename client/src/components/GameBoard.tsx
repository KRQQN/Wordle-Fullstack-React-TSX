import { useLayoutEffect, useEffect, useState } from "react";
import { Guess } from "./Guess";

interface gameBoardProps {
  word: string;
  onGuessReset: () => void 
  guesses: { word: string; checked: boolean }[]
  setGuesses: (guesses: { word: string; checked: boolean }[]) => void;

}

export function GameBoard({ word, onGuessReset , guesses, setGuesses}: Props) {
  const [guess, setGuess] = useState({ word: "", checked: false });
  let hasBeenUsed = false;

  useLayoutEffect(() => {
    const handleKeyEvents: (event: KeyboardEvent) => void = (ev) => {

      if (ev.key.length === 1 && guess.word.length < word.length) {
        setGuess({
          word: guess.word.concat(ev.key.toLocaleLowerCase()),
          checked: false,
        });
      }

      if (ev.key === "Enter" && guess.word.length === word.length) {
        setGuesses([...guesses, { word: guess.word, checked: true }]);
        setGuess({ word: "", checked: false });
      }
  
      if (ev.key === "Escape") {
        onGuessReset()
      }

      if (ev.key === "Backspace") {
        setGuess({ word: guess.word.slice(0, -1), checked: false });
      }
    };

    window.addEventListener("keyup", handleKeyEvents);
    return () => {
      window.removeEventListener("keyup", handleKeyEvents);
    };
  }, [guess, guesses, word]);

  return (
    <>
      {new Array(6).fill("").map((_: string, i: number) => {
        let uncheckedGuess: { word: string; checked: boolean } = {
          word: "",
          checked: false,
        };
        if (!hasBeenUsed && i >= guesses.length) {
          hasBeenUsed = true;
          uncheckedGuess = { word: guess.word, checked: false };
        }

        return (
          <Guess
            guess={guesses[i] || uncheckedGuess}
            word={word}
            key={i}
          />
        );
      })}
      <p className="text-2xl mt-3">
        {"Guessed words: " + guesses.map((el) => el.word).join(",")}
      </p>
    </>
  );
}
