import { describe, it, expect } from 'vitest';
import {
  actions,
  initialState,
  mainLoaderReducer,
} from '../mainPageFlag.slice';

describe('main page flag test', () => {
  it('should return default state when passed an empty action', async () => {
    const result = mainLoaderReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should return set true to isLoading state when passed an action', async () => {
    const result = mainLoaderReducer(undefined, actions.setFlag(true));
    expect(result.isLoading).toEqual(true);
  });
});
