import axios from 'axios';
import { starWarsApi } from '../StarWarsAPI';
import {
  mockPlanetDetailsData,
  getPlanetsMockResponse,
} from '../../test/mock/mockData';
import { describe, it, beforeAll, afterEach, Mock } from 'vitest';

describe('Star Wars API getPlanet method tests', () => {
  beforeAll(() => {
    axios.get = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Successful request', async () => {
    (axios.get as Mock).mockResolvedValue(mockPlanetDetailsData);
    const result = await starWarsApi.getPlanet('1');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockPlanetDetailsData.data);
  });
});

describe('Star Wars API getPlanets method tests', () => {
  beforeAll(() => {
    axios.get = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Successful request', async () => {
    (axios.get as Mock).mockResolvedValue(getPlanetsMockResponse);
    const result = await starWarsApi.getPlanets('1', 'Tatooine');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(starWarsApi.pagesAmount).toEqual(getPlanetsMockResponse.data.count);
    expect(result).toEqual(getPlanetsMockResponse.data.results);
  });
});
