import { combineReducers } from '@reduxjs/toolkit';
import { searchReducer } from '../slices/search/search.slice';
import { planetsApi } from '../../API/API';

export const rootReducer = combineReducers({
  searchReducer,
  [planetsApi.reducerPath]: planetsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
