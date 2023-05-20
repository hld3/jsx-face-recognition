import './ImageLinkForm.css'

export default function imageLinkForm({ setFaceUrl }) {
    return (
        <div className='input-form'>
            <input type='text' className='input' onChange={(e) => setFaceUrl(e.target.value)} />
            <button className='submit-face'>Detect</button>
            {/* find out if I can setFaceUrl on click. I think there might be a race condition. */}
        </div>
    )
}