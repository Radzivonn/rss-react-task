import React, { FC, useContext } from 'react';
import './style.scss';
import { Card } from '../card/Card';
import { Props } from './types';
import getPlanetIdFromUrl from '../../helpers/getPlanetIdFromUrl';
import { AppContext } from '../../context/AppContext';

export const SearchContent: FC<Props> = ({ onCardClick }) => {
  const { planets } = useContext(AppContext);

  if (planets.length) {
    return (
      <section className="search-content">
        {planets.map((planet) => (
          <Card
            key={planet.name}
            name={planet.name}
            id={getPlanetIdFromUrl(planet.url)}
            onCardClick={() => {
              onCardClick(getPlanetIdFromUrl(planet.url));
            }}
            description={`population: ${planet.population}`}
          />
        ))}
      </section>
    );
  } else return <h1>nothing found for this request</h1>;
};
