import React, { FC, useState } from 'react';
import './style.scss';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { Props } from './types';

export const SearchField: FC<Props> = ({ ...props }) => {
  const [searchParam, setSearchParam] = useState(
    localStorage.getItem('SearchParam') ?? '',
  );

  return (
    <section className="search-field">
      <Input
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value.trim())}
      />
      <Button
        onClick={() => props.onSearch(searchParam)}
        disabled={props.disabled}
      >
        search
      </Button>
    </section>
  );
};
