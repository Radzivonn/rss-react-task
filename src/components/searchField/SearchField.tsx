import React, { Component } from 'react';
import './style.scss';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { Props, State } from './types';

export class SearchField extends Component<Props, State> {
  state = { searchParam: '' };

  render(): React.ReactNode {
    return (
      <section className="search-field">
        <Input
          type="text"
          onChange={(e) =>
            this.setState({
              searchParam: e.target.value.trim(),
            })
          }
        />
        <Button
          onClick={() => this.props.onSearch(this.state.searchParam)}
          disabled={this.props.disabled}
        >
          search
        </Button>
      </section>
    );
  }
}
