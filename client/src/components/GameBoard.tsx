import { useState } from "react";
import { Guess } from "./Guess";
import { keyEvents } from "./GameLogic"

interface Props {
  guess: string;
  word: string;
}


export function GameBoard({ guess, word }: Props) {
  const [guesses, setGuesses] = useState<string[]>([])
  const [win, setWin] = useState(false)
  const [lost, setLost] = useState(false)
  
  window.addEventListener("keyup", keyEvents)
  
  return (
    <>
      {new Array(6).fill("").map((_: string, i: number) => (
        <Guess
          wordLength={word.length}
          guess={guess}
          word={word}
          key={i}
        />
      ))}
    </>
  );
}

