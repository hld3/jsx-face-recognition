import { useContext } from 'react';
import { InitialContext } from '../../context/InitialState';
import './Home.css';
import ImageContainer from './ImageContainer';
import ImageLinkForm from './ImageLinkForm';
import Rank from './Rank';

export default function Home() {
  const { input, setInput } = useContext(InitialContext);

  // prettier-ignore
  return(
        <div className='home-container'>
            <Rank />
            <p className='description' style={{ 'fontSize': '1.5rem' }}>This magic brain will detect faces in your pictures. Give it a try.</p>
            <ImageLinkForm input={input} setInput={setInput} />
            <ImageContainer />
        </div>
    )
}
