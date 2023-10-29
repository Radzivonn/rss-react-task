import React, { Component } from 'react';
import { SearchField } from '../components/searchField/SearchField';
import { SearchContent } from '../components/searchContent/SearchContent';
import { Button } from '../components/UI/Button/Button';

export class Main extends Component {
  render(): React.ReactNode {
    return (
      <main className="page-content">
        <SearchField />
        <SearchContent />
        <Button className="error-button"> throw error </Button>
      </main>
    );
  }
}
