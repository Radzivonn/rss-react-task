import React, { FC } from 'react';
import './style.scss';
import { Props } from './types';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';

export const Pagination: FC<Props> = ({ currentPage, pagesAmount }) => {
  return (
    <ul className="pagination">
      {[...Array(pagesAmount)].map((item, index) => (
        <li
          key={index}
          className={`page-number ${
            currentPage === index + 1 ? 'active-page' : ''
          }`}
        >
          <Link to={`${routes.main}?page=${index + 1}`}> {index + 1} </Link>
        </li>
      ))}
    </ul>
  );
};
