import { useEffect, useState } from "react";
import { Guess } from "./Guess";


interface Props {
  guess: string;
  word: string;
}

export function GameBoard({ guess, word }: Props) {
  const [guesses, setGuesses] = useState<string[]>([])
  //const [currGuess, setCurrGuess] = useState("")
  const [win, setWin] = useState(false)
  const [lost, setLost] = useState(false)
  
  
  useEffect(() => {
    // add currGuess state : string. on keyup add char to string 
    // if keyup === enter && currGuess.lenth == word.length. 
    //append -> guesses
    
    const keyEvents: (event: KeyboardEvent) => void = (ev) => {
      setGuesses((guesses) => [...guesses, ev.key])
      console.log(guesses)
    }

    window.addEventListener("keyup", keyEvents)
    return () => {
      window.removeEventListener("keyup", keyEvents)
    }
  }, [])
  
 
  
  return (
    <>
      {new Array(6).fill("").map((_: string, i: number) => (
        <Guess
          wordLength={word.length}
          guess={guesses[i] || ""}
          word={word}
          key={i}
        />
      ))}
    </>
  );
}
