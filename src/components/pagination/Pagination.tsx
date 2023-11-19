import React, { FC, useState } from 'react';
import './style.scss';
import { Link, useParams } from 'react-router-dom';

export const Pagination: FC = () => {
  const { page } = useParams();
  const [pagesAmount] = useState(6);

  return (
    <ul className="pagination">
      {[...Array(pagesAmount)].map((item, index) => (
        <li
          key={index}
          className={`page-number ${
            Number(page) === index + 1 ? 'active-page' : ''
          }`}
        >
          <Link data-testid="pagination-button" to={`/${index + 1}`}>
            {index + 1}
          </Link>
        </li>
      ))}
    </ul>
  );
};
