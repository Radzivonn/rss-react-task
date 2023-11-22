import React, { FC } from 'react';
import './style.scss';
import { Card } from '../card/Card';
import getPlanetIdFromUrl from '../../helpers/getPlanetIdFromUrl';
import { useNavigate, useParams } from 'react-router-dom';
import { NOT_FOUND_REQUEST_MESSAGE } from '../../constants/constants';
import { useGetPlanetsQuery } from '../../API/API';
import { TailSpin } from 'react-loader-spinner';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const SearchContent: FC = () => {
  const { page, id } = useParams();
  const navigate = useNavigate();
  const searchParam = useTypedSelector(
    (state) => state.searchReducer.searchParam,
  );
  const isLoading = useTypedSelector(
    (state) => state.mainLoaderReducer.isLoading,
  );

  const { data } = useGetPlanetsQuery({
    pageNumber: page,
    searchParam,
  });

  const onCardClick = (planetId: string) => {
    if (id === planetId) navigate(`/${page}`);
    else navigate(`details/${planetId}`);
  };

  if (isLoading)
    return (
      <TailSpin
        height="80"
        width="80"
        color="#feffb5"
        radius="1"
        wrapperStyle={{ margin: '0 auto' }}
        visible={true}
      />
    );
  else if (data === undefined) return <h1>{NOT_FOUND_REQUEST_MESSAGE}</h1>;
  else if (data.results)
    return (
      <section className="search-content">
        {data.results.map((planet) => (
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
};
