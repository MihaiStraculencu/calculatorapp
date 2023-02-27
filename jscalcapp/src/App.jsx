import React from "react";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name).toString());
  };

  const clear = () => {
    setResult("");
  };
  const bakcspace = () => {
    setResult(result.slice(0, -1));
  };

  const calc = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div>
      <div className="w-[300px] h-[450px] rounded shadow-2xl bg-gray-900 flex flex-col space-y-4 bg-opacity-90 drop-shadow-lg">
        <div className="text-right mt-5">
          <input
            className="w-full h-20 rounded-b-sm text-right bg-slate-900 drop-shadow-lg bg-opacity-90 text-slate-300 font-bold text-5xl pr-6"
            type="text"
            value={result}
          />
        </div>
        <div className="text-slate-200 text-3xl font-bold text-right space-x-14 pr-7">
          <button name="backspace" onClick={bakcspace}>
            &larr;
          </button>
          <button name="clear" onClick={clear}>
            C
          </button>
        </div>
        <div className="grid grid-cols-4 text-slate-200 text-3xl font-bold gap-y-4">
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            x
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button onClick={calc}>=</button>
          <button name="-" onClick={handleClick}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
