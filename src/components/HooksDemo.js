import React, { useMemo, useState } from "react";
import { findPrime } from "../utilis/helper";

const HooksDemo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-2 p-2 w-96 h-96 border border-black" +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-300 rounded-lg"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-blue-500 px-2 w-72"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h2 className="font-bold mt-2">Nth Prime: {prime}</h2>
      </div>
    </div>
  );
};

export default HooksDemo;
