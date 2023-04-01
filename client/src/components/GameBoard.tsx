interface Props {
  wordLength: number;
}

export function GameBoard({ wordLength }: Props) {
  return (
    <div className="flex items-center justify-center">
      {new Array(wordLength).fill(0).map((_, i) => (
        <div className="mx-1.5" 
        key={i}>[ ]</div>
      ))}
    </div>
  );
}
