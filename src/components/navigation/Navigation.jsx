/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { InitialContext } from '../../context/InitialState';
import './Navigation.css';

export default function Navigation({ page, setPage }) {
  const { resetState } = useContext(InitialContext);

  // prettier-ignore
  return (
        <>
            {page === 'register' && <p onClick={() => setPage('signin')}>Sign In</p>}
            {page === 'signin' && <p onClick={() => setPage('register')}>Register</p>}
            {page === 'home' && <p onClick={() => { setPage('signin'); resetState() }}>Sign Out</p>}
        </>
    )
}
