import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Main } from '../pages/main/Main';
import { Details } from '../pages/details/Details';
import { NotFound } from '../pages/not-found/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />}>
        <Route path={routes.details} element={<Details />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
