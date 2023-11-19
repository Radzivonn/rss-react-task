import React, { FC, useContext, useState } from 'react';
import './style.scss';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { Props } from './types';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_PAGE_NUMBER } from '../../constants/constants';

export const SearchField: FC<Props> = ({ ...props }) => {
  const { searchParam, setSearchParam } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(searchParam);
  const navigate = useNavigate();

  return (
    <section className="search-field">
      <Input
        type="text"
        defaultValue={inputValue}
        onChange={(e) => setInputValue(e.target.value.trim())}
        data-testid="search-input"
      />
      <Button
        onClick={() => {
          setSearchParam(inputValue);
          navigate(`/${DEFAULT_PAGE_NUMBER}`);
        }}
        disabled={props.disabled}
        data-testid="search-button"
      >
        search
      </Button>
    </section>
  );
};
