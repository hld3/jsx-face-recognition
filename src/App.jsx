import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Register from './components/register/Register';
import SignIn from './components/signin/SignIn';
import { InitialStateContextProvider } from './context/InitialState';

export const db = [
  {
    name: 'Joe',
    password: 'pw',
    email: 'joe@gmail.com',
    entries: 5,
    joined: new Date(),
  },
  {
    name: 'Tom',
    password: 'test',
    email: 'tom@yahoo.com',
    entries: 44,
    joined: new Date(),
  },
];

export default function App() {
  const [page, setPage] = useState('signin');

  return (
    <>
      <InitialStateContextProvider>
        <div className='navigation'>
          <Navigation setPage={setPage} page={page} />
        </div>
        <div className='container'>
          {page === 'signin' && <SignIn setPage={setPage} />}
          {page === 'register' && <Register setPage={setPage} />}
          {page === 'home' && <Home />}
        </div>
      </InitialStateContextProvider>
    </>
  );
}
