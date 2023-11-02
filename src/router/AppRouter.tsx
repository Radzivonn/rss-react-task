import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Main } from '../pages/Main';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
    </Routes>
  );
};

export default AppRouter;
