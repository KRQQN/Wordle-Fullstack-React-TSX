import React from 'react'
import { Guess } from "./Guess"

interface Props {
    wordLength: number;
    guess: string
    word: string
  }


export default function GameBoard({ wordLength, guess, word }: Props) {
  return 
  
  
  (
    <Guess wordLength={wordLength} guess="guess" word="tests" />
  )
}
