import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { mockPlanetData } from '../../test/mock/mockData';
import { Card } from './Card';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import AppRouter from '../../router/AppRouter';

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

  it('Clicking triggers an additional API call to fetch detailed information and opens a detailed card component', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/1']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>,
    );

    const cards = await screen.findAllByTestId('card');
    expect(cards[0]).toBeInTheDocument();
    expect(cards[0]).toHaveTextContent('Tatooine');

    userEvent.click(cards[0]);

    const details = await screen.findByTestId('details');
    expect(details).toBeInTheDocument();
  });
});
