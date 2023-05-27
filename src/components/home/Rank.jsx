import { useContext } from 'react';
import { InitialContext } from '../../context/InitialState';
import './Rank.css';

export default function Rank() {
  const { user } = useContext(InitialContext);

  return (
    <>
      <div className='rank-text'>{`${user.name}, your current count is...`}</div>
      <div className='rank-count'>{user.entries}</div>
    </>
  );
}
