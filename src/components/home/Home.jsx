import './Home.css';
import ImageContainer from './ImageContainer';
import ImageLinkForm from './ImageLinkForm';
import Rank from './Rank';

// prettier-ignore
export default function home({ faceUrl, setInput, onSubmitImageLink, box }) {

    return(
        <div className='home-container'>
            <Rank />
            <p className='description' style={{ 'fontSize': '1.5rem' }}>This magic brain will detect faces in your pictures. Give it a try.</p>
            <ImageLinkForm setInput={setInput} onSubmitImageLink={onSubmitImageLink} />
            <ImageContainer faceUrl={faceUrl} box={box} />
        </div>
    )
}
