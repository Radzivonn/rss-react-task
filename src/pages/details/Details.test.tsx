import { describe, it, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Details } from './Details';
import { mockPlanetDetailsData } from '../../test/mock/mockData';
import userEvent from '@testing-library/user-event';
import { routes } from '../../router/routes';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

vi.mock('react-loader-spinner', async (importOriginal) => {
  const mod = await importOriginal<typeof import('react-loader-spinner')>();
  return {
    ...mod,
    TailSpin: vi.fn().mockReturnValue(<div data-testid={'mock-loader'} />),
  };
});

describe('Details component tests', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Check that a loading indicator is displayed while fetching data', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
            <Route path={routes.details} element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const loader = screen.getByTestId('mock-loader');
    expect(loader).not.toBe(null);
  });

  it('Detailed card component correctly displays the detailed card data', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
            <Route path={routes.details} element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const details = await screen.findByTestId('details');
    expect(details).toBeInTheDocument();
    expect(details).toHaveTextContent(`name: ${mockPlanetDetailsData.name}`);
    expect(details).toHaveTextContent(
      `climate: ${mockPlanetDetailsData.climate}`,
    );
    expect(details).toHaveTextContent(
      `terrain: ${mockPlanetDetailsData.terrain}`,
    );
    expect(details).toHaveTextContent(
      `diameter: ${mockPlanetDetailsData.diameter}`,
    );
    expect(details).toHaveTextContent(
      `population: ${mockPlanetDetailsData.population}`,
    );
    expect(details).toHaveTextContent(
      `gravity: ${mockPlanetDetailsData.gravity}`,
    );
    expect(details).toHaveTextContent(
      `surface water: ${mockPlanetDetailsData.surface_water}`,
    );
    expect(details).toHaveTextContent(
      `rotation period: ${mockPlanetDetailsData.rotation_period}`,
    );
    expect(details).toHaveTextContent(
      `orbital period: ${mockPlanetDetailsData.orbital_period}`,
    );
  });

  it('Ensure that clicking the close button hides the component.', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
            <Route path={routes.details} element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    const closeButton = await screen.findByText('close');
    expect(closeButton).toBeInTheDocument();

    userEvent.click(closeButton);

    expect(screen.queryByTestId('details')).not.toBeInTheDocument();
  });
});
