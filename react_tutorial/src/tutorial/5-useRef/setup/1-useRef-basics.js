import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(10);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value)
  }
  console.log(refContainer.current.val);
  return (<><form className='form' onSubmit={handleSubmit}>
    <div>
      <input type='text' ref={refContainer}/>
      <button type='button'>
        Submit Button
      </button>
    </div>
  </form>
  </>);
};

export default UseRefBasics;
