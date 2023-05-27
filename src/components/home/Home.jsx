import { useContext } from 'react';
import { calculateFaceLocation } from '../../Clarifai';
import { InitialContext } from '../../context/InitialState';
import './Home.css';
import ImageContainer from './ImageContainer';
import ImageLinkForm from './ImageLinkForm';
import Rank from './Rank';

export default function Home() {
  const { input, setInput, setBox } = useContext(InitialContext);

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
  return(
        <div className='home-container'>
            <Rank />
            <p className='description' style={{ 'fontSize': '1.5rem' }}>This magic brain will detect faces in your pictures. Give it a try.</p>
            <ImageLinkForm input={input} setInput={setInput} onSubmitImageLink={onSubmitImageLink} />
            <ImageContainer />
        </div>
    )
}
