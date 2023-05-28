import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Register from './components/register/Register';
import SignIn from './components/signin/SignIn';
import { InitialStateContextProvider } from './context/InitialState';

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
