import axios from 'axios';
import { Planet } from './types';

class StarWarsAPI {
  URL: string;

  constructor() {
    this.URL = 'https://swapi.dev/api/';
  }

  getPlanets = async (
    pageNumber: number,
    searchParam?: string,
  ): Promise<Planet[]> => {
    const response = await axios.get(`${this.URL}/planets`, {
      params: {
        page: pageNumber,
        search: searchParam,
      },
    });
    return response.data.results;
  };

  getPlanet = async (planetNumber: number): Promise<Planet> => {
    const response = await axios.get(`${this.URL}/planets/${planetNumber}`);
    return response.data;
  };
}

export const starWarsApi = new StarWarsAPI();
