import React, { useState } from 'react';

const Counter = () => {
  let [count, setCount] = useState(8); // must always be at the top of the function

  // function increase() {
  //   setCount(count + 1);
  // }

  // function decrease() {
  //   setCount(count - 1);
  // }
  return (
    <div>
      <h1>New Counter with Hooks...{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

export default Counter;
