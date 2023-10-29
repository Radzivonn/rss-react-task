import React, { Component, ComponentProps } from 'react';
import './style.scss';

export class Button extends Component<ComponentProps<'button'>> {
  render(): React.ReactNode {
    return (
      <button {...this.props} type="button">
        {this.props.children}
      </button>
    );
  }
}
