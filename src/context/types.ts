import { Planet } from '../API/types';

export interface AppContextInterface {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  planets: Planet[];
}
