import { Planet } from '../../API/types';

export interface Props {
  planets: Planet[];
  onCardClick: (id: string) => void;
}
