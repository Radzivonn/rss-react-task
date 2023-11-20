import React from 'react';
import './style.scss';
import { TailSpin } from 'react-loader-spinner';
import { Button } from '../../components/UI/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPlanetQuery } from '../../API/API';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Details = () => {
  const { page, id } = useParams();
  const navigate = useNavigate();
  const { data: planet } = useGetPlanetQuery(id ?? '');
  const isLoading = useTypedSelector(
    (state) => state.detailsLoaderReducer.isLoading,
  );

  if (isLoading)
    return (
      <TailSpin
        height="80"
        width="80"
        color="#feffb5"
        radius="1"
        wrapperClass="details-tail-spin"
        visible={true}
      />
    );
  else
    return (
      <aside className="details-block" data-testid="details">
        <h2> name: {planet?.name} </h2>
        <p> climate: {planet?.climate} </p>
        <p> terrain: {planet?.terrain} </p>
        <p> diameter: {planet?.diameter} </p>
        <p> population: {planet?.population} </p>
        <p> gravity: {planet?.gravity} </p>
        <p> surface water: {planet?.surface_water} </p>
        <p> rotation period: {planet?.rotation_period} </p>
        <p> orbital period: {planet?.orbital_period} </p>
        <Button className="red-button" onClick={() => navigate(`/${page}`)}>
          close
        </Button>
      </aside>
    );
};
