import React, { useReducer } from 'react';

const Reducer = () => {
  const reduce = (state, action) => {
    if (action.type === 'mir') {
      return state + 2;
    } else if (action.type === 'kash') {
      return state - 1;
    } else if (action.type === '*') {
      return state * 3;
    }
    return;
  };

  let [state, dispatch] = useReducer(reduce, 0); // must always be at the top of the function

  return (
    <div>
      <h1>I am a reducer....{state}</h1>
      <button onClick={() => dispatch({ type: 'mir' })}>+1</button>
      <button onClick={() => dispatch({ type: 'kash' })}>-1</button>
      <button onClick={() => dispatch({ type: '*' })}>*3</button>
    </div>
  );
};

export default Reducer;
