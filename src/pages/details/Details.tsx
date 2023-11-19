import React, { useEffect, useState } from 'react';
import './style.scss';
import { Planet } from '../../API/types';
import { starWarsApi } from '../../API/StarWarsAPI';
import { TailSpin } from 'react-loader-spinner';
import { Button } from '../../components/UI/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';

export const Details = () => {
  const { page, id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [planet, setPlanet] = useState<Planet>();
  useEffect(() => {
    setIsLoading(true);

    void (async () => {
      setPlanet(await starWarsApi.getPlanet(id as string));
      setIsLoading(false);
    })();
  }, [id]);

  return isLoading ? (
    <TailSpin
      height="80"
      width="80"
      color="#feffb5"
      radius="1"
      wrapperClass="details-tail-spin"
      visible={true}
    />
  ) : (
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
