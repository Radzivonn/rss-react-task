import React, { Component } from 'react';
import { Layout } from './components/Layout';
import './styles/App.scss';

export class App extends Component {
  render(): React.ReactNode {
    return (
      <>
        <Layout />
      </>
    );
  }
}
