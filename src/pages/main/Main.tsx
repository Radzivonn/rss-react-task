import React, { FC, useState, useEffect } from 'react';
import { SearchField } from '../../components/searchField/SearchField';
import { SearchContent } from '../../components/searchContent/SearchContent';
import { Button } from '../../components/UI/Button/Button';
import { starWarsApi } from '../../API/StarWarsAPI';
import { Props } from './types';
import { TailSpin } from 'react-loader-spinner';
import { Planet } from '../../API/types';
import { Pagination } from '../../components/pagination/Pagination';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { DEFAULT_PAGE_NUMBER } from '../../constants/constants';

export const Main: FC<Props> = () => {
  const { page } = useParams();
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [pagesAmount, setPagesAmount] = useState(starWarsApi.pagesAmount);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParam, setSearchParam] = useState(
    localStorage.getItem('SearchParam') ?? '',
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (page === undefined) {
      navigate(`/${DEFAULT_PAGE_NUMBER}`, { replace: true });
    }

    setIsLoading(true);
    localStorage.setItem('SearchParam', searchParam);

    void (async () => {
      try {
        setPlanets(await starWarsApi.getPlanets(page as string, searchParam));
        setPagesAmount(starWarsApi.pagesAmount);
        setIsLoading(false);
      } catch (error) {
        setIsErrorOccurred(true);
      }
    })();
  }, [page, searchParam]);

  useEffect(() => {
    if (isErrorOccurred) throw new Error('Error button clicked');
  }, [isErrorOccurred]);

  return (
    <AppContext.Provider
      value={{
        searchParam,
        setSearchParam,
        planets,
      }}
    >
      <main className="page-content">
        <div className="main-content">
          <SearchField disabled={isLoading} />
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
              <SearchContent />
              <Pagination
                currentPage={Number(page)}
                pagesAmount={pagesAmount}
              />
            </>
          )}
          <Button
            className="red-button"
            onClick={() => setIsErrorOccurred(true)}
          >
            throw error
          </Button>
        </div>
        <Outlet />
      </main>
    </AppContext.Provider>
  );
};
