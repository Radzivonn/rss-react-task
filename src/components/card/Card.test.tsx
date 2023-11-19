import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Mock, describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import {
  mockPlanetData,
  mockPlanetDetailsData,
} from '../../test/mock/mockData';
import { Card } from './Card';
import { AppContext } from '../../context/AppContext';
import { SearchContent } from '../searchContent/SearchContent';
import axios from 'axios';
import { Details } from '../../pages/details/Details';

describe('App test', () => {
  it('Ensure that the card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <Card
          name={mockPlanetData.name}
          id={mockPlanetData.id}
          description={mockPlanetData.description}
          onCardClick={() => undefined}
        />
      </MemoryRouter>,
    );
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent(mockPlanetData.name);
    expect(card).toHaveTextContent(mockPlanetData.description);
  });

  it('Check that clicking triggers an additional API call to fetch detailed information and opens a detailed card component', async () => {
    axios.get = vi.fn();
    (axios.get as Mock).mockResolvedValue(mockPlanetDetailsData);

    render(
      <MemoryRouter>
        <AppContext.Provider
          value={{
            searchParam: '',
            setSearchParam: () => undefined,
            planets: [mockPlanetDetailsData.data],
          }}
        >
          <SearchContent />
          <Details />
        </AppContext.Provider>
      </MemoryRouter>,
    );

    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();

    userEvent.click(card);

    expect(axios.get).toHaveBeenCalledTimes(1);

    const details = await screen.findByTestId('details');
    expect(details).toBeInTheDocument();
  });
});
