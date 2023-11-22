import { describe, it, expect } from 'vitest';
import {
  actions,
  detailsLoaderReducer,
  initialState,
} from '../detailsPageFlag.slice';

describe('details page flag test', () => {
  it('should return default state when passed an empty action', async () => {
    const result = detailsLoaderReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should return set true to isLoading state when passed an action', async () => {
    const result = detailsLoaderReducer(undefined, actions.setFlag(true));
    expect(result.isLoading).toEqual(true);
  });
});
