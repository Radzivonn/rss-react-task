import React, { Component } from 'react';
import { SearchField } from '../components/searchField/SearchField';
import { SearchContent } from '../components/searchContent/SearchContent';
import { Button } from '../components/UI/Button/Button';
import { starWarsApi } from '../API/StarWarsAPI';
import { Props, State } from './types';
import { TailSpin } from 'react-loader-spinner';

export class Main extends Component<Props, State> {
  state = {
    isErrorButtonClicked: false,
    planets: [],
    pageNumber: 1,
    searchParam: localStorage.getItem('SearchParam') ?? '',
  };

  async getPlanets(searchParam: string) {
    this.setState({
      searchParam,
      planets: [],
    });
  }

  async componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ) {
    if (
      this.state.searchParam !== prevState.searchParam &&
      !this.state.planets.length
    ) {
      localStorage.setItem('SearchParam', this.state.searchParam);
      const planets = await starWarsApi.getPlanets(
        this.state.pageNumber,
        this.state.searchParam,
      );
      this.setState({
        planets,
      });
    }
  }

  async componentDidMount() {
    this.setState({
      planets: await starWarsApi.getPlanets(
        this.state.pageNumber,
        this.state.searchParam,
      ),
    });
  }

  render(): React.ReactNode {
    if (this.state.isErrorButtonClicked)
      throw new Error('Error button clicked');

    return (
      <main className="page-content">
        <SearchField
          onSearch={this.getPlanets.bind(this)}
          disabled={!this.state.planets.length}
        />
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
