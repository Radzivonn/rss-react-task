import React, { Component } from 'react';
import { SearchField } from '../components/searchField/SearchField';
import { SearchContent } from '../components/searchContent/SearchContent';
import { Button } from '../components/UI/Button/Button';

export class Main extends Component {
  state = { isErrorButtonClicked: false };

  render(): React.ReactNode {
    if (this.state.isErrorButtonClicked)
      throw new Error('Error button clicked');

    return (
      <main className="page-content">
        <SearchField />
        <SearchContent />
        <Button
          className="error-button"
          onClick={() =>
            this.setState({
              isErrorButtonClicked: true,
            })
          }
        >
          throw error
        </Button>
      </main>
    );
  }
}
