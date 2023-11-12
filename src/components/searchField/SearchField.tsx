import React, { FC, useContext, useState } from 'react';
import './style.scss';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { Props } from './types';
import { AppContext } from '../../context/AppContext';

export const SearchField: FC<Props> = ({ ...props }) => {
  const { searchParam, setSearchParam } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(searchParam);

  return (
    <section className="search-field">
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.trim())}
      />
      <Button
        onClick={() => setSearchParam(inputValue)}
        disabled={props.disabled}
      >
        search
      </Button>
    </section>
  );
};
