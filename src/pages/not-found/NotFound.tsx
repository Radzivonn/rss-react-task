import React from 'react';
import { NOT_FOUND_PAGE_MESSAGE } from '../../constants/constants';

export const NotFound = () => {
  return <h1 data-testid="not-found-page"> {NOT_FOUND_PAGE_MESSAGE} </h1>;
};
