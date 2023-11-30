import { FC } from 'react';
import { NOT_FOUND_PAGE_MESSAGE } from '../../constants/constants';

const NotFound: FC = () => {
  return <h1 data-testid="not-found-page"> {NOT_FOUND_PAGE_MESSAGE} </h1>;
};

export default NotFound;
