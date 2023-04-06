import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  wordLength: number;
  handleChange: (wl: number) => void;
}

export function WordOptions({ wordLength, handleChange }: Props) {
  return (
    <>
      <h1 className="text-2xl font-">Word Length</h1>
      <div className="mb-2 flex justify-center">
        <button
          className="w-20 leading-none rounded-sm font-extrabold text-2xl bg-orange-400"
          onClick={() => {
            handleChange(wordLength - 1);
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p className="w-12 bg-white font-bold text-lg">{wordLength}</p>
        <button
          className="w-20  rounded-sm  bg-orange-400 flex items-center justify-center "
          onClick={() => {
            handleChange(wordLength + 1);
          }}
        >
          <FontAwesomeIcon icon={faPlus} className="text-lg" />
        </button>
      </div>

      <div className="mb-3">
        <input className="w-5 h-5 mx-1"
          type="checkbox"
          id="cb"
          onChange={() => handleChange(wordLength) }
          />
        <label className="text-xl font-semibold" 
          htmlFor="cb">
          Reccuring Letters?
        </label>
      </div>
    </>
  );
}
