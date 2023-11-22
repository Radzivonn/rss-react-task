import { HttpResponse, http } from 'msw';
import { BASE_API_URL } from '../../constants/constants';
import { mockGetPlanetsResponse, mockPlanetDetailsData } from './mockData';

export const handlers = [
  http.get(`${BASE_API_URL}`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');

    if (Number.isNaN(Number(page))) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(mockGetPlanetsResponse);
  }),
  http.get(`${BASE_API_URL}/:id`, ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (Number.isNaN(Number(id))) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(mockPlanetDetailsData);
  }),
];
