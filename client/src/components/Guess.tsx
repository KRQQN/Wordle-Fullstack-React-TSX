interface Props {
  guess: {word: string, submitted: boolean} ;
  word: string;
}
export function Guess({ guess, word }: Props) {


  return (
    <div className="flex items-center justify-center">
      {new Array(word.length).fill(0).map((_: string, i: number) => {
       let bg = "bg-orange-400"

        if(guess.submitted === true) {
          bg = guess.word.charAt(i) === word[i] 
            ? "bg-green-600" 
            : "bg-orange-400";
        } 
        
        return (
          <div
            className={`${bg} shadow-md m-1 h-16 w-16 text-4xl font-bold flex items-center justify-center`}
            key={i}
          >
            {guess.word.charAt(i)}
          </div>
        );
      })}
    </div>
  );
}

