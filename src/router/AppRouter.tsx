import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { routes } from './routes';
import { Main } from '../pages/main/Main';
import { Details } from '../pages/details/Details';

const AppRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/1');
  }, []);

  return (
    <Routes>
      <Route path={routes.main} element={<Main />}>
        <Route path={routes.details} element={<Details />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
