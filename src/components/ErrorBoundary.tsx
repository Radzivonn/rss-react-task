import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: ErrorEvent) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1> Something went wrong </h1>;
    }

    return this.props.children;
  }
}

export class ErrorFallback extends Component<Props, State> {
  render(): ReactNode {
    return <h1 style={{ textAlign: 'center' }}> Something went wrong </h1>;
  }
}
