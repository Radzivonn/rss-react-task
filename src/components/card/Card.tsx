import { FC } from 'react';
import './style.scss';
import { Props } from './types';
import imagePath from '../../assets/img/planet.webp';

export const Card: FC<Props> = ({ ...props }) => {
  return (
    <div className="content-card">
      <img className="card-image" src={imagePath} alt="planet" />
      <h3 className="card-name"> {props.name} </h3>
      <p className="card-description"> {props.description} </p>
    </div>
  );
};
