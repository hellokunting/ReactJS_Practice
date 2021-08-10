import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log('hello');
    window.addEventListener('resize', checkSize);

    // cleanup 
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });
  return (
    <>
      <h1>Window</h1>
      <h2>{size}</h2>
    </>
  );
  
};

export default UseEffectCleanup;
