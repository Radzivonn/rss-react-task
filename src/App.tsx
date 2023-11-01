import React, { FC } from 'react';
import './styles/App.scss';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  );
};
