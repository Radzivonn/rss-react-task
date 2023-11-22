import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { SearchField } from './SearchField';

describe('App test', () => {
  it('Clicking the Search button saves the entered value to the local storage', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchField disabled={false} />
        </MemoryRouter>
      </Provider>,
    );
    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-button');

    userEvent.click(searchButton);

    expect(searchInput).toHaveValue(localStorage.getItem('SearchParam') ?? '');
  });
});
