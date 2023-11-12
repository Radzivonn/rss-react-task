import axios from 'axios';
import { Planet } from './types';
import { MAX_ITEMS_PER_PAGE } from '../constants/constants';

class StarWarsAPI {
  URL: string;
  pagesAmount: number;

  constructor() {
    this.URL = 'https://swapi.dev/api/';
    this.pagesAmount = 0;
  }

  getPlanets = async (
    pageNumber: string,
    searchParam?: string,
  ): Promise<Planet[]> => {
    const response = await axios
      .get(`${this.URL}/planets`, {
        params: {
          page: pageNumber,
          search: searchParam,
        },
      })
      .catch((error) => {
        throw new Error(error);
      });
    this.pagesAmount = Math.ceil(response.data.count / MAX_ITEMS_PER_PAGE);
    return response.data.results;
  };

  getPlanet = async (planetNumber: string): Promise<Planet> => {
    const response = await axios
      .get(`${this.URL}/planets/${planetNumber}`)
      .catch((error) => {
        throw new Error(error);
      });
    return response.data;
  };
}

export const starWarsApi = new StarWarsAPI();
