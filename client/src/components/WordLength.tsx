import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


interface Props {
    handleChange: (x:number) => void
    //handleChange: (wl:number) => void
}

export const WordLength: React.FC<Props> = ({handleChange}) => {

    const [count, setCount] = useState<number>(5);

  return (
    <>
      <h1>Word Length</h1>
      <div className="flex justify-center ">
        <button
          className="w-20 leading-none rounded-sm font-extrabold text-2xl bg-orange-400"
          onClick={() => setCount(count - 1)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>

        <p
          onChange={() => {
            handleChange(count);
          }}
          className="w-12 bg-white font-bold text-lg"
        >
          {count}
        </p>

        <button
          className="w-20  rounded-sm  bg-orange-400 flex items-center justify-center "
          onClick={() => setCount(count + 1)}
        >
          <FontAwesomeIcon icon={faPlus} className="text-lg" />
        </button>
      </div>

     {/*  <h1 className="h-80 mt-5 text-xl bg-yellow-300 font-bold text-center">
        APP CONTENT
      </h1> */}
    </>
  );
   


}








