import {useState} from "react"

interface guessProps {
  guess: {word: string, checked: boolean} ;
  word: string;
}
export function Guess({ guess, word }: Props) {
  const [charsInWord, setCharsInWord] = useState(word.split(""))
  const unMatchedChars = word.split("").filter((e, i) => e != guess.word.split("")[i]);

  return (
    <div className="flex items-center justify-center">
      {new Array(word.length).fill(0).map((_: string, i: number) => {
       let bg = "bg-orange-400"

        if(guess.checked === true) {
          if(guess.word[i] === word[i]) {
            bg = "bg-green-400"
    
          } else if ( unMatchedChars.includes(guess.word[i])) {
            bg = "bg-yellow-300"
            
          } else { bg= "bg-red-500"}
        } 
        
        return (
          <div
            className={`${bg} border-2 border-black border-opacity-5 shadow-md m-1 h-16 w-16 text-4xl font-bold flex items-center justify-center`}
            key={i}
          >
            {guess.word[i]}
          </div>
        );
      })}
    </div>
  );
}
