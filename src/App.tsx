import React, { FC } from 'react';
import './styles/App.scss';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
