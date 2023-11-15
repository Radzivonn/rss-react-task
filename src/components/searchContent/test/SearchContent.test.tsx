import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { SearchContent } from '../SearchContent';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import { mockArrayPlanetsDetails } from '../../../test/mock/mockData';
import { NOT_FOUND_REQUEST_MESSAGE } from '../../../constants/constants';

describe('App test', () => {
  it('cards amount test', async () => {
    render(
      <MemoryRouter>
        <AppContext.Provider
          value={{
            searchParam: '',
            setSearchParam: () => undefined,
            planets: mockArrayPlanetsDetails.data,
          }}
        >
          <SearchContent />
        </AppContext.Provider>
      </MemoryRouter>,
    );
    const cardsAmount = await screen.findAllByTestId('card');
    expect(cardsAmount.length).toBe(2);
  });

  it('cards amount test', async () => {
    render(
      <MemoryRouter>
        <AppContext.Provider
          value={{
            searchParam: '',
            setSearchParam: () => undefined,
            planets: [],
          }}
        >
          <SearchContent />
        </AppContext.Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText(NOT_FOUND_REQUEST_MESSAGE)).toBeInTheDocument();
  });
});
