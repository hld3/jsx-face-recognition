import './ImageContainer.css';

// prettier-ignore
export default function imageContainer({ faceUrl, box }) {
  return (
    <div className='image-container' style={{'position': 'absolute'}}>
      <img id='inputImage' src={faceUrl} alt='' width='500px' height='auto' />
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>
  );
}
