import { useState } from 'react';
import './App.css';
import { calculateFaceLocation } from './Clarifai';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Register from './components/register/Register';
import SignIn from './components/signin/SignIn';

export default function App() {
  const [page, setPage] = useState('signin');
  const [input, setInput] = useState('');
  const [faceUrl, setFaceUrl] = useState('');
  const [box, setBox] = useState({});

  async function onSubmitImageLink() {
    setFaceUrl(input);
    const response = await fetch('http://localhost:3000/image_data', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ input: input }),
    });
    const result = await response.json();
    setBox(calculateFaceLocation(result));
  }

  return (
    <>
      <div className='navigation'>
        <Navigation setPage={setPage} page={page} setInput={setInput} />
      </div>
      <div className='container'>
        {page === 'signin' && <SignIn setPage={setPage} />}
        {page === 'register' && <Register setPage={setPage} />}
        {page === 'home' && (
          <Home
            faceUrl={faceUrl}
            setInput={setInput}
            onSubmitImageLink={onSubmitImageLink}
            box={box}
          />
        )}
      </div>
    </>
  );
}
