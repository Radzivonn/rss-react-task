import React, { Component } from 'react';
import './styles/App.scss';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';

export class App extends Component {
  render(): React.ReactNode {
    return (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    );
  }
}
