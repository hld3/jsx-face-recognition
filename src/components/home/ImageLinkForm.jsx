import './ImageLinkForm.css'

export default function imageLinkForm({ setInput, onSubmitImageLink }) {
    return (
        <div className='input-form'>
            <input type='text' className='input' onChange={(e) => setInput(e.target.value)} />
            <button className='submit-face' onClick={onSubmitImageLink}>Detect</button>
            {/* find out if I can setInput on click. I think there might be a race condition. */}
        </div>
    )
}