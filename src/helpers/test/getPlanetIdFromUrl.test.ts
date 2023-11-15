import { describe, expect, it } from 'vitest';
import getPlanetIdFromUrl from '../getPlanetIdFromUrl';

describe('getPlanetIdFromUrl helper tests', () => {
  it('test', () => {
    expect(getPlanetIdFromUrl('https://swapi.dev/api/planets/1/')).toEqual('1');
  });
});
