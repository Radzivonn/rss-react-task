import React, { Component } from 'react';
import { SearchField } from '../components/searchField/SearchField';
import { SearchContent } from '../components/searchContent/SearchContent';
import { Button } from '../components/UI/Button/Button';
import { starWarsApi } from '../API/StarWarsAPI';
import { Props, State } from './types';
import { TailSpin } from 'react-loader-spinner';

export class Main extends Component<Props, State> {
  state = { isErrorButtonClicked: false, planets: [] };

  async componentDidMount() {
    this.setState({
      planets: await starWarsApi.getPlanets(1),
    });
  }

  render(): React.ReactNode {
    if (this.state.isErrorButtonClicked)
      throw new Error('Error button clicked');

    return (
      <main className="page-content">
        <SearchField />
        {this.state.planets.length ? (
          <SearchContent planets={this.state.planets} />
        ) : (
          <TailSpin
            height="80"
            width="80"
            color="#feffb5"
            radius="1"
            wrapperStyle={{ margin: '0 auto' }}
            visible={true}
          />
        )}
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
