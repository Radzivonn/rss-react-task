import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Main } from '../../pages/main/Main';

describe('App test', () => {
  it('Component retrieves the value from the local storage upon mounting', async () => {
    const localStorageValue = 'Tatooine';
    localStorage.setItem('SearchParam', localStorageValue);

    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
    );
    const searchInput = screen.getByTestId('search-input');

    expect(localStorage.getItem('SearchParam')).toEqual(localStorageValue);
    expect(searchInput).toHaveValue(localStorageValue);
  });

  it('Clicking the Search button saves the entered value to the local storage', async () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
    );
    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-button');

    userEvent.click(searchButton);

    expect(searchInput).toHaveValue(localStorage.getItem('SearchParam') ?? '');
  });
});
