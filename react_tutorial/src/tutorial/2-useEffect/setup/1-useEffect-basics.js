import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// useEffect is used to tell React that 
// your component needs to do something after render
// you can have as many as useEffect as you want 
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  
  // only set if condition inside the useEffect
  // React compares the current value of dependency 
  // and the value on previous render. 
  // If they are not the same, effect is invoked. 
  // This argument is optional. 
  // If you omit it, effect will be executed after every render.
  useEffect(() => {
    if(value >= 1) {
      document.title = `Update ${value}!`;
    }
  },[value]);

  return (
  <>
  <h1>{value}</h1>

  <button className='btn' onClick={() => setValue(value + 1)}>
    Click Me
    </button>
  </>
  );
};

export default UseEffectBasics;
