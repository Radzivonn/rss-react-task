import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Planet, getPlanetsQueryParams } from './types';

interface apiResponseType {
  results: Planet[];
}

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  tagTypes: ['Planets', 'Planet'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/planets' }),
  endpoints: (builder) => ({
    getPlanets: builder.query<apiResponseType, getPlanetsQueryParams>({
      query: ({ pageNumber, searchParam }) =>
        `?page=${pageNumber}&search=${searchParam}`,
      providesTags: () => [
        {
          type: 'Planets',
        },
      ],
    }),
    getPlanet: builder.query<Planet, string>({
      query: (number) => `planets/${number}`,
      providesTags: () => [
        {
          type: 'Planet',
        },
      ],
    }),
  }),
});

export const { useGetPlanetsQuery, useGetPlanetQuery } = planetsApi;
