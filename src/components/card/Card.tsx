import { Component } from 'react';
import './style.scss';
import { Props } from './types';
import imagePath from '../../assets/img/planet.webp';

export class Card extends Component<Props> {
  render(): React.ReactNode {
    return (
      <div className="content-card">
        <img className="card-image" src={imagePath} alt="planet" />
        <h3 className="card-name"> {this.props.name} </h3>
        <p className="card-description"> {this.props.description} </p>
      </div>
    );
  }
}
