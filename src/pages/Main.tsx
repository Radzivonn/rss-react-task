import React, { FC, useState, useEffect } from 'react';
import { SearchField } from '../components/searchField/SearchField';
import { SearchContent } from '../components/searchContent/SearchContent';
import { Button } from '../components/UI/Button/Button';
import { starWarsApi } from '../API/StarWarsAPI';
import { Props } from './types';
import { TailSpin } from 'react-loader-spinner';
import { Planet } from '../API/types';
import { Pagination } from '../components/pagination/Pagination';
import { Outlet, useSearchParams } from 'react-router-dom';

export const Main: FC<Props> = () => {
  const [searchParams] = useSearchParams();
  const [isErrorButtonClicked, setIsErrorButtonClicked] = useState(false);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [pagesAmount, setPagesAmount] = useState(starWarsApi.pagesAmount);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParam, setSearchParam] = useState(
    localStorage.getItem('SearchParam') ?? '',
  );

  useEffect(() => {
    setIsLoading(true);
    localStorage.setItem('SearchParam', searchParam);

    void (async () => {
      setPlanets(
        await starWarsApi.getPlanets(
          searchParams.get('page') ?? '1',
          searchParam,
        ),
      );

      setPagesAmount(starWarsApi.pagesAmount);
      setIsLoading(false);
    })();
  }, [searchParams, searchParam]);

  useEffect(() => {
    if (isErrorButtonClicked) throw new Error('Error button clicked');
  }, [isErrorButtonClicked]);

  return (
    <main className="page-content">
      <SearchField onSearch={setSearchParam} disabled={isLoading} />
      {isLoading ? (
        <TailSpin
          height="80"
          width="80"
          color="#feffb5"
          radius="1"
          wrapperStyle={{ margin: '0 auto' }}
          visible={true}
        />
      ) : (
        <>
          <SearchContent planets={planets} />
          <Pagination
            currentPage={Number(searchParams.get('page'))}
            pagesAmount={pagesAmount}
          />
        </>
      )}
      <Button
        className="error-button"
        onClick={() => setIsErrorButtonClicked(true)}
      >
        throw error
      </Button>
      <Outlet />
    </main>
  );
};
