import React, { FC, useState, useEffect } from 'react';
import { SearchField } from '../../components/searchField/SearchField';
import { SearchContent } from '../../components/searchContent/SearchContent';
import { Button } from '../../components/UI/Button/Button';
import { Props } from './types';
import { Pagination } from '../../components/pagination/Pagination';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { DEFAULT_PAGE_NUMBER } from '../../constants/constants';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Main: FC<Props> = () => {
  const { page } = useParams();
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const navigate = useNavigate();
  const searchParam = useTypedSelector(
    (state) => state.searchReducer.searchParam,
  );

  useEffect(() => {
    if (page === undefined) {
      navigate(`/${DEFAULT_PAGE_NUMBER}`, { replace: true });
    }

    localStorage.setItem('SearchParam', searchParam);
  }, [page, searchParam]);

  useEffect(() => {
    if (isErrorOccurred) throw new Error('Error button clicked');
  }, [isErrorOccurred]);

  return (
    <main className="page-content">
      <div className="main-content">
        <SearchField disabled={false} />
        <SearchContent />
        <Pagination />
        <Button className="red-button" onClick={() => setIsErrorOccurred(true)}>
          throw error
        </Button>
      </div>
      <Outlet />
    </main>
  );
};
