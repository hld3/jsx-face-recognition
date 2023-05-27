import { useContext } from 'react';
import { InitialContext } from '../../context/InitialState';
import './ImageContainer.css';

export default function ImageContainer() {
  const { faceUrl, box } = useContext(InitialContext);

  // prettier-ignore
  return (
    <div className="image-container">
      <div style={{'position': 'absolute'}}>
        <img id='inputImage' src={faceUrl} alt='' width='500px' height='auto' />
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}
