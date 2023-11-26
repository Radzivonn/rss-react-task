import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { Props } from './types';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_PAGE_NUMBER } from '../../constants/constants';
import { actions } from '../../store/slices/search/search.slice';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const SearchField: FC<Props> = ({ ...props }) => {
  const searchParam = useTypedSelector(
    (state) => state.searchReducer.searchParam,
  );
  const [inputValue, setInputValue] = useState(searchParam);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          dispatch(actions.setSearchParam(inputValue));
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
