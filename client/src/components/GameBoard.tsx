import React from 'react'
import { useState } from "react";
import {WordLength} from './WordLength';




export const GameBoard: React.FC = () => {
    const [wordLength, setWordLength] = useState(5)

  return (
    <>
        <WordLength handleChange={(wl:number) => setWordLength(wl)}/>
        {new Array(wordLength).fill(0).map((_,i) => (
            <div>X</div>
        ))}
    </>

  )
}



