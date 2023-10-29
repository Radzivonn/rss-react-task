import React, { Component } from 'react';
import './style.scss';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';

export class SearchField extends Component {
  render(): React.ReactNode {
    return (
      <section className="search-field">
        <Input />
        <Button>search</Button>
      </section>
    );
  }
}
