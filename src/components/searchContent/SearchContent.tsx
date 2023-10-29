import React, { Component } from 'react';
import './style.scss';
import { Card } from '../card/Card';
import { Props } from './types';

export class SearchContent extends Component<Props> {
  render(): React.ReactNode {
    return (
      <section className="search-content">
        {this.props.planets.map((planet) => (
          <Card
            key={planet.name}
            name={planet.name}
            description={`population: ${planet.population}`}
          />
        ))}
      </section>
    );
  }
}
