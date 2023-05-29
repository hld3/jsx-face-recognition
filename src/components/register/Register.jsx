/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { InitialContext } from '../../context/InitialState';
import '../box.css';

export default function Register({ setPage }) {
  const { setUser } = useContext(InitialContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerNewUser() {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });
      const newUser = await response.json();
      setUser(newUser);
      setPage('home');
    } catch (error) {
      console.log('There was an error during registration.', error);
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      registerNewUser();
    }
  }

  return (
    <article className='article'>
      <fieldset id='fieldset'>
        <legend id='legend-text'>Register</legend>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
      </fieldset>
      <button onClick={registerNewUser}>Sign Up</button>
    </article>
  );
}
