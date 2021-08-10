import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {id:new Date().getTime().toString(), firstName, email}

      // store user info into array called people
      setPeople((people) => {
        return[...people,person]
      })

      // default firstname and email to empty string
      setFirstName("");
      setEmail("");
      console.log(firstName, email);
    } else {
      console.log('empty');
    }
  };

  return (
  <>
  <article>
    <form className='form' onSubmit={handleSubmit}> 
      <div className='form-control'>
        <label htmlFor="firstName">Name: </label>
        <input type='text' id='firstName' name='firstName' value={firstName}
        // The onChange event in React detects when the value of an input element changes
        // access the target input’s value inside of the handleChange by accessing e.target.value
                onChange={(e)=> setFirstName(e.target.value)}/>
      </div>

      <div className='form-control'>
        <label htmlFor="email">Email: </label>
        <input type='text' id='firstName' name='firstName' value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
      </div>

       <button type='sumbit'>add person</button>
    </form>

    {people.map((person, index) => {
      const {id, firstName, email} = person;
      return (
        <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
        </div>
      );
    })}
  </article>
  </>

  )};

export default ControlledInputs;
