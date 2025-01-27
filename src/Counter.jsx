import React, { useState, memo } from "react";

const Counter = () => {
  const [counter, setCounters] = useState(1);

  const handleIncrement = () => {
    setCounters((prevvalue) => prevvalue + 1);
  };

  const handleDecremnt = () => {
    setCounters((prevvalue) => (prevvalue > 0 ? counter - 1 : 0));
  };

  console.log(counter, "Counter");

  return (
    <div>
      <h1>Counter Numere {counter}</h1>
      <button
        className="outline-none bg-blue-700 text-white px-6 py-0.5 shrink-0"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="outline-none bg-blue-700 text-white px-6 py-0.5 shrink-0"
        onClick={handleDecremnt}
      >
        Decrement
      </button>
    </div>
  );
};

export default memo(Counter);
