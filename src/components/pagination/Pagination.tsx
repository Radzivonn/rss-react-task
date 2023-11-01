import React, { FC } from 'react';
import './style.scss';
import { Props } from './types';

export const Pagination: FC<Props> = ({
  currentPage,
  pagesAmount,
  switchPage,
}) => {
  return (
    <ul className="pagination">
      {[...Array(pagesAmount)].map((item, index) => (
        <li
          key={index}
          onClick={() => switchPage(index + 1)}
          className={`page-number ${
            currentPage === index + 1 ? 'active-page' : ''
          }`}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};
