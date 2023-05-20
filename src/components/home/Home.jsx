import ImageContainer from './ImageContainer'
import ImageLinkForm from './ImageLinkForm'
import Rank from './Rank'

export default function home({ faceUrl, setFaceUrl }) {

    return(
        <>
            <Rank />
            <p className='description' style={{ 'font-size': '1.5rem' }}>This magic brain will detect faces in your pictures. Give it a try.</p>
            <ImageLinkForm setFaceUrl={setFaceUrl} />
            <ImageContainer faceUrl={faceUrl} />
        </>
    )
}