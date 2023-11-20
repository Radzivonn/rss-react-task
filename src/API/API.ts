import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Planet, getPlanetsQueryParams } from './types';
import { BASE_URL } from '../constants/constants';

interface apiResponseType {
  results: Planet[];
}

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  tagTypes: ['Planets', 'Planet'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPlanets: builder.query<apiResponseType, getPlanetsQueryParams>({
      query: ({ pageNumber, searchParam }) => ({
        url: '/',
        params: {
          page: pageNumber,
          search: searchParam,
        },
      }),
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
