import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { SearchContent } from './SearchContent';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { NOT_FOUND_REQUEST_MESSAGE } from '../../constants/constants';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { mockGetPlanetsResponse } from '../../test/mock/mockData';
import { routes } from '../../router/routes';

describe('App test', () => {
  it('cards amount test', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/1']}>
          <SearchContent />
        </MemoryRouter>
      </Provider>,
    );
    const cards = await screen.findAllByTestId('card');
    expect(cards.length).toBe(mockGetPlanetsResponse.results.length);
  });

  it('nothing found test', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/qwerty']}>
          <Routes>
            <Route path={routes.main} element={<SearchContent />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(
      await screen.findByText(NOT_FOUND_REQUEST_MESSAGE),
    ).toBeInTheDocument();
  });
});
