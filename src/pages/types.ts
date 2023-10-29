import { ReactNode } from 'react';
import { Planet } from '../API/types';

export interface Props {
  children?: ReactNode;
}

export interface State {
  isErrorButtonClicked: boolean;
  planets: Planet[];
  pageNumber: number;
  searchParam: string;
}
