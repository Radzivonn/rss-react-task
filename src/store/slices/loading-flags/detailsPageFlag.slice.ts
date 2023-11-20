import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { planetsApi } from '../../../API/API';

interface FlagState {
  isLoading: boolean;
}

const initialState: FlagState = {
  isLoading: false,
};

export const detailsFlagSlice = createSlice({
  name: 'detailsFlag',
  initialState,
  reducers: {
    setFlag: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(planetsApi.endpoints.getPlanet.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      planetsApi.endpoints.getPlanet.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
  },
});

export const { actions, reducer: detailsLoaderReducer } = detailsFlagSlice;
