import { describe, it, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Details } from './Details';
import axios from 'axios';
import { mockPlanetDetailsData } from '../../test/mock/mockData';
import userEvent from '@testing-library/user-event';
import { routes } from '../../router/routes';

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
      <MemoryRouter>
        <Details />
      </MemoryRouter>,
    );

    const loader = screen.getByTestId('mock-loader');
    expect(loader).not.toBe(null);
  });

  it('Make sure the detailed card component correctly displays the detailed card data', async () => {
    axios.get = vi.fn().mockResolvedValue(mockPlanetDetailsData);

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>,
    );

    const details = await screen.findByTestId('details');
    expect(details).toBeInTheDocument();
    expect(details).toHaveTextContent(
      `name: ${mockPlanetDetailsData.data.name}`,
    );
    expect(details).toHaveTextContent(
      `climate: ${mockPlanetDetailsData.data.climate}`,
    );
    expect(details).toHaveTextContent(
      `terrain: ${mockPlanetDetailsData.data.terrain}`,
    );
    expect(details).toHaveTextContent(
      `diameter: ${mockPlanetDetailsData.data.diameter}`,
    );
    expect(details).toHaveTextContent(
      `population: ${mockPlanetDetailsData.data.population}`,
    );
    expect(details).toHaveTextContent(
      `gravity: ${mockPlanetDetailsData.data.gravity}`,
    );
    expect(details).toHaveTextContent(
      `surface water: ${mockPlanetDetailsData.data.surface_water}`,
    );
    expect(details).toHaveTextContent(
      `rotation period: ${mockPlanetDetailsData.data.rotation_period}`,
    );
    expect(details).toHaveTextContent(
      `orbital period: ${mockPlanetDetailsData.data.orbital_period}`,
    );
  });

  it('Ensure that clicking the close button hides the component.', async () => {
    axios.get = vi.fn().mockResolvedValue(mockPlanetDetailsData);

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path={routes.details} element={<Details />} />
        </Routes>
      </MemoryRouter>,
    );
    const closeButton = await screen.findByText('close');
    expect(closeButton).toBeInTheDocument();

    userEvent.click(closeButton);

    expect(screen.queryByTestId('details')).not.toBeInTheDocument();
  });
});
