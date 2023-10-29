import { Planet } from '../API/types';

export interface Props {
  children: ChildNode;
}

export interface State {
  isErrorButtonClicked: boolean;
  planets: Planet[];
  pageNumber: number;
  searchParam: string;
}
