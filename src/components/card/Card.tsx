import { FC } from 'react';
import './style.scss';
import { Props } from './types';
import imagePath from '../../assets/img/planet.webp';
import { useParams } from 'react-router-dom';

export const Card: FC<Props> = ({ name, id, description, onCardClick }) => {
  const { id: currentId } = useParams();

  return (
    <div
      className={`content-card ${currentId === id ? 'pressed' : ''}`}
      onClick={onCardClick}
    >
      <img className="card-image" src={imagePath} alt="planet" />
      <h3 className="card-name"> {name} </h3>
      <p className="card-description"> {description} </p>
    </div>
  );
};
