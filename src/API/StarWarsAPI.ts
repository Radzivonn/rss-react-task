import axios from 'axios';

class StarWarsAPI {
  URL: string;

  constructor() {
    this.URL = 'https://swapi.dev/api/';
  }

  getPlanets = async (pageNumber: number, searchParam?: string) => {
    return axios.get(`${this.URL}/planets`, {
      params: {
        page: pageNumber,
        search: searchParam,
      },
    });
  };
}

export const starWarsApi = new StarWarsAPI();
