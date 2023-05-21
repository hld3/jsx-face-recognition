import './ImageLinkForm.css';

// prettier-ignore
export default function imageLinkForm({ setInput, onSubmitImageLink }) {
    return (
        <div className='input-form'>
            <input type='text' className='input' onChange={(e) => setInput(e.target.value)} />
            <button className='submit-face' onClick={onSubmitImageLink}>Detect</button>
        </div>
    )
}
