import { combineReducers } from '@reduxjs/toolkit';
import { searchReducer } from '../slices/search/search.slice';
import { planetsApi } from '../../API/API';
import { mainLoaderReducer } from '../slices/loading-flags/mainPageFlag.slice';
import { detailsLoaderReducer } from '../slices/loading-flags/detailsPageFlag.slice';

export const rootReducer = combineReducers({
  searchReducer,
  mainLoaderReducer,
  detailsLoaderReducer,
  [planetsApi.reducerPath]: planetsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
