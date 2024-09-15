import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      setResult(new Function('return ' + input)().toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const buttonClass = "p-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors";
  const operatorClass = "p-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors";

  return (
    <div className="max-w-sm mx-auto text-center p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-2xl backdrop-blur-sm">
      <h1 className="text-2xl font-bold mb-4 text-white">Calculadora SCM</h1>
      <input
        type="text"
        value={input}
        readOnly
        className="w-full p-2 text-xl mb-2 border border-gray-700 rounded bg-gray-800 text-white"
      />
      <input
        type="text"
        value={result}
        readOnly
        className="w-full p-2 text-xl mb-4 border border-gray-700 rounded bg-gray-800 text-white"
      />
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleClick(value)} className={value === '/' ? operatorClass : buttonClass}>
            {value}
          </button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleClick(value)} className={value === '*' ? operatorClass : buttonClass}>
            {value}
          </button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleClick(value)} className={value === '-' ? operatorClass : buttonClass}>
            {value}
          </button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button
            key={value}
            onClick={value === '=' ? handleEqual : () => handleClick(value)}
            className={value === '=' ? "p-2 bg-green-700 text-white rounded hover:bg-green-600 transition-colors" : value === '+' ? operatorClass : buttonClass}
          >
            {value}
          </button>
        ))}
        <button onClick={handleClear} className="col-span-4 p-2 bg-red-700 text-white rounded hover:bg-red-600 transition-colors">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;