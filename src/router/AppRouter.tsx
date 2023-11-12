import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Main } from '../pages/main/Main';
import { Details } from '../pages/details/Details';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />}>
        <Route path={routes.details} element={<Details />} />
      </Route>
      <Route path="*" element={<Navigate to="/1" replace />} />
    </Routes>
  );
};

export default AppRouter;
