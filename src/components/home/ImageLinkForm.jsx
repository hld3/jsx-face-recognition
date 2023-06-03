import { useContext } from 'react';
import { calculateFaceLocation } from '../../Clarifai';
import { InitialContext } from '../../context/InitialState';
import './ImageLinkForm.css';

export default function ImageLinkForm() {
  const { user, setUser, setFaceUrl, input, setInput, setBox } =
    useContext(InitialContext);

  async function submitImage() {
    let result;

    try {
      const response = await fetch(
        'https://js-smart-brain-api.onrender.com/image_data',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ input: input }),
        }
      );
      result = await response.json();
    } catch (error) {
      console.log('There was an error retrieving image data.', error);
    }

    if (result.outputs.length > 0) {
      await incrementImageCount();
    }
    setBox(calculateFaceLocation(result));
  }

  async function incrementImageCount() {
    try {
      const incCountResponse = await fetch(
        'https://js-smart-brain-api.onrender.com/image',
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: user.id }),
        }
      );
      const newCount = await incCountResponse.json();
      setUser(Object.assign(user, { entries: newCount }));
    } catch (error) {
      console.log('There was an error incrementing the user count.', error);
    }
  }

  // prettier-ignore
  return (
        <div className='input-form'>
            <input type='text' className='input' onChange={(e) => setInput(e.target.value)} />
            <button className='submit-face' onClick={() => {setFaceUrl(input); submitImage()}}>Detect</button>
        </div>
    )
}
