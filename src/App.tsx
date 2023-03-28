import { useState } from "react";

function App() {
  const [result, setResult] = useState("0");
  const operators = "+-/*=";
  const lastDigit = result.slice(result.length - 1);
  const firstDigit = result.slice(0, 1);

  const handleClick = (e: any) => {
    // if input is operator and the last digit of result is also operator OR
    // result is equal to "0", do nothing
    if (
      operators.includes(e.target.value) &&
      (operators.includes(lastDigit) || result === "0")
    ) {
      return;
    }

    // if input is equal to "0" AND first or last digit of result are equal to "0", do nothing
    if (e.target.value === "0" && (lastDigit === "0" || firstDigit === "0")) {
      return;
    }

    // if result is equal to "0", set result to input, else concat result with input
    if (result === "0") {
      setResult(e.target.value);
    } else {
      setResult(result.concat(e.target.value));
    }
  };

  const clear = () => {
    setResult("0");
  };

  const bakcspace = () => {
    if (result.length === 1) {
      setResult("0");
    } else {
      setResult(result.slice(0, -1));
    }
  };

  const calc = () => {
    try {
      if (operators.includes(lastDigit)) {
        return;
      }
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-r from-blue-600 to-violet-600 flex-col space-y-10">
      <div className="w-[400px] h-[450px] rounded shadow-2xl bg-gray-900 flex flex-col space-y-6 bg-opacity-90 drop-shadow-lg">
        <div className="text-right mt-5">
          <input
            className="w-full h-20 rounded-b-sm text-right bg-slate-900 drop-shadow-lg bg-opacity-90 text-slate-300 font-bold text-5xl pr-6 outline-none"
            value={result}
          />
        </div>
        <div className="text-slate-200 text-3xl font-bold text-right space-x-10 pr-10">
          <button value="backspace" onClick={bakcspace}>
            &larr;
          </button>
          <button value="clear" onClick={clear}>
            C
          </button>
        </div>
        <div className="grid grid-cols-4 text-slate-200 text-3xl font-bold gap-y-4">
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button value="*" onClick={handleClick}>
            *
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button value="/" onClick={handleClick}>
            &divide;
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button onClick={calc}>=</button>
          <button value="-" onClick={handleClick}>
            -
          </button>
        </div>
      </div>
      <div className="flex flex-col  justify-start items-start w-96">
        <div className="text-white font-medium font-mono">
          Made by Straculencu Mihai
        </div>

        <div className="text-white font-medium font-mono">
          Email:mihaistraculencu83@gmail.com
        </div>

        <a
          className="m-0 p-0"
          href="https://github.com/MihaiStraculencu/jscalculatorapp/tree/main/jscalcapp"
          target="_blank"
        >
          <div className="text-white font-medium font-mono hover:underline">
            Github
          </div>
        </a>

        <a
          className="m-0 p-0"
          href="https://www.linkedin.com/in/straculencu-mihai/"
          target="_blank"
        >
          <div className="text-white font-medium font-mono hover:underline">
            LinkedIn
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
