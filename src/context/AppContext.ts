import { createContext } from 'react';
import { AppContextInterface } from './types';

export const AppContext = createContext<AppContextInterface>({
  searchParam: '',
  setSearchParam: () => undefined,
  planets: [],
});
