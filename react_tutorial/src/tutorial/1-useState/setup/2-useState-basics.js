import React, { useState } from 'react';

// useState is a built-in react hook 
// Tutorial: https://reactjs.org/docs/hooks-state.html

// use
// component name must be upperCase --> UseStateBasics rather than useStateBasics

// must be in the function/component body
// const [text, setText] = useState('Wo Cao'); must be inside UseStateBasics() function
// cannot call conditionally 


const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];

  // syntax of useState
  // text: input parameter, setText: function 
  const [text, setText] = useState('Wo Cao'); // intial the function 
  const handleClick = () => {
    if (text === 'Wo Cao') {
      setText('hello Kunting');
    } else {
      setText('Wo Cao');
    }
  }

  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>Click</button>
  </React.Fragment>;
};

export default UseStateBasics;
