import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchParam: string;
}

const initialState: SearchState = {
  searchParam: localStorage.getItem('SearchParam') ?? '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParam: (state, action: PayloadAction<string>) => {
      state.searchParam = action.payload;
    },
  },
});

export const { actions, reducer: searchReducer } = searchSlice;
