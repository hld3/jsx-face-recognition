import { useContext } from 'react';
import { calculateFaceLocation } from '../../Clarifai';
import { InitialContext } from '../../context/InitialState';
import './ImageLinkForm.css';

export default function ImageLinkForm() {
  const { setFaceUrl, input, setInput, setBox } = useContext(InitialContext);

  async function onSubmitImageLink() {
    const response = await fetch('http://localhost:3000/image_data', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ input: input }),
    });
    const result = await response.json();
    setBox(calculateFaceLocation(result));
  }

  // prettier-ignore
  return (
        <div className='input-form'>
            <input type='text' className='input' onChange={(e) => setInput(e.target.value)} />
            <button className='submit-face' onClick={() => {setFaceUrl(input); onSubmitImageLink()}}>Detect</button>
        </div>
    )
}
