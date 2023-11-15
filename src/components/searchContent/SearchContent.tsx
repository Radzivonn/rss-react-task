import React, { FC, useContext } from 'react';
import './style.scss';
import { Card } from '../card/Card';
import getPlanetIdFromUrl from '../../helpers/getPlanetIdFromUrl';
import { AppContext } from '../../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import { NOT_FOUND_REQUEST_MESSAGE } from '../../constants/constants';

export const SearchContent: FC = () => {
  const { page, id } = useParams();
  const navigate = useNavigate();
  const { planets } = useContext(AppContext);

  const onCardClick = (planetId: string) => {
    if (id === planetId) navigate(`/${page}`);
    else navigate(`details/${planetId}`);
    console.log(window.location.toString().slice(-1));
  };

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
  } else return <h1>{NOT_FOUND_REQUEST_MESSAGE}</h1>;
};
