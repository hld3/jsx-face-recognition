/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { InitialContext } from '../../context/InitialState';
import '../box.css';

export default function SignIn({ setPage }) {
  const { setUser, password, setPassword, userEmail, setUserEmail } =
    useContext(InitialContext);

  async function onLogin() {
    try {
      const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, password: password }),
      });
      const activeUser = await response.json();

      if (activeUser.id) {
        setUser(activeUser);
        setPage('home');
      } else {
        console.log('Was unable to retrieve the expected user.');
      }
    } catch (error) {
      console.log('There was an error logging in.', error);
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      onLogin();
    }
  }

  return (
    <article className='article'>
      <fieldset id='fieldset'>
        <legend id='legend-text'>Sign In</legend>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
      </fieldset>
      <button onClick={() => onLogin()}>Sign In</button>
      <p onClick={() => setPage('register')}>Register</p>
    </article>
  );
}
