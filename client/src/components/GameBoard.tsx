import { useEffect, useState } from "react";
import { Guess } from "./Guess";


interface Props {
  guess: string;
  word: string;
}

export function GameBoard({ guess, word}: Props) {

  const [guesses, setGuesses] = useState<string[]>([])
  const [currGuess, setCurrGuess] = useState("")
  const [win, setWin] = useState(false)
  const [lost, setLost] = useState(false)
  
  
  useEffect(() => {
    // add currGuess state : string. on keyup add char to string 
    // if keyup === enter && currGuess.lenth == word.length. 
    //append -> guesses
    //ssfdddds
    const keyEvents: (event: KeyboardEvent) => void = (ev) => {
      
      if(ev.key.length === 1 && currGuess.length < word.length){
        setCurrGuess((currGuess) => currGuess.concat(ev.key))
        console.log(currGuess + ev.key)
      }

      if(ev.key === "Enter" && currGuess.length === word.length) {
        setGuesses( (guesses) => [...guesses, currGuess])
        setCurrGuess("")
        console.log("guesses: " + guesses)
      }
    }
    //
    window.addEventListener("keyup", keyEvents)
    return () => {
      window.removeEventListener("keyup", keyEvents)
    }
  }, [guesses, currGuess])
  
 
  
  return (
    <>
      {new Array(6).fill("").map((_: string, i: number) => (
        <Guess
          wordLength={word.length}
          preGuess={currGuess}
          guess={guesses[i] || ""}
          word={word}
          key={i}
        />
      ))}
    </>
  );
}
