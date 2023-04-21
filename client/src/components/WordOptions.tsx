import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface wordOptionsProps {
  wordLength: number;
  onWordLengthChange: (wl: number) => void;
  onRecurringCharsChange: (rc: boolean) => void;
}

export function WordOptions({
  wordLength,
  onWordLengthChange,
  onRecurringCharsChange,
}: Props) {
  return (
    <div className="mb-8 flex flex-col">
      <h1 className="text-2xl ">Word Length</h1>
      <div className="mb-2 flex justify-center">
        <button
          className="w-20 leading-none rounded-sm font-extrabold text-2xl bg-orange-400"
          type="button"
          onClick={() => {
            onWordLengthChange(wordLength - 1);
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p className="w-12 bg-white font-bold text-lg">{wordLength}</p>
        <button
          className="w-20  rounded-sm  bg-orange-400 flex items-center justify-center "
          type="button"
          onClick={() => {
            onWordLengthChange(wordLength + 1);
          }}
        >
          <FontAwesomeIcon icon={faPlus} className="text-lg" />
        </button>
      </div>

      <div className="mb-3">
        <input
          className="w-5 h-5 mx-1"
          type="checkbox"
          id="cb"
          onChange={(ev) => {
            onRecurringCharsChange(ev.target.checked);
          }}
        />
        <label className="text-xl font-semibold" htmlFor="cb">
          Reccuring Letters?
        </label>
      </div>
    </div>
  );
}
