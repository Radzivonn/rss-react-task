import axios from 'axios';

class StarWarsAPI {
  URL: string;

  constructor() {
    this.URL = 'https://swapi.dev/api/';
  }

  getPlanets = async () => {
    return axios.get(`${this.URL}/planets`);
  };
}

export const starWarsApi = new StarWarsAPI();
