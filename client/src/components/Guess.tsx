interface Props {
  wordLength: number;
  guess: string;
  word: string;
}

export function Guess({ guess, word }: Props) {
  return (
    <div className="flex items-center justify-center">
      {new Array(word.length).fill(0).map((_: string, i: number) => {
        const bg = guess[i] === word[i] 
        ? "bg-green-600" 
        : "bg-orange-400";

        return (
          <div
            className={`${bg} shadow-md m-1 h-16 w-16 text-4xl font-bold flex items-center justify-center`}
            key={i}
          >
            {guess[i]}
          </div>
        );
      })}
    </div>
  );
}
