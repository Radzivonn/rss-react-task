import React, { FC } from 'react';
import './style.scss';
import { Card } from '../card/Card';
import { Props } from './types';

export const SearchContent: FC<Props> = ({ ...props }) => {
  if (props.planets.length) {
    return (
      <section className="search-content">
        {props.planets.map((planet) => (
          <Card
            key={planet.name}
            name={planet.name}
            description={`population: ${planet.population}`}
          />
        ))}
      </section>
    );
  } else return <h1>nothing found for this request</h1>;
};
