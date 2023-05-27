/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { db } from '../../App';
import { InitialContext } from '../../context/InitialState';
import '../box.css';

export default function SignIn({ setPage }) {
  const { setUser, password, setPassword, userEmail, setUserEmail } =
    useContext(InitialContext);

  function onLogin() {
    const activeUser = db.find((user) => {
      return user.email === userEmail && user.password === password;
    });

    if (activeUser) {
      setUser(activeUser);
      setPage('home');
    } else {
      console.log('There was an error logging in.');
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
        />
      </fieldset>
      <button onClick={() => onLogin()}>Sign In</button>
      <p onClick={() => setPage('register')}>Register</p>
    </article>
  );
}
