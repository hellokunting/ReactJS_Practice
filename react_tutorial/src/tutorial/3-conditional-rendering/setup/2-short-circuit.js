import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
  <h2>{text || "Jianxi has"}</h2>
  <button className='btn' onClick={() => setIsError(!isError)}>Click</button>
  {/* {isError && <h2>Big Bo</h2>} */}
  {isError ? <h1>1 Big Dick</h1> : <h1>No nostrils</h1>}
  </>
};

export default ShortCircuit;
