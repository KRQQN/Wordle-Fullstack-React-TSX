import { useEffect, useState } from "react";
import { Guess } from "./Guess";

interface Props {
  word: string;
  onGuessReset: () => void //TODO: remove this later
  guesses: { word: string; submitted: boolean }[]
  setGuesses: (guesses: { word: string; submitted: boolean }[]) => void;

}
//
export function GameBoard({ word, onGuessReset , guesses, setGuesses}: Props) {
  const [guess, setGuess] = useState({ word: "", submitted: false });
  let hasBeenUsed = false;

  useEffect(() => {
    const keyEvents: (event: KeyboardEvent) => void = (ev) => {

      if (ev.key.length === 1 && guess.word.length < word.length) {
        setGuess({
          word: guess.word.concat(ev.key.toLocaleLowerCase()),
          submitted: false,
        });
      }

      if (ev.key === "Enter" && guess.word.length === word.length) {
        setGuesses([...guesses, { word: guess.word, submitted: true }]);
        setGuess({ word: "", submitted: false });
      }
      //TODO: remove this later
      if (ev.key === "Escape") {
        onGuessReset()
      }

      if (ev.key === "Backspace") {
        setGuess({ word: guess.word.slice(0, -1), submitted: false });
      }
    };

    window.addEventListener("keyup", keyEvents);
    return () => {
      window.removeEventListener("keyup", keyEvents);
    };
  }, [guess, guesses]);

  return (
    <>
      {new Array(6).fill("").map((_: string, i: number) => {
        let fallback: { word: string; submitted: boolean } = {
          word: "",
          submitted: false,
        };
        if (!hasBeenUsed && i >= guesses.length) {
          hasBeenUsed = true;
          fallback = { word: guess.word, submitted: false };
        }

        return (
          <Guess
            guess={guesses[i] || fallback}
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
