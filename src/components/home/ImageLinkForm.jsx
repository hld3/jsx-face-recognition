import { useContext } from 'react';
import { InitialContext } from '../../context/InitialState';
import './ImageLinkForm.css';

// prettier-ignore
export default function ImageLinkForm({ input, setInput, onSubmitImageLink }) {

    const {setFaceUrl} = useContext(InitialContext)

    return (
        <div className='input-form'>
            <input type='text' className='input' onChange={(e) => setInput(e.target.value)} />
            <button className='submit-face' onClick={() => {setFaceUrl(input); onSubmitImageLink()}}>Detect</button>
        </div>
    )
}
