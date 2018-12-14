import React, { useState, useEffect } from 'react';

const NewLife = () => {
  let [count, setCount] = useState(0);

  //versatile  - can be used for different lifecyle components

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <h1>I am new lifecycle....{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default NewLife;
