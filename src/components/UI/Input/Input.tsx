import React, { Component, ComponentProps } from 'react';

export class Input extends Component<ComponentProps<'input'>> {
  render(): React.ReactNode {
    return <input {...this.props} className="" autoComplete="on" />;
  }
}
